import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareHeart, Sparkles, UserRoundSearch } from "lucide-react";
import { SectionHeading } from "./Categories";

const STEPS = [
  {
    icon: UserRoundSearch,
    title: "Discover your astrologer",
    body: "Filter by specialty, language and rating to match with the guide who truly resonates with you.",
  },
  {
    icon: Sparkles,
    title: "Add your birth details",
    body: "Time, place and date of birth power an accurate Janam Kundli reading personalised to your chart.",
  },
  {
    icon: MessageSquareHeart,
    title: "Consult via chat, call or video",
    body: "Private, encrypted sessions across every channel — starting from as little as $19 per session.",
  },
  {
    icon: CheckCircle2,
    title: "Receive your cosmic report",
    body: "Save a beautifully designed PDF with insights, remedies, mantras and the exact planetary alignments.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps to celestial clarity"
          description="A refined process designed to feel effortless from your first tap to your final revelation."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block"
          />
          <ol className="space-y-10 lg:space-y-20">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid gap-6 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`${i % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}
                >
                  <span className="font-display text-6xl gradient-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-foreground lg:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {step.body}
                  </p>
                </div>
                <div className="relative">
                  <div className="ring-gradient card-lift relative overflow-hidden rounded-3xl glass p-8">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-glow">
                      <step.icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="relative mt-6 space-y-2">
                      {["Personalised", "Encrypted", "Vedic-certified"].map(
                        (t) => (
                          <div
                            key={t}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-gold" />
                            {t}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  {/* dot on the timeline */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_20px_oklch(0.83_0.14_85/0.9)] lg:block"
                  />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
