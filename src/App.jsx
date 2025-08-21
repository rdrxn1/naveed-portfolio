import React, { useEffect, useMemo, useState } from "react";

/** ---------------------------
 *  Inline Icon Components
 *  (keeps project dependency-light)
 * ----------------------------*/
const IconMoon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.6" d="M21 12.79A9 9 0 1 1 11.21 3c.23 0 .46 0 .69.03A7 7 0 0 0 21 12.1c0 .23 0 .46-.03.69Z"/>
  </svg>
);
const IconSun = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="4" strokeWidth="1.6"/>
    <path strokeWidth="1.6" d="M12 2v2m0 16v2M4.93 4.93 6.34 6.34m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07 6.34 17.66m11.32-11.32 1.41-1.41"/>
  </svg>
);
const IconArrow = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.6" d="m9 18 6-6-6-6"/>
  </svg>
);
const IconWhatsapp = (props) => (
  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" {...props}>
    <path d="M19.11 17.19c-.27-.14-1.55-.77-1.79-.86-.24-.09-.41-.14-.58.14-.17.27-.66.86-.81 1.03-.15.17-.3.2-.57.07-.27-.14-1.13-.42-2.16-1.34-.8-.7-1.34-1.57-1.5-1.83-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.46.13-.15.17-.27.26-.46.08-.2.05-.36-.03-.51-.09-.14-.58-1.39-.8-1.91-.21-.51-.42-.44-.58-.45h-.5c-.17 0-.46.06-.7.33-.24.27-.91.88-.91 2.15s.93 2.49 1.06 2.66c.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.47.55.62.2 1.19.17 1.64.1.5-.08 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.18-.51-.32z"/>
    <path d="M26.66 5.34A13.33 13.33 0 0 0 2.35 17.9L1 30.5l12.79-1.32A13.33 13.33 0 0 0 26.66 5.34zm-6.53 19.7a10.65 10.65 0 1 1 3.12-7.53 10.6 10.6 0 0 1-3.12 7.53z"/>
  </svg>
);

/** ---------------------------
 *  Data (edit in one place)
 * ----------------------------*/
const PROFILE = {
  name: "Naveed Nizami",
  role: "Footwear Designer & Developer",
  tagline:
    "Design-to-Factory specialist: from concept and tech packs to factory sourcing and production QA.",
  email: "Naveed_nizami@outlook.com",
  phone: "+92 334 9974867",
  location: "Lahore, Pakistan • Remote / Global",
  socials: {
    behance: "https://www.behance.net/naveednizami",
    linkedin: "https://www.linkedin.com/in/naveednizami01",
    instagram: "https://www.instagram.com/naveednizami01"
  },
  metrics: [
    { label: "Years in Footwear", value: "8+" },
    { label: "Styles Shipped", value: "120+" },
    { label: "Factories Network", value: "30+" },
    { label: "Brands Worked With", value: "Adidas, Lacoste, Cole Haan, Atoms…" }
  ],
  brands: [
    "Atoms","Adidas","Lacoste","Cole Haan","Markhor","Soto Massini","Advance Studio","Corail"
  ],
};

const SERVICES = [
  {
    title: "Footwear Design",
    bullets: [
      "Concepts, silhouettes, last selection",
      "CMF: color, materials, finishes",
      "Outsole & tread design, branding"
    ],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Tech Packs & Specs",
    bullets: [
      "2D specs, graded size charts",
      "BOMs, tolerances, stitching details",
      "QC checklist + construction notes"
    ],
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Factory Sourcing & Liaison",
    bullets: [
      "Factory matchmaking & cost negotiation",
      "Sampling calendar & lab tests",
      "Material sourcing & compliance"
    ],
    image: "https://images.unsplash.com/photo-1556767576-cfba5b9f6c9a?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "3D & Visualization",
    bullets: [
      "3D concepts & photoreal renders",
      "Animation turns & outsole simulations",
      "Marketing-ready stills"
    ],
    image: "https://images.unsplash.com/photo-1585386959984-a41552231656?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Sampling, Fit & Wear-Test",
    bullets: [
      "Sample rounds (PP/SS/PS)",
      "Fit notes & last adjustments",
      "Comfort/durability testing"
    ],
    image: "https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Production Support & QA",
    bullets: [
      "Pre-production reviews",
      "Inline inspections, AQL checks",
      "Ship approvals & documentation"
    ],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Competitive/Trend Research",
    bullets: [
      "Line audits & price ladders",
      "Trend decks, tear-downs",
      "Sustainability claims verification"
    ],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Startup ‘Design-to-Factory’",
    bullets: [
      "2–4 styles + tech packs",
      "Factory matchmaking & first samples",
      "Budget/cost plan & launch timeline"
    ],
    image: "https://images.unsplash.com/photo-1520974713411-31545a94b6d9?q=80&w=1600&auto=format&fit=crop"
  }
];

const WORK = [
  {
    title: "Atoms — Minimal Everyday Sneaker",
    tags: ["Everyday", "Minimal", "Comfort"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    summary: "Led design & development across multiple seasons; CMF stories, upper patterning, comfort-first construction.",
    url: "#"
  },
  {
    title: "Performance Runner — Lightweight Knit",
    tags: ["Performance", "Knit", "Cushioning"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
    summary: "Breathable knit upper, tuned cushioning, and durability balance for mid-mileage training.",
    url: "#"
  },
  {
    title: "Court Classic — Premium Leather",
    tags: ["Leather", "Premium", "Lifestyle"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1600&auto=format&fit=crop",
    summary: "Luxury leather, refined last, subtle branding, and longevity-focused construction.",
    url: "#"
  }
];

const TESTIMONIALS = [
  {
    quote:
      "Naveed turned a rough brief into a factory-ready line faster than any partner we’ve used. Tech packs were immaculate.",
    who: "Head of Product, DTC Sneaker Brand"
  },
  {
    quote:
      "His factory network and cost sense saved us 12% on our first 3,000-pair run while improving quality.",
    who: "Founder, Startup Footwear Label"
  },
  {
    quote:
      "Sharp eye for CMF and fit. Our return rate dropped after implementing his fit notes on the last.",
    who: "Operations Lead, Heritage Brand"
  }
];

const TOOLS = [
  "Adobe Illustrator", "Photoshop", "InDesign",
  "Shoemaster 2D/3D", "Rhino/Blender (3D)", "CLO (when needed)",
  "Excel/Sheets (BOMs)", "Keynote/Slides",
  "macOS & Google Workspace"
];

/** ---------------------------
 *  Helpers
 * ----------------------------*/
const cls = (...xs) => xs.filter(Boolean).join(" ");
const useTheme = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : false
  );
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return { dark, setDark };
};

function mailtoHref({ name, email, company, timeline, budget, message }) {
  const subject = encodeURIComponent(`Project Inquiry — ${name} (${company || "N/A"})`);
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    budget ? `Budget: ${budget}` : "",
    timeline ? `Timeline: ${timeline}` : "",
    "",
    message || ""
  ].filter(Boolean);
  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

/** ---------------------------
 *  Main App
 * ----------------------------*/
export default function App() {
  const { dark, setDark } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  // Decorative grid background
  const GridBG = useMemo(
    () => (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-[.06] dark:opacity-[.08]"></div>
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-brand-400/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-700/20 blur-3xl"></div>
      </div>
    ),
    []
  );

  return (
    <>
      {GridBG}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/70 dark:border-white/10">
        <div className="section flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-2xl bg-brand-600 text-white grid place-content-center font-extrabold shadow-soft">
              NN
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Naveed Nizami</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">Footwear Designer</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a href="#work" className="text-sm hover:text-brand-700 dark:hover:text-brand-400">Work</a>
            <a href="#services" className="text-sm hover:text-brand-700 dark:hover:text-brand-400">Services</a>
            <a href="#process" className="text-sm hover:text-brand-700 dark:hover:text-brand-400">Process</a>
            <a href="#about" className="text-sm hover:text-brand-700 dark:hover:text-brand-400">About</a>
            <a href="#contact" className="text-sm hover:text-brand-700 dark:hover:text-brand-400">Contact</a>
            <button className="btn btn-outline" onClick={() => setDark(!dark)}>
              {dark ? <IconSun/> : <IconMoon/>} Theme
            </button>
            <a className="btn btn-primary" href="#contact">Hire me</a>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button className="btn btn-outline" onClick={() => setDark(!dark)}>
              {dark ? <IconSun/> : <IconMoon/>}
            </button>
            <button className="btn btn-primary" onClick={() => setNavOpen(!navOpen)}>Menu</button>
          </div>
        </div>
        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden border-t border-neutral-200/70 dark:border-white/10 bg-white/95 dark:bg-neutral-950/95">
            <div className="section py-4 flex flex-col gap-3">
              {["work","services","process","about","contact"].map((id) => (
                <a key={id} href={`#${id}`} className="text-sm py-2" onClick={()=>setNavOpen(false)}>
                  {id[0].toUpperCase()+id.slice(1)}
                </a>
              ))}
              <a className="btn btn-primary mt-2" href="#contact" onClick={()=>setNavOpen(false)}>Hire me</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="section pt-16 sm:pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-brand-300/70 bg-brand-50 text-brand-800 mb-5">
                Available for Freelance • Collaborations • Full-time
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Footwear that ships. <span className="text-brand-600">Design → Factory</span>
              </h1>
              <p className="mt-5 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
                I’m <strong>{PROFILE.name}</strong>, a {PROFILE.role.toLowerCase()} based in Lahore, Pakistan.
                I turn briefs into sellable product — concept, tech packs, the right factory, samples, fit, and production QA.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#work">View work <IconArrow/></a>
                <a className="btn btn-ghost" href="#services">See services</a>
                <a className="btn btn-outline" href={PROFILE.socials.behance} target="_blank" rel="noreferrer">Behance</a>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {PROFILE.metrics.map((m) => (
                  <div key={m.label} className="card p-5">
                    <div className="text-3xl font-extrabold">{m.value}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop"
                  alt="Studio / footwear workspace" className="h-[440px] w-full object-cover"/>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block card p-4">
                <div className="text-xs text-neutral-600 dark:text-neutral-300">Recent collabs</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {PROFILE.brands.map((b)=>(
                    <span key={b} className="badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Selected Work</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">Case studies that connect design decisions to factory outcomes.</p>
            </div>
            <a href="#contact" className="btn btn-outline">Start a project</a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {WORK.map((w)=>(
              <article key={w.title} className="card card-hover overflow-hidden flex flex-col">
                <img src={w.image} alt={w.title} className="h-56 w-full object-cover"/>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {w.tags.map(t=><span key={t} className="badge">{t}</span>)}
                  </div>
                  <h3 className="text-lg font-bold">{w.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 flex-1">{w.summary}</p>
                  <div className="mt-4">
                    <a href={w.url} className="link">Open case study</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">From concept to cartons — pick what you need or hire end-to-end.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Request a quote</a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s)=>(
              <article key={s.title} className="card card-hover overflow-hidden flex flex-col">
                <img src={s.image} alt={s.title} className="h-40 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {s.bullets.map((b,i)=>(
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-600 inline-block"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Process</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">Clear checkpoints. Zero manufacturing surprises.</p>
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {step:"Brief",desc:"Goals, price point, target user, volume, timelines."},
              {step:"Design",desc:"Concepts, lasts, CMF, outsole, branding, cost checks."},
              {step:"Tech Packs",desc:"2D specs, graded charts, BOMs, tolerances, QC sheets."},
              {step:"Factory",desc:"Matchmaking, sampling calendar, tests, production QA."}
            ].map((p,idx)=>(
              <li key={p.step} className="card p-6">
                <div className="badge mb-3">Step {idx+1}</div>
                <div className="font-bold">{p.step}</div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ABOUT */}
        <section id="about" className="section py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1600&auto=format&fit=crop"
                   alt="Workbench with lasts and tools" className="h-[420px] w-full object-cover"/>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">About Naveed</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mt-3 leading-relaxed">
                I’ve shipped lines for global and startup brands (Atoms, Adidas, Lacoste, Cole Haan, Markhor, Soto Massini, and more).
                My edge is <em>design-to-factory</em>: I design with production realities in mind and keep tech packs airtight so factories move fast.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {TOOLS.map(t=><span key={t} className="badge">{t}</span>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-outline" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btn-outline" href={PROFILE.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a className="btn btn-primary" href="#contact">Let’s work</a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Client Feedback</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t)=>(
              <figure key={t.who} className="card p-6">
                <blockquote className="text-neutral-800 dark:text-neutral-200">“{t.quote}”</blockquote>
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight">Let’s build your next pair</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mt-3">
                Fastest way: email or WhatsApp. For scoped work, send a brief and I’ll reply with options and a timeline.
              </p>

              <div className="mt-6 space-y-3">
                <div className="card p-4">
                  <div className="text-sm text-neutral-500">Email</div>
                  <a className="link text-lg" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </div>
                <div className="card p-4">
                  <div className="text-sm text-neutral-500">WhatsApp</div>
                  <a className="inline-flex items-center gap-2 text-lg link" href={`https://wa.me/${PROFILE.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                    <IconWhatsapp/> {PROFILE.phone}
                  </a>
                </div>
                <div className="card p-4">
                  <div className="text-sm text-neutral-500">Location</div>
                  <div className="text-lg">{PROFILE.location}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200/70 dark:border-white/10">
        <div className="section py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="link" href={PROFILE.socials.behance} target="_blank" rel="noreferrer">Behance</a>
            <a className="link" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="link" href={PROFILE.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a href={`https://wa.me/${PROFILE.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer"
         className="fixed bottom-6 right-6 btn btn-primary shadow-soft">
        <IconWhatsapp/> Chat on WhatsApp
      </a>
    </>
  );
}

/** ---------------------------
 *  Contact Form Component
 * ----------------------------*/
function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", timeline: "", budget: "", message: ""
  });
  const href = mailtoHref(form);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  return (
    <form className="card p-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Your name</label>
          <input name="name" value={form.name} onChange={onChange}
                 placeholder="Naveed Nizami"
                 className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"/>
        </div>
        <div>
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Email</label>
          <input name="email" value={form.email} onChange={onChange} type="email"
                 placeholder="name@brand.com"
                 className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"/>
        </div>
        <div>
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Company</label>
          <input name="company" value={form.company} onChange={onChange}
                 placeholder="Brand or Studio"
                 className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"/>
        </div>
        <div>
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Timeline</label>
          <input name="timeline" value={form.timeline} onChange={onChange}
                 placeholder="e.g., first samples in 6–8 weeks"
                 className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"/>
        </div>
        <div>
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Budget (USD)</label>
          <input name="budget" value={form.budget} onChange={onChange}
                 placeholder="e.g., 8–12k, or per-style"
                 className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"/>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-neutral-600 dark:text-neutral-400">Message</label>
          <textarea name="message" value={form.message} onChange={onChange}
                    rows={5}
                    placeholder="Tell me about your styles, target consumer, price point, volumes, and timelines…"
                    className="mt-1 w-full rounded-2xl border border-neutral-300/70 bg-white/90 px-4 py-2.5 text-sm dark:bg-neutral-900/60 dark:border-white/10"></textarea>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={href}>
          Send Email
        </a>
        <a className="btn btn-outline" href="mailto:Naveed_nizami@outlook.com?subject=Brief%20Attachment" >
          Attach brief & send
        </a>
      </div>
      <p className="text-xs text-neutral-500 mt-3">
        Prefer a call? Use WhatsApp for fastest response.
      </p>
    </form>
  );
}
