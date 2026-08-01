import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "./Categories";

const REVIEWS = [
  {
    name: "Priya Nair",
    role: "Bangalore, IN",
    rating: 5,
    body: "Aditi's reading brought clarity I didn't know I needed. Six months later, every prediction has aligned with breathtaking precision.",
  },
  {
    name: "Arjun Malhotra",
    role: "London, UK",
    rating: 5,
    body: "The kundli PDF is stunning — genuinely feels premium. Pandit Ravi's remedies transformed my career trajectory within weeks.",
  },
  {
    name: "Sofia Alvarez",
    role: "Toronto, CA",
    rating: 5,
    body: "I've tried other astrology apps — none feel this intimate or accurate. Meera's tarot session left me in tears (the good kind).",
  },
  {
    name: "Rohan Bhat",
    role: "Mumbai, IN",
    rating: 5,
    body: "The interface is so calming that consulting feels like a ritual. And the astrologers actually listen — that's rare.",
  },
  {
    name: "Elena Petrova",
    role: "Berlin, DE",
    rating: 5,
    body: "Booked a Vedic session on a whim; ended up with a life roadmap. Astrology sets the gold standard.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          title="Testimonials"
          description="Hear from our satisfied clients about their experiences with our expert astrologers and the positive impact on their lives."
          align="left"
          plain
        />

        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {REVIEWS.map((r, i) => (
                <motion.article
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="ring-gradient relative min-w-0 flex-[0_0_100%] rounded-3xl glass p-8 sm:flex-[0_0_60%] lg:flex-[0_0_40%]"
                >
                  <Quote
                    className="absolute right-6 top-6 h-10 w-10 text-primary/30"
                    strokeWidth={1.2}
                  />
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-foreground/90">
                    "{r.body}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-medium text-white">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selectedIndex
                      ? "w-8 bg-gradient-gold"
                      : "w-1.5 bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full glass ring-gradient text-foreground transition-transform hover:-translate-x-0.5"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full glass ring-gradient text-foreground transition-transform hover:translate-x-0.5"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
