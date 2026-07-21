import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, Video } from "lucide-react";
import astro1 from "@/assets/astrologer-1.jpg";
import astro2 from "@/assets/astrologer-2.jpg";
import astro3 from "@/assets/astrologer-3.jpg";
import astro4 from "@/assets/astrologer-4.jpg";
import { SectionHeading } from "./Categories";

const ASTROLOGERS = [
  {
    name: "Aditi Sharma",
    tag: "Vedic • Tarot • Numerology",
    languages: "English, Hindi",
    rating: 4.9,
    reviews: 12480,
    exp: 12,
    price: 45,
    image: astro1,
    online: true,
  },
  {
    name: "Pandit Ravi Krishnan",
    tag: "Vedic • KP • Vastu",
    languages: "English, Hindi, Tamil",
    rating: 5.0,
    reviews: 9820,
    exp: 24,
    price: 65,
    image: astro2,
    online: true,
  },
  {
    name: "Meera Kapoor",
    tag: "Tarot • Love • Relationships",
    languages: "English, Hindi, Punjabi",
    rating: 4.8,
    reviews: 7290,
    exp: 9,
    price: 39,
    image: astro3,
    online: false,
  },
  {
    name: "Acharya Devansh",
    tag: "Vedic • Career • Prashna",
    languages: "English, Hindi, Bengali",
    rating: 4.9,
    reviews: 15340,
    exp: 18,
    price: 55,
    image: astro4,
    online: true,
  },
];

export function Astrologers() {
  return (
    <section id="astrologers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Astrologers"
          title="Meet your celestial guides"
          description="Hand-picked experts with decades of practice in Vedic, Tarot, KP and Numerology."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ASTROLOGERS.map((a) => (
            <motion.li
              key={a.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="card-lift ring-gradient group relative overflow-hidden rounded-3xl glass"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full glass-strong px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      a.online
                        ? "bg-emerald-400 shadow-[0_0_10px_oklch(0.75_0.2_150)]"
                        : "bg-muted-foreground"
                    }`}
                  />
                  {a.online ? "Online" : "Away"}
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-xs">
                  <Star className="h-3 w-3 fill-gold text-gold" />
                  <span className="font-medium">{a.rating}</span>
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="font-display text-xl text-foreground">{a.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{a.tag}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="text-foreground/80">{a.exp}+ yrs</span> ·{" "}
                  {a.languages}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <div className="font-display text-lg gradient-gold">
                      ${a.price}
                      <span className="text-xs text-muted-foreground">/min</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {a.reviews.toLocaleString()} reviews
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {[MessageCircle, Phone, Video].map((Icon, i) => (
                      <button
                        key={i}
                        aria-label={
                          ["Chat", "Call", "Video call"][i] + ` with ${a.name}`
                        }
                        className="grid h-9 w-9 place-items-center rounded-full glass text-foreground transition-transform hover:-translate-y-0.5 hover:text-gold"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 text-center">
          <a
            href="#all-astrologers"
            className="glass ring-gradient inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Browse all 500+ astrologers
          </a>
        </div>
      </div>
    </section>
  );
}
