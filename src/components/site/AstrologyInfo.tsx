import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionHeading } from "./Categories";

const INFO = [
  {
    q: "Why is astrology so accurate?",
    a: (
      <>
        Astrology has been observed and refined over thousands of years. It works because it's
        based on patterns — the same planetary cycles that influenced people centuries ago
        continue to shape our lives today. When an experienced astrologer on{" "}
        <strong className="text-primary">Astrotring.com</strong> reads your unique birth chart,
        they're not guessing — they're interpreting a deeply personal cosmic map that reflects
        your personality, timing, and life tendencies. It feels accurate because it's specific to
        you, not generic.
      </>
    ),
  },
  {
    q: "Is astrology prediction true?",
    a: (
      <>
        Astrology doesn't predict events like a script written in stone. Think of it more like a
        weather forecast — it shows likely conditions, not certainties. What it does very well is
        highlight patterns, timing, and tendencies in your life. Many people who consult
        astrologers on <strong className="text-primary">Astrotring.com</strong> find that
        astrological readings reflect their experiences surprisingly well. Your free will always
        plays a role, but astrology gives you a valuable heads-up about what energies are at play
        around you.
      </>
    ),
  },
  {
    q: "What is astrology and how does it work?",
    a: (
      <>
        Astrology is the study of how celestial bodies — the Sun, Moon, and planets — influence
        human life and behavior. At the moment you were born, these planets were positioned in
        specific places in the sky. At <strong className="text-primary">Astrotring.com</strong>,
        our astrologers map these positions into a birth chart and interpret how they shape your
        personality, relationships, career, and life events. It's essentially a language that
        translates cosmic patterns into human experiences.
      </>
    ),
  },
  {
    q: "How does Vedic astrology differ from Western astrology?",
    a: (
      <>
        Both systems study planetary positions, but they differ in approach. Vedic astrology,
        rooted in ancient Indian tradition, uses the sidereal zodiac — based on actual star
        positions — and places heavy emphasis on the Moon sign, planetary periods (dashas), and
        karmic patterns. Western astrology uses the tropical zodiac — based on seasons — and
        focuses more on the Sun sign and psychological personality traits. At{" "}
        <strong className="text-primary">Astrotring.com</strong>, we offer expert guidance in
        both systems, helping you choose the approach that resonates most with your journey.
      </>
    ),
  },
  {
    q: "What is a birth chart and why is it important?",
    a: (
      <>
        A birth chart, also called a Kundli or natal chart, is a snapshot of the sky at the exact
        moment and place you were born. It maps where every planet was positioned across 12
        houses and zodiac signs. Think of it as your personal cosmic fingerprint — completely
        unique to you. At <strong className="text-primary">Astrotring.com</strong>, our experts
        use your birth chart to reveal your strengths, weaknesses, emotional nature, karmic path,
        and the timing of key life events. It's the foundation of every meaningful reading we
        offer.
      </>
    ),
  },
  {
    q: "How can online astrology help in predicting the future?",
    a: (
      <>
        Online astrology uses your birth details to analyze current and upcoming planetary
        transits and how they interact with your birth chart. At{" "}
        <strong className="text-primary">Astrotring.com</strong>, our astrologers help identify
        favorable periods for career moves, relationships, financial decisions, or personal
        growth — and also flag times to be cautious. It's like having a cosmic calendar that
        helps you plan smarter and act at the right time, all from the comfort of your home.
      </>
    ),
  },
];

export function AstrologyInfo() {
  return (
    <section id="about-astrology" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="About astrology"
          title="What Is Astrology?"
          description={
            <>
              Astrology is an ancient, science-backed system that decodes planetary and cosmic
              influences on human life. It goes beyond fortune-telling — it's a tool for
              self-awareness, decision-making, and personal growth.{" "}
              <strong className="text-primary">Astrotring.com</strong> makes this wisdom
              accessible, affordable, and convenient for everyone through birth chart analysis,
              daily horoscopes, personalized consultations, and practical remedies rooted in
              Vedic tradition.
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
          <Accordion type="single" collapsible defaultValue="info-0" className="w-full">
            {INFO.map((item, i) => (
              <AccordionItem
                key={i}
                value={`info-${i}`}
                className="border-b border-white/5 last:border-none"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display text-lg text-foreground hover:no-underline sm:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}