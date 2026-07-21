import { motion } from "framer-motion";
import {
  Flame,
  Mountain,
  Wind,
  Droplet,
  type LucideIcon,
} from "lucide-react";

const SIGNS: {
  name: string;
  dates: string;
  glyph: string;
  element: "fire" | "earth" | "air" | "water";
}[] = [
  { name: "Aries", dates: "Mar 21 – Apr 19", glyph: "♈", element: "fire" },
  { name: "Taurus", dates: "Apr 20 – May 20", glyph: "♉", element: "earth" },
  { name: "Gemini", dates: "May 21 – Jun 20", glyph: "♊", element: "air" },
  { name: "Cancer", dates: "Jun 21 – Jul 22", glyph: "♋", element: "water" },
  { name: "Leo", dates: "Jul 23 – Aug 22", glyph: "♌", element: "fire" },
  { name: "Virgo", dates: "Aug 23 – Sep 22", glyph: "♍", element: "earth" },
  { name: "Libra", dates: "Sep 23 – Oct 22", glyph: "♎", element: "air" },
  { name: "Scorpio", dates: "Oct 23 – Nov 21", glyph: "♏", element: "water" },
  { name: "Sagittarius", dates: "Nov 22 – Dec 21", glyph: "♐", element: "fire" },
  { name: "Capricorn", dates: "Dec 22 – Jan 19", glyph: "♑", element: "earth" },
  { name: "Aquarius", dates: "Jan 20 – Feb 18", glyph: "♒", element: "air" },
  { name: "Pisces", dates: "Feb 19 – Mar 20", glyph: "♓", element: "water" },
];

const ELEMENT_ICON: Record<string, LucideIcon> = {
  fire: Flame,
  earth: Mountain,
  air: Wind,
  water: Droplet,
};

const ELEMENT_TINT: Record<string, string> = {
  fire: "from-orange-500/30 to-red-500/10",
  earth: "from-emerald-500/25 to-lime-500/10",
  air: "from-sky-400/25 to-indigo-400/10",
  water: "from-blue-500/25 to-cyan-400/10",
};

export function Categories() {
  return (
    <section id="horoscope" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Daily Horoscope"
          title="Read the stars written for you"
          description="Your zodiac's cosmic weather — refreshed every morning by senior Vedic astrologers."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {SIGNS.map((sign) => {
            const Icon = ELEMENT_ICON[sign.element];
            return (
              <motion.li
                key={sign.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={`#${sign.name.toLowerCase()}`}
                  className="card-lift ring-gradient group relative block overflow-hidden rounded-3xl glass p-5 text-center"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ELEMENT_TINT[sign.element]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="font-display text-5xl leading-none gradient-gold transition-transform duration-500 group-hover:scale-110">
                      {sign.glyph}
                    </div>
                    <div className="mt-4 font-display text-lg text-foreground">
                      {sign.name}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {sign.dates}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Icon className="h-3 w-3" />
                      {sign.element}
                    </div>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-soft">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
