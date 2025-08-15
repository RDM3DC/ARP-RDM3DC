import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Cpu, AppWindow, ShieldCheck, Github, Mail, Twitter, Boxes, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ---------------------------------------------
// RDM3DC — One-page marketing site
// Stack: React + Tailwind + shadcn/ui + Framer Motion + Lucide icons
// ---------------------------------------------

const divisions = [
  {
    key: "labs",
    icon: <FlaskConical className="h-6 w-6" />,
    title: "RDM3DC Labs",
    blurb: "ARP, RealignR, adaptive geometry — core research, papers, and open repos.",
  },
  {
    key: "prototyping",
    icon: <Boxes className="h-6 w-6" />,
    title: "Prototyping",
    blurb: "CAD, 3D printing, ER-fluid devices, robotics, and rapid product development.",
  },
  {
    key: "verification",
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Blockchain & Verification",
    blurb: "Reproducibility, verifiable experiments, audit trails, and open attestations.",
  },
  {
    key: "apps",
    icon: <AppWindow className="h-6 w-6" />,
    title: "Apps",
    blurb: "Research dashboards, optimizer UIs, and realtime geo-aware tools.",
  },
];

const projects = [
  {
    tag: "Research",
    title: "Adaptive Resistance Principle (ARP)",
    copy: "A dynamic systems law used for optimization, analog computing, and ML stability.",
    cta: "View repo",
    href: "https://github.com/RDM3DC/Adaptive-Resistance-Principle-ARP-",
  },
  {
    tag: "Optimizer",
    title: "RealignR",
    copy: "A lifelong optimizer with slope-aware memory and ARP integration.",
    cta: "See docs",
    href: "#",
  },
  {
    tag: "CAD",
    title: "AdaptiveCAD",
    copy: "Geometry that bends with constraints — πₐ, curve memory, and plugins.",
    cta: "Explore",
    href: "https://github.com/RDM3DC/AdaptiveCAD",
  },
  {
    tag: "Geometry",
    title: "Adaptive Pi Geometry (πₐ)",
    copy: "Constraint-bent π for curved designs, survey alignment, and physics demos.",
    cta: "Overview",
    href: "#",
  },
  {
    tag: "Circuits",
    title: "Adaptive Impedance Network (AIN)",
    copy: "Dynamic G/C/L networks for optimization, control, and robust signal paths.",
    cta: "Design notes",
    href: "#",
  },
  {
    tag: "Hardware",
    title: "ER-Fluid Analog Computer",
    copy: "Electrorheological hardware for TSP-style routing and field solvers.",
    cta: "Lab prototype",
    href: "#",
  },
];

export default function RDM3DCLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/rdm3dc-logo.jpg" alt="RDM3DC logo" className="h-8 w-8 rounded-xl" />
            <span className="font-semibold tracking-tight">RDM3DC</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#divisions" className="hover:text-white">Divisions</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contact">Work with us</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-600/60 via-cyan-500/60 to-emerald-500/60 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Building <span className="text-cyan-300">Adaptive</span> Systems that Learn, Align & Ship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-slate-300 max-w-2xl mx-auto"
          >
            From ARP and RealignR to ER‑fluid prototypes and production‑ready tools — RDM3DC is the parent company unifying research, engineering, and product.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button asChild size="lg" className="rounded-2xl">
              <a href="#projects">Explore projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl">
              <a href="#contact">Partner with us</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Divisions</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Organized to stay fast: research in Labs, product in Prototyping, verifiable science on‑chain, and customer apps in Apps.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divisions.map((d) => (
            <Card key={d.key} className="rounded-2xl border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10">{d.icon}</div>
                <CardTitle className="text-base">{d.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300">{d.blurb}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <a className="text-sm text-cyan-300 hover:text-white" href="https://github.com/RDM3DC" target="_blank" rel="noreferrer">
            <div className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> All GitHub</div>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Card className="group rounded-2xl border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
                <CardHeader>
                  <div className="text-xs uppercase tracking-wide text-cyan-300/80">{p.tag}</div>
                  <CardTitle className="mt-1 text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{p.copy}</p>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="secondary" className="rounded-xl">
                      <a href={p.href} target="_blank" rel="noreferrer">{p.cta}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <Cpu className="h-6 w-6" />
              <CardTitle>Research → Product</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              We bridge frontier math/physics with shipped tools. If it can be simulated, we can prototype it.
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6" />
              <CardTitle>Open‑core, IP‑aware</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              Public repos where it helps adoption; protected IP where it matters for a moat.
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6" />
              <CardTitle>Fast Experiments</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              Tight iteration loops: sim → prototype → field test. We ship proof fast and scale what works.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Let’s build something adaptive.</h3>
              <p className="mt-2 text-slate-300">Consulting, partnerships, or R&D collabs. Tell us what you’re trying to unlock.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="mailto:ryanmckenna26@gmail.com"><Mail className="mr-2 h-4 w-4"/> ryanmckenna26@gmail.com</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href="https://github.com/RDM3DC" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/> GitHub</a>
                </Button>
                <Button asChild variant="ghost" className="rounded-2xl text-slate-300 hover:text-white">
                  <a href="https://x.com/RDM3DC" target="_blank" rel="noreferrer"><Twitter className="mr-2 h-4 w-4"/> Follow on X</a>
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="Your name" aria-label="Your name" />
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="Email" aria-label="Email" />
              <textarea rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="What would you like to build?" aria-label="Project description" />
              <Button className="rounded-2xl w-full">Send message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} RDM3DC. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="https://github.com/RDM3DC" target="_blank" rel="noreferrer"><Github className="inline h-4 w-4 mr-1"/> GitHub</a>
            <a className="hover:text-white" href="mailto:ryanmckenna26@gmail.com"><Mail className="inline h-4 w-4 mr-1"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
    href: "#",
  },
];

export default function RDM3DCLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 grid place-items-center shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">RDM3DC</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#divisions" className="hover:text-white">Divisions</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-2xl">
              <a href="#contact">Work with us</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-600/60 via-cyan-500/60 to-emerald-500/60 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight">
            Building **Adaptive** Systems that Learn, Align & Ship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-slate-300 max-w-2xl mx-auto">
            From ARP and RealignR to ER‑fluid prototypes and production‑ready apps — RDM3DC is the parent company unifying research, engineering, and product.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-2xl">
              <a href="#projects">Explore projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl">
              <a href="#contact">Partner with us</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Divisions</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Organized to stay fast: research in Labs, product in Prototyping, experiments in Games, and customer apps in Apps.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divisions.map((d) => (
            <Card key={d.key} className="rounded-2xl border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10">{d.icon}</div>
                <CardTitle className="text-base">{d.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300">{d.blurb}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <a className="text-sm text-cyan-300 hover:text-white" href="https://github.com/RDM3DC" target="_blank" rel="noreferrer">
            <div className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> All GitHub</div>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Card className="group rounded-2xl border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
                <CardHeader>
                  <div className="text-xs uppercase tracking-wide text-cyan-300/80">{p.tag}</div>
                  <CardTitle className="mt-1 text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{p.copy}</p>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="secondary" className="rounded-xl">
                      <a href={p.href} target="_blank" rel="noreferrer">{p.cta}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <Cpu className="h-6 w-6" />
              <CardTitle>Research → Product</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              We bridge frontier math/physics with shipped tools. If it can be simulated, we can prototype it.
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6" />
              <CardTitle>Open‑core, IP‑aware</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              Public repos where it helps adoption; protected IP where it matters for a moat.
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6" />
              <CardTitle>Fast Experiments</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-300">
              Tight iteration loops: sim → prototype → field test. We ship proof fast and scale what works.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Let’s build something adaptive.</h3>
              <p className="mt-2 text-slate-300">Consulting, partnerships, or R&D collabs. Tell us what you’re trying to unlock.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="mailto:ryanmckenna26@gmail.com"><Mail className="mr-2 h-4 w-4"/>ryanmckenna26@gmail.com</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href="https://github.com/RDM3DC" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/> GitHub</a>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <a href="sms:9513920096"><Phone className="mr-2 h-4 w-4"/>951‑392‑0096</a>
                </Button>
                <Button asChild variant="ghost" className="rounded-2xl text-slate-300 hover:text-white">
                  <a href="https://x.com/" target="_blank" rel="noreferrer"><Twitter className="mr-2 h-4 w-4"/> Follow on X</a>
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="Email" />
              <textarea rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400" placeholder="What would you like to build?" />
              <Button className="rounded-2xl w-full">Send message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} RDM3DC. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="https://github.com/RDM3DC" target="_blank" rel="noreferrer"><Github className="inline h-4 w-4 mr-1"/> GitHub</a>
            <a className="hover:text-white" href="mailto:ryanmckenna26@gmail.com"><Mail className="inline h-4 w-4 mr-1"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

