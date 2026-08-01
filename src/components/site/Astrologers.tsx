import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import astro1 from "@/assets/astrologer-1.jpg";
import astro2 from "@/assets/astrologer-2.jpg";
import astro3 from "@/assets/astrologer-3.jpg";
import astro4 from "@/assets/astrologer-4.jpg";
import { SectionHeading } from "./Categories";

const AI_ASTROLOGERS = [
  { name: "Pandit Ravi Shastri", tag: "Vedic", expertise: "Finance", image: astro2 },
  { name: "Kailash Iyer", tag: "Vedic", expertise: "Health", image: astro1 },
  { name: "Neel Madhav", tag: "Vedic", expertise: "Education", image: astro3 },
  { name: "Aarav Sharma", tag: "Vedic", expertise: "Life Path", image: astro4 },
  { name: "Meera Joshi", tag: "Vedic", expertise: "Love", image: astro3 },
  { name: "Acharya Vikas", tag: "Vedic", expertise: "Timing & Predictions", image: astro2 },
  { name: "Amit Rao", tag: "Vedic", expertise: "Muhurat", image: astro1 },
  { name: "Sundeep Kumar", tag: "Vedic", expertise: "Children", image: astro4 },
  { name: "Dev Malhotra", tag: "Vedic", expertise: "Property", image: astro2 },
];

export function Astrologers() {
  return (
    <section id="astrologers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="AI Astrologers"
          title="AI Astrologers"
          description="Connect with our expert AI astrologers for guidance"
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
        >
          {AI_ASTROLOGERS.map((a) => (
            <motion.li
              key={a.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              className="card-lift ring-gradient group relative flex items-center gap-4 overflow-hidden rounded-2xl glass p-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
                <img
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  loading="lazy"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-display text-base text-foreground">{a.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.tag}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Expertise: <span className="font-medium text-primary">{a.expertise}</span>
                </p>
                <p className="mt-1.5 font-display text-sm gradient-gold">
                  ₹20.00<span className="text-[10px] text-muted-foreground">/msg</span>
                </p>
              </div>

              <Sparkles
                className="absolute right-3 top-3 h-3.5 w-3.5 text-primary/40"
                fill="currentColor"
                strokeWidth={0}
              />
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 text-center">
          <a
            href="#all-astrologers"
            className="glass ring-gradient inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Browse all astrologers
          </a>
        </div>
      </div>
    </section>
  );
}
