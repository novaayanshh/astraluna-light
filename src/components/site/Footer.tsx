import { Facebook, Instagram, Sparkles, Twitter, Youtube } from "lucide-react";

const COLUMNS = [
  {
    title: "Explore",
    links: ["Daily Horoscope", "Weekly Horoscope", "Yearly Report", "Panchang"],
  },
  {
    title: "Services",
    links: ["Kundli Matching", "Career", "Love & Marriage", "Vastu"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Centre", "Privacy", "Terms", "Refunds"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20 pb-10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display text-2xl font-medium tracking-tight">
                Astro<span className="gradient-gold">logy</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              A luxurious sanctuary for Vedic wisdom — designed to bring
              celestial clarity to modern seekers, everywhere.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={
                    ["Instagram", "Twitter", "Facebook", "YouTube"][i]
                  }
                  className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-gold-soft">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Astrotring. Guided by the stars.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with intention · Made for seekers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
