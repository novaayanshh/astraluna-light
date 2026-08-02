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
    q: "How do I consult an online astrologer?",
    a: (
      <>
        It's quite simple. Visit <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a>,
        browse through our carefully verified astrologers based on their expertise, ratings,
        and reviews, and book a session via chat, call, or video call. You'll need to share
        your birth date, time, and place. Your astrologer will then analyze your chart and
        address your specific questions with care and clarity. We also offer free introductory
        sessions so you can get comfortable before committing to a full consultation.
      </>
    ),
  },
  {
    q: "How can astrology help in love, marriage, and relationships?",
    a: (
      <>
        On <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a>, our astrologers read the
        5th and 7th houses along with Venus's placement to assess compatibility, timing for
        marriage, and challenges in existing relationships — offering practical remedies for
        a stronger, healthier bond.
      </>
    ),
  },
  {
    q: "What role does astrology play in career and finance?",
    a: (
      <>
        Career and finance readings on <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a>{" "}
        study the 2nd, 10th and 11th houses along with the placement of Jupiter and Saturn to
        guide clients on job changes, business timing, investments and long-term financial
        stability.
      </>
    ),
  },
  {
    q: "Can astrology help with health-related concerns?",
    a: (
      <>
        Yes. Medical astrology on <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a> reads
        the 6th and 8th houses to identify planetary influences on health and recommend
        remedial measures — though it's always meant to complement, not replace, medical advice.
      </>
    ),
  },
  {
    q: "Is the birth time necessary for accurate readings?",
    a: (
      <>
        An accurate birth time gives the most precise chart, but{" "}
        <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a> can still generate a
        Sun-sign-based reading with strong accuracy if it's unknown. For a full Kundli, our
        astrologers also offer a birth-time rectification service.
      </>
    ),
  },
  {
    q: "Can astrology predictions be changed through remedies?",
    a: (
      <>
        Vedic astrology treats predictions as tendencies, not fixed outcomes. Astrologers on{" "}
        <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a> recommend remedies — mantras,
        gemstones, rituals and lifestyle adjustments — to ease the effect of challenging
        planetary placements.
      </>
    ),
  },
  {
    q: "How reliable are astrology apps and platforms?",
    a: (
      <>
        Reliability comes down to verified astrologers and transparent reviews. Every
        astrologer on <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a> is vetted for
        expertise and rated by real clients, so you can choose with confidence.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Frequently Asked Questions"
          description={
            <>
              Here are the same answers, now branded with{" "}
              <a href="https://astraluna-light.vercel.app/" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">Astrotring.com</a> wherever relevant:
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 ring-gradient rounded-3xl glass p-2 sm:p-4"
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
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