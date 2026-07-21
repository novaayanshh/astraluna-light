import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home,
  Sparkles,
  Wallet,
  Baby,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./Categories";

const SERVICES: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Love & Relationships", body: "Compatibility, timing and soulmate insights.", icon: Heart },
  { title: "Career & Finance", body: "Job changes, promotions and business timing.", icon: Briefcase },
  { title: "Marriage Matching", body: "Guna Milan, Manglik and horoscope match.", icon: HeartHandshake },
  { title: "Wealth & Prosperity", body: "Rituals and remedies for financial flow.", icon: Wallet },
  { title: "Education & Studies", body: "Best streams, exam success and abroad yogas.", icon: GraduationCap },
  { title: "Home & Vastu", body: "Directional harmony for peace and abundance.", icon: Home },
  { title: "Child & Family", body: "Santan yoga, naming ceremonies and blessings.", icon: Baby },
  { title: "Spiritual Growth", body: "Meditation, mantras and karmic healing.", icon: Sparkles },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Consultations"
          title="Every question the stars can answer"
          description="From matters of the heart to the arc of your career — guidance tuned to every corner of your life."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ title, body, icon: Icon }) => (
            <motion.li
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              className="card-lift ring-gradient group relative overflow-hidden rounded-3xl glass p-6"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="relative mt-5 font-display text-xl text-foreground">
                {title}
              </h3>
              <p className="relative mt-1.5 text-sm text-muted-foreground">
                {body}
              </p>
              <a
                href="#consult"
                className="relative mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-gold-soft transition-colors hover:text-gold"
              >
                Consult now →
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
