import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  Moon,
  Users,
  Waves,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./Categories";

const DOSHAS: { title: string; body: string; remedy: string; icon: LucideIcon }[] = [
  {
    title: "Manglik Dosha",
    body: "Occurs when Mars sits in specific houses of the birth chart, and is traditionally examined before marriage matching.",
    remedy: "Often addressed through Kumbh Vivah rituals, Hanuman worship, or matching with another Manglik chart.",
    icon: Flame,
  },
  {
    title: "Kaal Sarp Dosha",
    body: "Forms when all seven classical planets fall between Rahu and Ketu, said to create recurring obstacles and delays.",
    remedy: "Commonly pacified with Rahu-Ketu remedies, specific mantras, and worship at Trimbakeshwar or similar temples.",
    icon: Waves,
  },
  {
    title: "Pitra Dosha",
    body: "Linked to unresolved ancestral karma, often associated with the Sun or Saturn's placement relative to Rahu.",
    remedy: "Typically eased through Pitru Paksha rituals, Tarpan, and offerings to ancestors on relevant tithis.",
    icon: Users,
  },
  {
    title: "Shani Sade Sati",
    body: "The seven-and-a-half-year transit of Saturn around the natal Moon sign, known for testing patience and resilience.",
    remedy: "Managed with Shani worship, discipline in daily routine, and specific gemstone or mantra recommendations.",
    icon: Moon,
  },
  {
    title: "Nadi Dosha",
    body: "Arises when both partners share the same Nadi in Ashtakoot matching, believed to affect health and progeny.",
    remedy: "Assessed carefully alongside other compatibility factors; remedies vary by the specific Nadi involved.",
    icon: AlertTriangle,
  },
  {
    title: "Grahan Dosha",
    body: "Present when the Sun or Moon is closely conjunct Rahu or Ketu, associated with clarity and confidence in some readings.",
    remedy: "Addressed through targeted mantra japa and strengthening the afflicted planet via its remedial measures.",
    icon: Sparkles,
  },
];

export function DoshaPage() {
  return (
    <>
      <section className="relative pb-16 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Doshas"
            title="Understand your chart's challenges"
            description="A dosha is a planetary combination that Vedic astrology flags for extra attention — not a verdict, but a cue for the right remedy."
          />
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {DOSHAS.map(({ title, body, remedy, icon: Icon }) => (
              <motion.li
                key={title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                className="card-lift ring-gradient relative overflow-hidden rounded-3xl glass p-6"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 shadow-glow">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                <div className="mt-4 rounded-2xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
                    Typical remedy
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{remedy}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-14 text-center">
            <a
              href="/consultation"
              className="btn-gold inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm"
            >
              Get your chart checked by an astrologer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
