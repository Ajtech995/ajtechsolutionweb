import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, Star, BadgeCheck, Clock, MapPin, Languages, ShoppingBag,
  Palette, Plug, Search, TrendingUp, Megaphone, ArrowRight, Mail,
  Instagram, MessageCircle, ExternalLink, Globe, ChevronDown, Sun, Moon, ArrowUp, ArrowDown, Check, Loader2,
} from "lucide-react";
import profileImg from "@/assets/profile-aj.jpeg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import r1 from "@/assets/review-1.jpg";
import r2 from "@/assets/review-2.jpg";
import r3 from "@/assets/review-3.jpg";
import r4 from "@/assets/review-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/2349055023706";
const FIVERR = "https://www.fiverr.com/abtechstudio";
const INSTAGRAM = "https://instagram.com/abdulbasitsolution";
const EMAIL = "abdulbasittechsolutions@gmail.com";

const services = [
  { icon: ShoppingBag, title: "Shopify Store Setup & Launch", desc: "End-to-end store builds ready to sell from day one." },
  { icon: Palette, title: "Theme Customization & Redesign", desc: "Conversion-focused, on-brand storefronts that feel premium." },
  { icon: Plug, title: "App Integration & Custom Dev", desc: "Custom liquid, API and third-party app integrations." },
  { icon: Search, title: "SEO & Performance Optimization", desc: "Faster, indexable stores that rank and convert." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Data-led tweaks that lift AOV and checkout completion." },
  { icon: Megaphone, title: "Sales Growth & Marketing", desc: "Email, ads and funnels that turn traffic into revenue." },
];

const projects = [
  { img: p1, title: "Luxe Fashion House", desc: "Headless Shopify rebuild with a minimalist editorial aesthetic.", result: "+180% sales in 3 months", url: "luxe-fashion.example" },
  { img: p2, title: "Sereniskin Beauty", desc: "Skincare DTC launch with subscription and bundle logic.", result: "$120K in first 90 days", url: "sereniskin.example" },
  { img: p3, title: "Premiut Electronics", desc: "Custom theme, advanced filtering and AR product previews.", result: "+62% conversion rate", url: "premiut.example" },
  { img: p4, title: "Lofty Home & Decor", desc: "Multi-currency Shopify Plus build for global expansion.", result: "8x ROAS in Q4", url: "loftyhome.example" },
  { img: p5, title: "Athetic Sportswear", desc: "Bold, high-performance storefront with custom checkout.", result: "+240% repeat orders", url: "athetic.example" },
  { img: p6, title: "Ergasy Organics", desc: "Wellness brand on Shopify with subscription and loyalty.", result: "+95% MRR growth", url: "ergasy.example" },
];

const testimonials = [
  { name: "Sarah M.", role: "Founder, Luxe Fashion House", img: r1, quote: "AJ rebuilt our entire store in two weeks. Sales nearly tripled. He's the most reliable developer I've worked with." },
  { name: "David K.", role: "CEO, Premiut Electronics", img: r2, quote: "Pixel-perfect, fast and obsessed with conversion. Communication was 10/10 — answered within minutes every time." },
  { name: "Amélie R.", role: "Co-founder, Sereniskin", img: r3, quote: "He understood our brand instantly. The new Shopify build looks like a luxury site and converts like one." },
  { name: "Tomiwa A.", role: "Owner, Ergasy Organics", img: r4, quote: "Worth every dollar. Our store is faster, ranks better and looks beautiful on mobile. Highly recommended." },
];

const locations = ["Nigeria", "USA", "UK", "France", "Canada", "Australia", "Dubai", "Egypt"];
const langs = ["English", "French", "Spanish", "Dutch", "Greek", "Turkish", "Italian"];
const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const LANGS = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

type Lang = typeof LANGS[number]["code"];
const T: Record<Lang, { hire: string; tagline: string; enquiry: string; send: string; fiverr: string }> = {
  en: { hire: "Hire Me", tagline: "Let's scale up your business together. AJ is ready to support you and make your ideas become impact.", enquiry: "Send a project enquiry", send: "Send Enquiry", fiverr: "View Fiverr Profile" },
  fr: { hire: "Engagez-moi", tagline: "Faisons grandir votre entreprise ensemble. AJ est prêt à transformer vos idées en impact réel.", enquiry: "Envoyer une demande de projet", send: "Envoyer", fiverr: "Voir mon profil Fiverr" },
  es: { hire: "Contrátame", tagline: "Escalemos tu negocio juntos. AJ está listo para convertir tus ideas en impacto real.", enquiry: "Enviar una consulta de proyecto", send: "Enviar consulta", fiverr: "Ver perfil de Fiverr" },
  nl: { hire: "Huur Mij In", tagline: "Laten we samen je bedrijf laten groeien. AJ helpt jouw ideeën impact maken.", enquiry: "Projectaanvraag versturen", send: "Versturen", fiverr: "Bekijk Fiverr-profiel" },
  el: { hire: "Προσλάβετέ με", tagline: "Ας αναπτύξουμε μαζί την επιχείρησή σας. Ο AJ είναι έτοιμος να μετατρέψει τις ιδέες σας σε αποτέλεσμα.", enquiry: "Στείλτε αίτημα έργου", send: "Αποστολή", fiverr: "Προφίλ Fiverr" },
  tr: { hire: "Beni İşe Al", tagline: "İşinizi birlikte büyütelim. AJ, fikirlerinizi etkiye dönüştürmeye hazır.", enquiry: "Proje talebi gönder", send: "Gönder", fiverr: "Fiverr Profilini Gör" },
  it: { hire: "Assumimi", tagline: "Facciamo crescere il tuo business insieme. AJ è pronto a trasformare le tue idee in impatto.", enquiry: "Invia una richiesta di progetto", send: "Invia richiesta", fiverr: "Vedi profilo Fiverr" },
};

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-[color:var(--star)] text-[color:var(--star)]" />
      ))}
    </div>
  );
}

function PlatformBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 shadow-sm">
      <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs font-semibold text-foreground">{name}</span>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<Lang>("en");
  const [showScroll, setShowScroll] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = T[lang];

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(saved);
    const savedLang = (localStorage.getItem("lang") as Lang) || "en";
    if (LANGS.some(l => l.code === savedLang)) setLang(savedLang);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">A</span>
            <span className="text-sm font-bold tracking-tight">AJ TECH SOLUTIONS</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSelect value={lang} onChange={setLang} />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="grid size-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
              {t.hire} <ArrowRight className="size-4" />
            </a>
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden grid size-10 place-items-center rounded-lg border border-border" aria-label="Menu">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background fade-up">
            <div className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground border-b border-border/60 last:border-0">{l.label}</a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                {t.hire} <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-accent/60 to-transparent -z-10" />
        <div className="mx-auto max-w-3xl px-5 pt-10 pb-12 text-center">
          {/* Profile photo */}
          <div className="relative mx-auto size-40 sm:size-48">
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />
            <img
              src={profileImg}
              alt="AJ Tech Solutions founder portrait"
              width={384}
              height={384}
              className="relative size-full rounded-full object-cover ring-4 ring-white shadow-soft"
            />
            <div className="absolute bottom-1 right-1 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-white">
              <BadgeCheck className="size-6" />
            </div>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">AJ TECH SOLUTIONS</h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <Stars />
            <span className="font-semibold text-foreground">4.8</span>
            <span className="text-muted-foreground">(650 reviews)</span>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-soft">
            <BadgeCheck className="size-4" /> Shopify Verified Partner
          </div>

          {/* Platform badges */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <PlatformBadge name="Shopify Expert" color="#95BF47" />
            <PlatformBadge name="WordPress Pro" color="#21759B" />
            <PlatformBadge name="Wix Partner" color="#FFCB00" />
          </div>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            <span className="text-foreground font-medium">"{t.tagline}"</span>
          </p>

          {/* Locations & languages */}
          <div className="mt-7 grid gap-3 text-sm">
            <div className="flex items-start justify-center gap-2 text-muted-foreground">
              <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
              <span className="text-foreground/80">{locations.join(" • ")}</span>
            </div>
            <div className="flex items-start justify-center gap-2 text-muted-foreground">
              <Languages className="size-4 mt-0.5 text-primary shrink-0" />
              <span className="text-foreground/80">{langs.join(" • ")}</span>
            </div>
          </div>

          {/* Trust + CTA */}
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            Avg. response time: <span className="font-semibold text-foreground">1 hour</span>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary transition-colors">
              {t.hire} <ArrowRight className="size-4" />
            </a>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              {t.fiverr} <ExternalLink className="size-4" />
            </a>
          </div>

          {/* Swipe-up / scroll-down hint */}
          <a href="#services" aria-label="Scroll to services" className="mt-10 inline-flex flex-col items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
            <span>Swipe up to explore</span>
            <ChevronDown className="size-5 bounce-down text-primary" />
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="What I Do" title="Services Offered" subtitle="Full-stack ecommerce expertise — from launch to scale." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-soft">
              <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Featured Work" title="Recent Projects" subtitle="A few stores I've built and scaled for clients worldwide." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-soft transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/60 px-3 py-2 text-xs font-semibold text-primary-dark">
                    <TrendingUp className="size-4" /> {p.result}
                  </div>
                  <a href="#" onClick={(e) => e.preventDefault()} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                    <Globe className="size-3.5" /> {p.url}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Client Love" title="What Clients Say" subtitle="Real feedback from founders I've worked with." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map(t => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <Stars />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <img src={t.img} alt={t.name} loading="lazy" width={80} height={80} className="size-10 rounded-full object-cover ring-2 ring-accent" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <SectionHeading eyebrow="About Me" title="A passionate ecommerce builder" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I'm Abdulbasit — founder of AJ Tech Solutions. For over 6 years I've helped 650+ founders launch, redesign and scale stores on Shopify, WordPress and Wix. My focus is simple: build beautiful, fast, conversion-focused websites that turn visitors into loyal customers. From solo founders to Shopify Plus brands, I treat every project like it's my own business.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <Stat n="650+" label="Happy clients" />
            <Stat n="6+ yrs" label="Experience" />
            <Stat n="8" label="Countries served" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading eyebrow="Get In Touch" title="Let's build something great" subtitle="Average reply in under 1 hour." />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Click to chat instantly</div>
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-[#1DBF73] text-white font-bold">fi</div>
                <div>
                  <div className="text-sm font-bold">Fiverr</div>
                  <div className="text-xs text-muted-foreground">@abtechstudio</div>
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                  <Instagram className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Instagram</div>
                  <div className="text-xs text-muted-foreground">@abdulbasitsolution</div>
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Email</div>
                  <div className="text-xs text-muted-foreground break-all">{EMAIL}</div>
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground shrink-0" />
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = `Hi AJ,%0A%0A${encodeURIComponent(String(f.get("message") ?? ""))}%0A%0A— ${encodeURIComponent(String(f.get("name") ?? ""))}`;
              window.location.href = `mailto:${EMAIL}?subject=Project enquiry from ${encodeURIComponent(String(f.get("name") ?? ""))}&body=${body}`;
            }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-soft"
          >
            <h3 className="text-lg font-bold">Send a project enquiry</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Project budget" name="budget" placeholder="e.g. $1,500 – $5,000" />
            <div>
              <label className="text-xs font-semibold text-foreground/80">Tell me about your project</label>
              <textarea name="message" required rows={5} placeholder="Share your goals, timeline and platform (Shopify, WordPress, Wix)…" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary transition-colors shadow-soft">
              Send Enquiry <ArrowRight className="size-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Or reach me directly on <a href={WHATSAPP} className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">A</span>
              <span className="text-sm font-bold">AJ TECH SOLUTIONS</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="grid size-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="WhatsApp"><MessageCircle className="size-4" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="grid size-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="size-4" /></a>
              <a href={`mailto:${EMAIL}`} className="grid size-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Email"><Mail className="size-4" /></a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AJ Tech Solutions. All rights reserved. Shopify Verified Partner.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
         className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft hover:scale-105 transition-transform">
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-dark">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="text-2xl font-extrabold text-primary">{n}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-foreground/80">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}