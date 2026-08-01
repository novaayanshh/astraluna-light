import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { AI_ASTROLOGERS } from "@/data/astrologers";
import { SectionHeading } from "./Categories";

export function Astrologers() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 20 : 300;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="astrologers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="AI Astrologers"
          title="AI Astrologers"
          description="Connect with our expert AI astrologers for guidance"
          plain
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-20" />

          <motion.ul
            ref={trackRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
          >
            {AI_ASTROLOGERS.map((a) => (
              <motion.li
                key={a.slug}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="w-[280px] shrink-0 snap-start"
              >
                <Link
                  to="/astrologers/$slug"
                  params={{ slug: a.slug }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-primary/30 bg-white p-4 shadow-sm transition-shadow hover:shadow-[0_16px_40px_-16px_oklch(0.5_0.08_60/0.35)]"
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
              </motion.li>
            ))}
          </motion.ul>

          <button
            type="button"
            aria-label="Scroll astrologers left"
            onClick={() => scrollByCard(-1)}
            className="absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-white p-2 shadow-md transition-transform hover:scale-105 sm:flex"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            type="button"
            aria-label="Scroll astrologers right"
            onClick={() => scrollByCard(1)}
            className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-white p-2 shadow-md transition-transform hover:scale-105 sm:flex"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}