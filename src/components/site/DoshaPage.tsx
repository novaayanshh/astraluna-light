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

const DOSHAS: { id: string; title: string; body: string; remedy: string; icon: LucideIcon }[] = [
  {
    id: "mangal-dosh",
    title: "Mangal Dosh (Manglik Dosh)",
    body: "Occurs when Mars sits in specific houses of the birth chart, and is traditionally examined before marriage matching.",
    remedy: "Often addressed through Kumbh Vivah rituals, Hanuman worship, or matching with another Manglik chart.",
    icon: Flame,
  },
  {
    id: "kaal-sarp-dosh",
    title: "Kaal Sarp Dosh",
    body: "Forms when all seven classical planets fall between Rahu and Ketu, said to create recurring obstacles and delays.",
    remedy: "Commonly pacified with Rahu-Ketu remedies, specific mantras, and worship at Trimbakeshwar or similar temples.",
    icon: Waves,
  },
  {
    id: "chandra-dosh",
    title: "Chandra Dosh",
    body: "Arises when the Moon is afflicted by malefic planets, often linked to emotional instability, anxiety and a restless mind.",
    remedy: "Eased with Moon-strengthening remedies — Somvar fasting, pearl gemstone guidance, and Chandra mantra japa.",
    icon: Moon,
  },
  {
    id: "pitra-dosh",
    title: "Pitra Dosh",
    body: "Linked to unresolved ancestral karma, often associated with the Sun or Saturn's placement relative to Rahu.",
    remedy: "Typically eased through Pitru Paksha rituals, Tarpan, and offerings to ancestors on relevant tithis.",
    icon: Users,
  },
  {
    id: "shani-dosh",
    title: "Shani Dosh",
    body: "Covers Sade Sati and Dhaiya — Saturn's transit phases around the natal Moon, known for testing patience and resilience.",
    remedy: "Managed with Shani worship, discipline in daily routine, and specific gemstone or mantra recommendations.",
    icon: AlertTriangle,
  },
  {
    id: "guru-chandal-dosh",
    title: "Guru Chandal Dosh",
    body: "Forms when Jupiter conjoins Rahu, believed to cloud judgement and complicate guidance from mentors or elders.",
    remedy: "Pacified through Guru mantra japa, yellow-sapphire guidance, and targeted Rahu remedial measures.",
    icon: Sparkles,
  },
  {
    id: "grahan-dosh",
    title: "Grahan Dosh (Eclipse Dosh)",
    body: "Present when the Sun or Moon is closely conjunct Rahu or Ketu, associated with clarity and confidence in some readings.",
    remedy: "Addressed through targeted mantra japa and strengthening the afflicted planet via its remedial measures.",
    icon: Sparkles,
  },
  {
    id: "ketu-dosh",
    title: "Ketu Dosh",
    body: "Occurs when Ketu is poorly placed or afflicted, often linked to detachment, confusion or sudden unexplained setbacks.",
    remedy: "Balanced through Ketu mantra japa, cat's-eye gemstone guidance, and spiritual practices like meditation.",
    icon: Waves,
  },
  {
    id: "rahu-dosh",
    title: "Rahu Dosh",
    body: "Arises when Rahu afflicts key houses or planets, associated with sudden upheavals, confusion and unconventional obstacles.",
    remedy: "Pacified with Rahu mantra japa, hessonite (Gomed) gemstone guidance, and targeted remedial rituals.",
    icon: Flame,
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
            {DOSHAS.map(({ id, title, body, remedy, icon: Icon }) => (
              <motion.li
                key={title}
                id={id}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                className="card-lift ring-gradient relative scroll-mt-28 overflow-hidden rounded-3xl glass p-6"
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
