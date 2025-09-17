# ARP-RDM3DC Site

Static landing page for Adaptive π — the 4D, curve-native CAD campaign.

## Live deployment

- **Production URL:** https://rdm3dc.github.io/ARP-RDM3DC/
- **Hosting:** GitHub Pages (deployed by GitHub Actions)

Every push to the `main` branch publishes the contents of [`site/`](site/) via the workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

## Project structure

```
ARP-RDM3DC/
├── index.html             # Redirect shim → site/index.html for local previews
├── site/
│   ├── index.html         # Landing page served by GitHub Pages
│   └── assets/            # Videos, posters, logos, screenshots
└── .github/workflows/
    └── pages.yml          # Static deploy pipeline
```

### Updating the hero video

1. Replace `site/assets/hero.mp4` with the latest teaser (keep filename).
2. (Optional) Host a poster image and update the `<video poster="…">` attribute in [`site/index.html`](site/index.html) if you do not want to use the default inline gradient placeholder.
3. Remove the filenames from [`site/assets/.gitignore`](site/assets/.gitignore) if you want to commit the media, then commit the changes so the deploy workflow uploads them to Pages.

### Customising copy & CTA

- Update Kickstarter links inside [`site/index.html`](site/index.html) once the final campaign URL is ready.
- Feature cards, rewards, and roadmap blurbs are pure HTML — adjust text or add new cards as needed.

### Local development

The site is fully static. Open `site/index.html` directly in a browser or run a lightweight HTTP server:

```bash
cd site
python3 -m http.server 8000
# Visit http://localhost:8000
```

> Tip: opening the repository root `index.html` will instantly redirect to `site/index.html`, so local previews show the live layout without needing to remember the subfolder.

### Contact

Reach out via [ryanmckenna26@gmail.com](mailto:ryanmckenna26@gmail.com) or text **951‑392‑0096** for any content updates.
