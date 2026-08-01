import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { AI_ASTROLOGERS, type Astrologer } from "@/data/astrologers";
import { SectionHeading } from "./Categories";

// Split the roster into two rows so each one can scroll in an opposite
// direction, then duplicate each row once so the CSS marquee loops seamlessly.
const HALF = Math.ceil(AI_ASTROLOGERS.length / 2);
const ROW_TOP = AI_ASTROLOGERS.slice(0, HALF);
const ROW_BOTTOM = AI_ASTROLOGERS.slice(HALF);
const LOOP_TOP = [...ROW_TOP, ...ROW_TOP];
const LOOP_BOTTOM = [...ROW_BOTTOM, ...ROW_BOTTOM];

function AstrologerCard({ a }: { a: Astrologer }) {
  return (
    <Link
      to="/astrologers/$slug"
      params={{ slug: a.slug }}
      className="group relative flex w-[280px] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-primary/30 bg-white p-4 shadow-sm transition-shadow hover:shadow-[0_16px_40px_-16px_oklch(0.5_0.08_60/0.35)]"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/50">
        <img
          src={a.image}
          alt={`Portrait of ${a.name}`}
          loading="lazy"
          width={160}
          height={160}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-sans text-lg font-semibold text-foreground">{a.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{a.tag}</p>
        <p className="mt-1 truncate text-sm text-muted-foreground">
          Expertise: <span className="font-semibold text-primary">{a.expertise}</span>
        </p>
        <p className="mt-1.5 font-sans text-base font-semibold gradient-gold">
          ₹{a.rate.toFixed(2)}
          <span className="text-[11px] font-normal text-muted-foreground">/msg</span>
        </p>
      </div>

      <Sparkles
        className="absolute right-3 top-3 h-3.5 w-3.5 text-primary/40"
        fill="currentColor"
        strokeWidth={0}
      />
    </Link>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Astrologer[];
  direction: "rtl" | "ltr";
}) {
  const [paused, setPaused] = useState(false);

  return (
    <ul
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      className={`flex w-max gap-5 ${
        direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
      } ${paused ? "marquee-paused" : ""}`}
    >
      {items.map((a, i) => (
        <li key={`${a.slug}-${i}`}>
          <AstrologerCard a={a} />
        </li>
      ))}
    </ul>
  );
}

export function Astrologers() {
  return (
    <section id="astrologers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="AI Astrologers"
          title="AI Astrologers"
          description="Connect with our expert AI astrologers for guidance"
          plain
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 space-y-5"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-20" />

          {/* Top row: right to left */}
          <div className="overflow-hidden">
            <MarqueeRow items={LOOP_TOP} direction="rtl" />
          </div>

          {/* Bottom row: left to right */}
          <div className="overflow-hidden">
            <MarqueeRow items={LOOP_BOTTOM} direction="ltr" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}