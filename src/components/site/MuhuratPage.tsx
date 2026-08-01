import { motion } from "framer-motion";
import {
  Car,
  Gem,
  Home,
  Plane,
  Rocket,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./Categories";
import { Kundli } from "./Kundli";

const MUHURATS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Marriage",
    body: "The most closely studied Muhurat — checked against both partners' charts, the lunar calendar and seasonal restrictions.",
    icon: Sparkle,
  },
  {
    title: "Griha Pravesh",
    body: "Auspicious timing for moving into a new home, chosen to invite stability and good fortune from the very first day.",
    icon: Home,
  },
  {
    title: "Vehicle Purchase",
    body: "A favourable window for buying or first driving a new vehicle, based on the day's planetary strength.",
    icon: Car,
  },
  {
    title: "Business Launch",
    body: "Timing chosen to give a new venture, shop opening or product launch the strongest possible start.",
    icon: Rocket,
  },
  {
    title: "Naming Ceremony",
    body: "Namkaran timing selected to align a newborn's name with a supportive Nakshatra and lunar phase.",
    icon: Gem,
  },
  {
    title: "Travel",
    body: "A helpful check before long journeys or relocations, especially when travelling for a major life decision.",
    icon: Plane,
  },
];

export function MuhuratPage() {
  return (
    <>
      <section className="relative pb-16 pt-[192px] lg:pt-[224px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Muhurat"
            title="Time it right, for every milestone"
            description="Muhurat is the practice of choosing an auspicious window for important events, based on the position of the Moon, weekday and Nakshatra."
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {MUHURATS.map(({ title, body, icon: Icon }) => (
              <motion.li
                key={title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                className="card-lift ring-gradient rounded-3xl glass p-6"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 shadow-glow">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <Kundli />
    </>
  );
}
