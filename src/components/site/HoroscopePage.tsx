import { motion } from "framer-motion";
import { useState } from "react";
import {
  Flame,
  Mountain,
  Wind,
  Droplet,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./Categories";

const PERIODS = ["Daily", "Weekly", "Monthly"] as const;

const SIGNS: {
  name: string;
  dates: string;
  glyph: string;
  element: "fire" | "earth" | "air" | "water";
  ruler: string;
  blurb: string;
}[] = [
  {
    name: "Aries",
    dates: "Mar 21 – Apr 19",
    glyph: "♈",
    element: "fire",
    ruler: "Mars",
    blurb:
      "Bold and fast-moving, Aries natives lead with instinct. Today favours quick decisions over long deliberation — trust the first honest reaction.",
  },
  {
    name: "Taurus",
    dates: "Apr 20 – May 20",
    glyph: "♉",
    element: "earth",
    ruler: "Venus",
    blurb:
      "Steady and sensory, Taurus thrives on routine. A good stretch for finances and comfort — resist the urge to rush what deserves patience.",
  },
  {
    name: "Gemini",
    dates: "May 21 – Jun 20",
    glyph: "♊",
    element: "air",
    ruler: "Mercury",
    blurb:
      "Curious and quick-witted, Gemini runs on conversation. Ideas flow easily now — write them down before the next one arrives.",
  },
  {
    name: "Cancer",
    dates: "Jun 21 – Jul 22",
    glyph: "♋",
    element: "water",
    ruler: "Moon",
    blurb:
      "Nurturing and intuitive, Cancer feels the room before understanding it. Home and family matters take priority over outside demands.",
  },
  {
    name: "Leo",
    dates: "Jul 23 – Aug 22",
    glyph: "♌",
    element: "fire",
    ruler: "Sun",
    blurb:
      "Warm and expressive, Leo is built to be seen. Confidence is well placed today, but leave room for others to shine too.",
  },
  {
    name: "Virgo",
    dates: "Aug 23 – Sep 22",
    glyph: "♍",
    element: "earth",
    ruler: "Mercury",
    blurb:
      "Precise and thoughtful, Virgo finds order in detail. A strong day to organise, edit and finish what's been left half-done.",
  },
  {
    name: "Libra",
    dates: "Sep 23 – Oct 22",
    glyph: "♎",
    element: "air",
    ruler: "Venus",
    blurb:
      "Diplomatic and relationship-minded, Libra seeks balance. Partnerships — personal or professional — need honest conversation now.",
  },
  {
    name: "Scorpio",
    dates: "Oct 23 – Nov 21",
    glyph: "♏",
    element: "water",
    ruler: "Mars & Ketu",
    blurb:
      "Intense and perceptive, Scorpio senses what's beneath the surface. Trust that instinct, but choose carefully what you act on.",
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 – Dec 21",
    glyph: "♐",
    element: "fire",
    ruler: "Jupiter",
    blurb:
      "Optimistic and freedom-loving, Sagittarius looks toward the horizon. A favourable window for travel plans, study or a bigger vision.",
  },
  {
    name: "Capricorn",
    dates: "Dec 22 – Jan 19",
    glyph: "♑",
    element: "earth",
    ruler: "Saturn",
    blurb:
      "Disciplined and ambitious, Capricorn plays the long game. Career efforts made now compound quietly into steady progress.",
  },
  {
    name: "Aquarius",
    dates: "Jan 20 – Feb 18",
    glyph: "♒",
    element: "air",
    ruler: "Saturn & Rahu",
    blurb:
      "Independent and idea-driven, Aquarius thinks in systems. An original approach will land better today than following the crowd.",
  },
  {
    name: "Pisces",
    dates: "Feb 19 – Mar 20",
    glyph: "♓",
    element: "water",
    ruler: "Jupiter",
    blurb:
      "Dreamy and empathic, Pisces absorbs the mood around it. Creative and spiritual pursuits are favoured — guard your energy carefully.",
  },
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

export function HoroscopePage() {
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>("Daily");
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="relative pb-16 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Horoscopes"
            title="Your zodiac's cosmic weather"
            description="Pick your sign to read what the planets are shaping for you — refreshed by our Vedic astrologers for every timeframe."
          />

          <div className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-full glass p-1">
            {PERIODS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  period === p
                    ? "bg-gradient-to-br from-primary to-accent text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {SIGNS.map((sign) => {
              const Icon = ELEMENT_ICON[sign.element];
              const isActive = active === sign.name;
              return (
                <motion.li
                  key={sign.name}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                  className={isActive ? "sm:col-span-2 lg:col-span-2" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? null : sign.name)}
                    className="card-lift ring-gradient group relative block w-full overflow-hidden rounded-3xl glass p-5 text-left"
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ELEMENT_TINT[sign.element]} opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isActive ? "opacity-100" : ""}`}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-4xl leading-none gradient-gold">
                          {sign.glyph}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                          <Icon className="h-3 w-3" />
                          {sign.element}
                        </span>
                      </div>
                      <div className="mt-4 font-display text-lg text-foreground">{sign.name}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {sign.dates} · Ruled by {sign.ruler}
                      </div>
                      {isActive && (
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          <span className="font-semibold text-foreground">{period} take: </span>
                          {sign.blurb}
                        </p>
                      )}
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="ring-gradient rounded-3xl glass-strong p-8 lg:p-10">
            <h3 className="font-display text-2xl text-foreground">How we read your horoscope</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A horoscope is a snapshot of how the current positions of the Sun, Moon and planets
              interact with your zodiac sign. It doesn't dictate outcomes — it points to the
              tendencies, moods and opportunities most likely to show up in a given period. Our
              astrologers combine your Moon sign (Rashi) with transiting planets to give guidance
              that's practical rather than absolute, so you can plan your day, week or month with a
              little more clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
