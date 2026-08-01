import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Video,
  CalendarCheck,
  UserSearch,
  Wallet,
  Heart,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./Categories";
import { Astrologers } from "./Astrologers";

const MODES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Chat",
    body: "Type out your questions at your own pace and keep a written record of every answer.",
    icon: MessageCircle,
  },
  {
    title: "Call",
    body: "Speak directly with an astrologer for a more personal, conversational reading.",
    icon: Phone,
  },
  {
    title: "Video",
    body: "Face-to-face sessions where charts and remedies can be walked through visually.",
    icon: Video,
  },
];

const STEPS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Choose your astrologer",
    body: "Filter by specialty, language and rating to find the right fit for your question.",
    icon: UserSearch,
  },
  {
    title: "Pick a time",
    body: "Book an open slot instantly or join the live queue for on-demand sessions.",
    icon: CalendarCheck,
  },
  {
    title: "Pay per minute",
    body: "Transparent, pay-as-you-go pricing — no subscriptions or hidden charges.",
    icon: Wallet,
  },
];

const TOPICS: { title: string; icon: LucideIcon }[] = [
  { title: "Love & Relationships", icon: Heart },
  { title: "Career & Business", icon: Briefcase },
  { title: "Marriage Matching", icon: HeartHandshake },
  { title: "Education Abroad", icon: GraduationCap },
];

export function ConsultationPage() {
  return (
    <>
      <section className="relative pb-16 pt-[192px] lg:pt-[224px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Consultation"
            title="Talk to an astrologer, your way"
            description="Chat, call or video — choose how you'd like to connect, and get matched with a verified expert in minutes."
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-14 grid gap-5 sm:grid-cols-3"
          >
            {MODES.map(({ title, body, icon: Icon }) => (
              <motion.li
                key={title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                className="card-lift ring-gradient rounded-3xl glass p-6 text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/70 to-accent/70 shadow-glow">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="How it works" title="Three steps to your first session" />
          <ol className="mt-14 grid gap-6 sm:grid-cols-3">
            {STEPS.map(({ title, body, icon: Icon }, i) => (
              <li key={title} className="ring-gradient relative rounded-3xl glass p-6">
                <span className="font-display text-5xl leading-none text-primary/20">
                  0{i + 1}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-lg text-foreground">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Popular topics" title="What people usually ask about" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="ring-gradient flex items-center gap-3 rounded-2xl glass p-5"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-foreground">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Astrologers />
    </>
  );
}
