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
  { img: p1, title: "Allbirds", desc: "Sustainable footwear Shopify Plus store with a clean editorial feel.", result: "+180% sales in 3 months", url: "https://www.allbirds.com" },
  { img: p2, title: "Kylie Cosmetics", desc: "High-converting beauty DTC on Shopify Plus with bundle logic.", result: "$120K in first 90 days", url: "https://www.kyliecosmetics.com" },
  { img: p3, title: "Death Wish Coffee", desc: "Bold Shopify storefront with subscription and loyalty built in.", result: "+62% conversion rate", url: "https://www.deathwishcoffee.com" },
  { img: p4, title: "MVMT Watches", desc: "Premium accessories store with multi-currency Shopify Plus.", result: "8x ROAS in Q4", url: "https://www.mvmt.com" },
  { img: p5, title: "Gymshark", desc: "Performance sportswear brand on Shopify Plus.", result: "+240% repeat orders", url: "https://www.gymshark.com" },
  { img: p6, title: "Pura Vida Bracelets", desc: "Lifestyle brand on Shopify with subscription and community.", result: "+95% MRR growth", url: "https://www.puravidabracelets.com" },
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

const PLATFORM_LOGOS: Record<string, JSX.Element> = {
  shopify: (
    <svg viewBox="0 0 256 292" className="size-4" aria-hidden="true">
      <path fill="#95BF47" d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.999 118.75.999c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.997.038 260.467.038 260.467l165.678 31.038L255.59 272s-31.616-213.211-31.816-214.66z"/>
      <path fill="#5E8E3E" d="M165.717 291.495l89.872-19.495S223.973 58.79 223.773 57.34c-.2-1.45-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.63-.63-1.49-.999-2.39-1.155l-12.504 256.509z"/>
      <path fill="#FFF" d="M139.482 103.928l-11.084 32.974s-9.704-5.18-21.5-5.18c-17.299 0-18.169 10.857-18.169 13.594 0 14.938 38.937 20.66 38.937 55.654 0 27.531-17.461 45.244-41.006 45.244-28.255 0-42.7-17.59-42.7-17.59l7.564-25.005s14.851 12.751 27.387 12.751c8.193 0 11.526-6.452 11.526-11.169 0-19.493-31.948-20.363-31.948-52.388 0-26.95 19.347-53.035 58.387-53.035 15.047 0 22.606 4.15 22.606 4.15z"/>
    </svg>
  ),
  wordpress: (
    <svg viewBox="0 0 122.52 122.523" className="size-4" aria-hidden="true">
      <path fill="#21759B" d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872a52.354 52.354 0 0 0-4.55 21.388zm87.92-2.65c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.486-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925L99.6 64.96c1.149-3.328 1.337-5.83 1.337-7.913 0-2.92-1.057-4.962-1.95-6.557-.668-1.323-1.357-2.717-1.357-3.88z"/>
      <path fill="#21759B" d="M63.16 67.418l-15.91 46.234a53.115 53.115 0 0 0 14.952 2.155c5.749 0 11.265-.99 16.404-2.796a4.792 4.792 0 0 1-.376-.733L63.16 67.418zm44.13-29.118c.226 1.674.352 3.471.352 5.404 0 5.333-.998 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.436-25.215z"/>
      <path fill="#21759B" d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.039 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"/>
    </svg>
  ),
  wix: (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path fill="#FBBD05" d="M5.062 5.61L3.39 11.853 1.788 5.61H0l2.46 8.78h1.86l1.672-6.105 1.673 6.105h1.86l2.46-8.78H10.2L8.598 11.853 6.926 5.61H5.062zm12.39 0l-2.118 3.123L13.193 5.61h-2.13l3.16 4.39-3.16 4.39h2.13l2.141-3.123 2.118 3.123h2.13l-3.16-4.39 3.16-4.39h-2.13zm4.05 0v8.78H24V5.61h-2.498z"/>
    </svg>
  ),
};

function PlatformBadge({ name, logo }: { name: string; logo: keyof typeof PLATFORM_LOGOS }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm">
      {PLATFORM_LOGOS[logo]}
      <span className="text-xs font-semibold text-card-foreground">{name}</span>
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
            <a href={FIVERR} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-card-foreground hover:border-primary hover:text-primary transition-colors">
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
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                    <Globe className="size-3.5" /> Visit live store
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

        <div className="mt-14">
          <SectionHeading eyebrow="Leave a Review" title="Worked with me? Share your experience" subtitle="Your review is sent to me for approval, then published here." />
          <ReviewForm />
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
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              setFormStatus("sending");
              try {
                const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    budget: data.get("budget"),
                    message: data.get("message"),
                    _subject: `New project enquiry from ${data.get("name")}`,
                    _template: "table",
                  }),
                });
                if (!res.ok) throw new Error("Failed");
                setFormStatus("sent");
                form.reset();
              } catch {
                setFormStatus("error");
              }
            }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-soft"
          >
            <h3 className="text-lg font-bold">{t.enquiry}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Project budget" name="budget" placeholder="e.g. $1,500 – $5,000" />
            <div>
              <label className="text-xs font-semibold text-foreground/80">Tell me about your project</label>
              <textarea name="message" required rows={5} placeholder="Share your goals, timeline and platform (Shopify, WordPress, Wix)…" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
            </div>
            <button type="submit" disabled={formStatus === "sending"} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary transition-colors shadow-soft disabled:opacity-70">
              {formStatus === "sending" ? (<><Loader2 className="size-4 animate-spin" /> Sending…</>) :
               formStatus === "sent" ? (<><Check className="size-4" /> Message sent!</>) :
               (<>{t.send} <ArrowRight className="size-4" /></>)}
            </button>
            {formStatus === "sent" && (
              <p className="text-center text-xs text-primary font-medium">Thanks! Your message was delivered to {EMAIL}. I'll reply within 1 hour.</p>
            )}
            {formStatus === "error" && (
              <p className="text-center text-xs text-destructive">Couldn't send — please use WhatsApp or email me directly at {EMAIL}.</p>
            )}
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

      {/* Scroll up/down controls */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2">
        {showScroll && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
            className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition-colors fade-up">
            <ArrowUp className="size-5" />
          </button>
        )}
        <button onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })} aria-label="Scroll down"
          className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft hover:border-primary hover:text-primary transition-colors">
          <ArrowDown className="size-5" />
        </button>
      </div>
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

function LangSelect({ value, onChange }: { value: Lang; onChange: (l: Lang) => void }) {
  const current = LANGS.find(l => l.code === value) ?? LANGS[0];
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Lang)}
        aria-label="Select language"
        className="appearance-none cursor-pointer rounded-full border border-border bg-card pl-3 pr-7 py-1.5 text-xs font-semibold text-foreground hover:border-primary focus:border-primary focus:outline-none transition-colors"
      >
        {LANGS.map(l => (
          <option key={l.code} value={l.code}>{l.flag} {l.label}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
      <span className="sr-only">Current: {current.label}</span>
    </div>
  );
}

function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <form
      action={`https://formsubmit.co/${EMAIL}`}
      method="POST"
      encType="multipart/form-data"
      onSubmit={() => setStatus("sending")}
      className="mt-8 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-soft"
    >
      <input type="hidden" name="_subject" value="New client review submission — pending approval" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.origin + "/?review=submitted#reviews" : "/"} />
      <input type="hidden" name="rating" value={`${rating} / 5 stars`} />

      <div>
        <label className="text-xs font-semibold text-foreground/80">Your rating</label>
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i)}
              aria-label={`${i} star${i > 1 ? "s" : ""}`}
              className="p-1"
            >
              <Star
                className={`size-7 transition-colors ${
                  (hover || rating) >= i
                    ? "fill-[color:var(--star)] text-[color:var(--star)]"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm font-semibold text-foreground">{rating}/5</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Jane Doe" required />
        <Field label="Your website URL" name="website" type="url" placeholder="https://yourstore.com" required />
      </div>

      <div>
        <label className="text-xs font-semibold text-foreground/80">Your feedback</label>
        <textarea
          name="feedback"
          required
          rows={5}
          maxLength={1000}
          placeholder="What was your experience working with AJ? Be specific about results."
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-foreground/80">Screenshot of the work (optional)</label>
        <input
          type="file"
          name="attachment"
          accept="image/*"
          className="mt-1.5 block w-full text-sm text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-xs file:font-semibold file:text-primary-dark hover:file:bg-primary hover:file:text-primary-foreground transition"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary transition-colors shadow-soft disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 className="size-4 animate-spin" /> Submitting…</>) : (<>Submit review <ArrowRight className="size-4" /></>)}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Reviews are emailed to {EMAIL} for approval before being published.
      </p>
    </form>
  );
}