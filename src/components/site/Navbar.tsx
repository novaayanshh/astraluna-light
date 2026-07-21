import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Menu, Sparkles, User, X } from "lucide-react";
import { useState } from "react";


const NAV_ITEMS = [
  { label: "Horoscopes", href: "#horoscope", hasDropdown: true },
  { label: "Consultation", href: "#astrologers", hasDropdown: true },
  { label: "Doshas", href: "#services", hasDropdown: true },
  { label: "Muhurat", href: "#kundli", hasDropdown: true },
  { label: "Shop", href: "#shop" },
  { label: "Blogs", href: "#blogs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-[0_4px_24px_-12px_oklch(0.7_0.2_55/0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Astrology home"
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_20px_oklch(0.75_0.19_55/0.4)] transition-transform duration-500 group-hover:rotate-[20deg]">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
  Astro<span className="gradient-gold">logy</span>
</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="flex items-center">
              <Sparkles className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
              <a
                href={item.href}
                className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="btn-gold inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm"
          >
            <User className="h-4 w-4" strokeWidth={2.4} />
            Account
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full glass text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden"
        >
          <ul className="mx-6 mb-4 flex flex-col gap-1 rounded-2xl glass-strong p-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="btn-gold mt-2 flex h-11 items-center justify-center gap-2 rounded-full text-sm"
              >
                <User className="h-4 w-4" />
                Account
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
