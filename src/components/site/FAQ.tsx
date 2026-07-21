import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionHeading } from "./Categories";

const FAQS = [
  {
    q: "How do I know which astrologer is right for me?",
    a: "Filter by specialty (Vedic, Tarot, Numerology), language and rating. Read reviews from real seekers, then chat for free before committing to a full session.",
  },
  {
    q: "Is my personal information kept private?",
    a: "Yes. All sessions are end-to-end encrypted and your birth details are stored securely. We never share your data with third parties or advertisers.",
  },
  {
    q: "What if I don't know my exact birth time?",
    a: "We can still generate a Sun-sign reading with strong accuracy. For a full Kundli, our astrologers offer a rectification service to pinpoint your birth time.",
  },
  {
    q: "How much does a consultation cost?",
    a: "Sessions start from $19 for chat and vary by astrologer's expertise, language and channel. Your first 3 minutes are always free.",
  },
  {
    q: "Do you offer refunds?",
    a: "Absolutely. If you're not satisfied within the first 5 minutes of a paid session, we'll refund it — no questions asked.",
  },
  {
    q: "Can I get a written report after my session?",
    a: "Every consultation includes a beautifully designed PDF summary with insights, remedies and mantras, delivered to your inbox within 24 hours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions, answered."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 ring-gradient rounded-3xl glass p-2 sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/5 last:border-none"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display text-lg text-foreground hover:no-underline sm:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-base text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
