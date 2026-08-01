import { motion } from "framer-motion";
import { AlertTriangle, Flame, Moon, Sparkles, Sun, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./Categories";

const SERVICES: {
  title: string;
  body: string;
  icon: LucideIcon;
  tint: string;
}[] = [
  {
    title: "Mangal Dosh (Manglik Dosh)",
    body: "Formed due to the placement of Mars in specific houses of the birth chart. It may cause delays in marriage and relationship challenges.",
    icon: Flame,
    tint: "from-rose-400/25 to-orange-300/10",
  },
  {
    title: "Kaal Sarp Dosh",
    body: "Occurs when all planets are positioned between Rahu and Ketu. It can create life struggles and sudden obstacles.",
    icon: AlertTriangle,
    tint: "from-amber-300/25 to-yellow-200/10",
  },
  {
    title: "Chandra Dosh",
    body: "Happens when the Moon is weak. It may lead to emotional instability and mental imbalance.",
    icon: Moon,
    tint: "from-sky-400/25 to-blue-300/10",
  },
  {
    title: "Pitra Dosh",
    body: "Associated with ancestral karmic imbalance causing obstacles in career and family life.",
    icon: Users,
    tint: "from-indigo-400/25 to-violet-300/10",
  },
  {
    title: "Shani Dosh",
    body: "Formed due to challenging placement of Saturn bringing delays and hardships.",
    icon: Sparkles,
    tint: "from-purple-400/25 to-fuchsia-300/10",
  },
  {
    title: "Guru Chandal Dosh",
    body: "Occurs when Jupiter and Rahu are conjunct causing confusion and impaired judgment.",
    icon: Sun,
    tint: "from-emerald-400/25 to-teal-300/10",
  },
];

export function ComplimentaryServices() {
  return (
    <section id="complimentary-services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Free Consultations"
          title="Complimentary Astrology Services"
          description="We offer free consultations to help you understand your birth chart and its implications."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ title, body, icon: Icon, tint }) => (
            <motion.li
              key={title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className={`card-lift ring-gradient relative overflow-hidden rounded-3xl bg-gradient-to-br ${tint} glass p-6`}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 shadow-glow">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <a
                href="/doshas"
                className="mt-5 inline-flex h-10 items-center rounded-full bg-background/80 px-5 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border/60 transition-transform hover:-translate-y-0.5"
              >
                View More
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
