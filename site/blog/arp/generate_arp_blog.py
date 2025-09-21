#!/usr/bin/env python3
# Generate ARP blog pages by fetching Markdown from GitHub and converting to HTML.
# Usage:
#   python generate_arp_blog.py --out ../site/blog/arp
# Requires: requests, markdown
import argparse, os, re, sys, html
from pathlib import Path
import requests, markdown
OWNER = "RDM3DC"
REPO = "Adaptive-Resistance-Principle-ARP-"
BRANCH = "main"
API = f"https://api.github.com/repos/{OWNER}/{REPO}/git/trees/{BRANCH}?recursive=1"
RAW_BASE = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/{BRANCH}"
BLOB_BASE = f"https://github.com/{OWNER}/{REPO}/blob/{BRANCH}"
def slugify(path: str) -> str:
    s = path.lower().replace(' ', '-').replace('/', '-').replace('\\', '-')
    for ch in [',', ':', '–', '—', '(', ')', '.']:
        s = s.replace(ch, '-')
    while '--' in s:
        s = s.replace('--', '-')
    return s.strip('-')
def is_markdown(p: str) -> bool:
    return p.lower().endswith('.md')
def rest_get(url: str):
    headers = {'Accept': 'application/vnd.github+json'}
    token = os.getenv('GITHUB_TOKEN') or os.getenv('GH_TOKEN')
    if token:
        headers['Authorization'] = f'Bearer {token}'
    r = requests.get(url, headers=headers, timeout=30)
    r.raise_for_status()
    return r
def fetch_tree():
    r = rest_get(API)
    return r.json()['tree']
def fix_links(md: str, md_path: str) -> str:
    # images
    def repl_img(m):
        alt, link = m.group(1), m.group(2)
        if re.match(r'^https?://', link):
            return m.group(0)
        abs_url = f"{RAW_BASE}/{'/'.join(md_path.split('/')[:-1])}/{link.lstrip('./')}"
        return f'![{alt}]({abs_url})'
    md = re.sub(r'!\[([^\]]*)\]\(([^\)]+)\)', repl_img, md)
    # links
    def repl_link(m):
        text, link = m.group(1), m.group(2)
        if re.match(r'^https?://', link) or link.startswith('#'):
            return m.group(0)
        abs_url = f"{BLOB_BASE}/{'/'.join(md_path.split('/')[:-1])}/{link.lstrip('./')}"
        return f'[{text}]({abs_url})'
    md = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', repl_link, md)
    return md
def to_html(title: str, body_html: str) -> str:
    head = ('<!DOCTYPE html>\n'
            '<html lang="en">\n'
            '<head>\n'
            '  <meta charset="utf-8">\n'
            '  <meta name="viewport" content="width=device-width,initial-scale=1">\n'
            '  <title>' + html.escape(title) + '</title>\n'
            '  <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:2rem;max-width:960px}'
            'pre{overflow:auto;background:#0b1020;color:#e6eefc;padding:.75rem;border-radius:8px}'
            'code{font-family:ui-monospace,Menlo,Consolas,monospace}'
            'hr{border:none;border-top:1px solid #e5e7eb;margin:2rem 0}</style>\n'
            '</head>\n<body>\n  <h1>' + html.escape(title) + '</h1>\n')
    tail = ('  <hr>\n  <p><a href="../index.html">Back to ARP blog index</a></p>\n</body>\n</html>')
    return head + body_html + '\n' + tail
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', required=True, help='Output directory (e.g., site/blog/arp)')
    args = ap.parse_args()
    out = Path(args.out)
    posts = out / 'posts'
    posts.mkdir(parents=True, exist_ok=True)
    tree = fetch_tree()
    md_files = sorted([t['path'] for t in tree if t.get('type')=='blob' and is_markdown(t['path'])])
    cards = []
    for md_path in md_files:
        raw_url = f'{RAW_BASE}/{md_path}'
        blob_url = f'{BLOB_BASE}/{md_path}'
        slug = slugify(md_path)
        title = md_path.rsplit('/',1)[-1].replace('.md','')
        r = rest_get(raw_url); md = r.text
        md = fix_links(md, md_path)
        body_html = markdown.markdown(md, extensions=['extra','fenced_code','tables','toc'])
        page_html = to_html(title, body_html)
        (posts / f'{slug}.html').write_text(page_html, encoding='utf-8')
        cards.append(f'<div class="card"><h3><a href="posts/{slug}.html">{title}</a></h3><div class="meta"><a href="{blob_url}">Source</a></div></div>')
    index = ('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n             "  <title>ARP Blog - All Markdown</title>\n             "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n             "  <style>body { font-family: system-ui,-apple-system,Segoe UI,Roboto,sans-serif; margin: 2rem; } .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; } .card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); } .card h3 { margin: 0 0 0.5rem; font-size: 1.05rem; } .meta { font-size: 0.9rem; color: #666; }</style>\n</head>\n<body>\n  <h1>Adaptive Resistance Principle — All Markdown</h1>\n  <p>This index was generated automatically from the repository’s Markdown files.</p>\n  <div class="grid">\n  ' + '\n  '.join(cards) + '\n  </div>\n</body>\n</html>')
    (out / 'index.html').write_text(index, encoding='utf-8')
    print(f'Wrote {len(md_files)} pages under {out}')
if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('Error:', e, file=sys.stderr); sys.exit(1)