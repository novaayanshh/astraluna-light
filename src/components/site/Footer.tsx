import { ChevronsRight, Facebook, Instagram, Mail, Orbit, Twitter, Youtube } from "lucide-react";

const HOROSCOPE_LINKS = ["Yearly Horoscope", "Monthly Horoscope"];

const MUHURAT_LINKS = [
  "Annanprashan Muhurat",
  "Naamkaran Muhurat",
  "Car/Bike Muhurat",
  "Marriage Muhurat",
  "Bhoomi Pujan Muhurat",
  "Griha Pravesh Muhurat",
  "Mundan Muhurat",
];

const ASTROLOGER_LINKS = ["Astrologer Login", "Astrologer Registration", "Astrology Blogs"];

const CORPORATE_LINKS = [
  "Refund & Cancellation",
  "Terms & Conditions",
  "Privacy Policy",
  "Disclaimer",
  "Shipping Policy",
];

const SOCIAL_ICONS = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative inline-block pb-2 font-display text-lg font-bold text-foreground">
      {children}
      <span className="absolute inset-x-0 -bottom-0.5 h-[3px] w-10 rounded-full gradient-gold" />
    </h3>
  );
}

function FooterLinkList({ links }: { links: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {links.map((label) => (
        <li key={label}>
          <a
            href="#"
            className="group flex items-start gap-1.5 text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <ChevronsRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70 transition-colors group-hover:text-primary" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background pt-16 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-white">
                <Orbit className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-foreground/70">
                Astrotring
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Astrotring offers accurate Vedic astrology insights including kundli
              matching, horoscope predictions, and expert astrologer consultations to
              guide important life decisions. Our platform blends ancient astrological
              wisdom with modern technology to provide guidance on love, marriage,
              career, health, and finance.
            </p>
          </div>

          {/* Horoscope + Shubh Muhurat */}
          <div>
            <FooterColumnHeading>Horoscope</FooterColumnHeading>
            <FooterLinkList links={HOROSCOPE_LINKS} />

            <div className="mt-8">
              <FooterColumnHeading>Shubh Muhurat 2026</FooterColumnHeading>
              <FooterLinkList links={MUHURAT_LINKS} />
            </div>
          </div>

          {/* Astrologer + Corporate Info */}
          <div>
            <FooterColumnHeading>Astrologer</FooterColumnHeading>
            <FooterLinkList links={ASTROLOGER_LINKS} />

            <div className="mt-8">
              <FooterColumnHeading>Corporate Info</FooterColumnHeading>
              <FooterLinkList links={CORPORATE_LINKS} />
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <FooterColumnHeading>Contact Us</FooterColumnHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
              We are available 24x7 on chat support,{" "}
              <span className="font-semibold text-foreground">click to start chat</span>
            </p>

            <a
              href="mailto:care@astrotring.com"
              className="mt-4 flex items-center gap-2.5 text-[15px] font-medium text-foreground/80 hover:text-primary"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-foreground/40">
                <Mail className="h-4 w-4" />
              </span>
              care@astrotring.com
            </a>

            <div className="mt-4 flex items-center gap-4">
              {SOCIAL_ICONS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              ))}
            </div>

            <h4 className="mt-6 font-display text-lg font-bold text-foreground">
              Download Our App
            </h4>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
                  <path fill="#00D9FF" d="M3 2.5v19l9.5-9.5L3 2.5Z" />
                  <path fill="#FFD500" d="M16.5 9 3 2.5l9.5 9.5L16.5 9Z" />
                  <path fill="#FF3D00" d="M16.5 15l-4-3 4-3 4.5 3-4.5 3Z" />
                  <path fill="#00E676" d="M3 21.5 16.5 15l-4-3-9.5 9.5Z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-white/70">GET IT ON</span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-white" aria-hidden>
                  <path d="M16.365 1.43c0 1.14-.396 2.06-1.187 2.77-.856.77-1.79 1.21-2.796 1.13-.12-1.09.4-2.09 1.16-2.79.76-.7 1.86-1.13 2.82-1.11ZM20.7 17.03c-.35.81-.52 1.17-.98 1.87-.64.98-1.55 2.2-2.68 2.21-1 .01-1.26-.66-2.62-.65-1.36.01-1.65.66-2.66.65-1.12-.01-1.98-1.12-2.62-2.1-1.78-2.75-1.97-5.98-.87-7.7.78-1.23 2.02-1.95 3.18-1.95 1.19 0 1.94.66 2.93.66.96 0 1.55-.66 2.93-.66.96 0 1.98.53 2.7 1.44-2.38 1.3-1.99 4.7.71 6.23Z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-white/70">Download on the</span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-foreground py-5">
        <p className="text-center text-sm font-medium text-white">
          © {new Date().getFullYear()} Astrotring. All Rights Reserved.
        </p>
      </div>

      <div className="border-t border-border/60 bg-background py-4">
        <p className="mx-auto max-w-7xl px-6 text-center text-xs text-muted-foreground lg:px-10">
          <span className="font-bold text-foreground">Disclaimer :</span> Astrology
          services on www.astrotring.com are provided for guidance and knowledge
          purposes only. Results may vary. Please read our full{" "}
          <a href="#" className="font-bold text-foreground underline">
            Disclaimer
          </a>{" "}
          before using the website.
        </p>
      </div>
    </footer>
  );
}
