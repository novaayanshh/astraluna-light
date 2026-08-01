import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, Star } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";
import { Particles } from "./Particles";
const STATS = [
  { value: "500+", label: "Vedic Experts" },
  { value: "2M+", label: "Consultations" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "24/7", label: "Availability" },
];

const ZODIAC_GLYPHS = [
  { name: "Aries", glyph: "मेष" },
  { name: "Taurus", glyph: "वृषभ" },
  { name: "Gemini", glyph: "मिथु" },
  { name: "Cancer", glyph: "कर्क" },
  { name: "Leo", glyph: "सिंह" },
  { name: "Virgo", glyph: "कन्या" },
  { name: "Libra", glyph: "तुला" },
  { name: "Scorpio", glyph: "वृश्चि" },
  { name: "Sagittarius", glyph: "धनु" },
  { name: "Capricorn", glyph: "मकर" },
  { name: "Aquarius", glyph: "कुंभ" },
  { name: "Pisces", glyph: "मीन" },
];

const STAR_DOTS = [
  { x: 138, y: 52, r: 2.2, o: 0.7 },
  { x: 610, y: 32, r: 1.6, o: 0.5 },
  { x: 60, y: 178, r: 2, o: 0.6 },
  { x: 430, y: 108, r: 1.8, o: 0.55 },
  { x: 22, y: 340, r: 2.4, o: 0.65 },
  { x: 468, y: 300, r: 1.7, o: 0.5 },
  { x: 92, y: 470, r: 2, o: 0.6 },
  { x: 380, y: 460, r: 1.6, o: 0.45 },
  { x: 210, y: 22, r: 1.8, o: 0.55 },
  { x: 300, y: 480, r: 2.1, o: 0.6 },
  { x: 440, y: 380, r: 1.5, o: 0.4 },
  { x: 150, y: 400, r: 1.9, o: 0.5 },
  { x: 350, y: 60, r: 1.6, o: 0.45 },
  { x: 40, y: 250, r: 2, o: 0.55 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-[176px] pb-24 lg:pt-[208px] lg:pb-32"
    >
      {/* Warm backdrop wash */}
      <div className="absolute inset-0 -z-10">
        <img
          src={cosmicHero}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background/80 to-background" />
      </div>

      <Particles count={60} />

      {/* Orbital rings */}
      <div
        aria-hidden
        className="absolute right-[-10%] top-1/2 -z-10 h-[820px] w-[820px] -translate-y-1/2 animate-spin-slow rounded-full border border-primary/20"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_30px_oklch(0.75_0.19_55/0.9)]" />
      </div>
      <div
        aria-hidden
        className="absolute right-[-5%] top-1/2 -z-10 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-primary/15"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-2xl text-left"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-foreground/70"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-gold">
              <Star className="h-3 w-3 text-white" fill="currentColor" />
            </span>
            Trusted by 2M+ seekers worldwide
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Chat With <span className="gradient-text">Astrologers</span>
            <br />
            right now.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-8 max-w-xl text-balance text-lg text-muted-foreground"
          >
            Know about astrology, zodiac signs, retrogrades and more. Your world
            becomes clear once you understand how the universe influences it.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-10 flex flex-nowrap items-center gap-2 sm:gap-4"
          >
            <a
              href="#consult"
              className="btn-premium group inline-flex h-12 sm:h-14 shrink-0 items-center gap-2 rounded-full px-4 sm:px-8 text-sm sm:text-base font-semibold whitespace-nowrap"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
              Chat Now
            </a>
            <Link
              to="/shop"
              className="btn-outline-orange inline-flex h-12 sm:h-14 shrink-0 items-center gap-2 rounded-full px-4 sm:px-8 text-sm sm:text-base whitespace-nowrap"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
              Shop Now
            </Link>
          </motion.div>

          <motion.dl
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-4 py-4 text-center"
              >
                <dt className="font-display text-2xl font-semibold gradient-gold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — celestial orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block"
        >
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.98 0.05 90)" />
                <stop offset="45%" stopColor="oklch(0.88 0.18 70)" />
                <stop offset="100%" stopColor="oklch(0.72 0.19 55)" />
              </radialGradient>
            </defs>

            {/* orbit guide rings */}
            <circle cx="250" cy="250" r="230" fill="none" stroke="oklch(0.72 0.19 55 / 0.2)" strokeWidth="1" strokeDasharray="2 7" />
            <circle cx="250" cy="250" r="192" fill="none" stroke="oklch(0.72 0.19 55 / 0.28)" strokeWidth="1" />
            <circle cx="250" cy="250" r="150" fill="none" stroke="oklch(0.72 0.19 55 / 0.16)" strokeWidth="1" strokeDasharray="2 7" />

            {/* tick marks along the outer ring */}
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (i / 24) * Math.PI * 2;
              const x1 = 250 + 210 * Math.cos(a);
              const y1 = 250 + 210 * Math.sin(a);
              const x2 = 250 + 219 * Math.cos(a);
              const y2 = 250 + 219 * Math.sin(a);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.55 0.02 60 / 0.35)" strokeWidth="1" />
              );
            })}

            {/* scattered stardust */}
            {STAR_DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="oklch(0.75 0.19 55)" opacity={d.o} />
            ))}

            {/* floating planet dots */}
            <circle cx="368" cy="128" r="8" fill="oklch(0.66 0.2 38)" />
            <circle cx="392" cy="238" r="6.5" fill="oklch(0.75 0.19 55)" />

            {/* sun rays */}
            <g transform="translate(250,250)">
              {Array.from({ length: 16 }).map((_, i) => (
                <path
                  key={i}
                  d="M0,-58 L4,-80 L-4,-80 Z"
                  fill="oklch(0.82 0.19 65 / 0.55)"
                  transform={`rotate(${(360 / 16) * i})`}
                />
              ))}
            </g>

            {/* sun core */}
            <circle cx="250" cy="250" r="58" fill="url(#sunGlow)" />
            <circle cx="250" cy="250" r="22" fill="white" opacity="0.9" />
          </svg>

          {/* Zodiac glyph chips */}
          {ZODIAC_GLYPHS.map((sign, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 43 * Math.cos(angle);
            const y = 50 + 43 * Math.sin(angle);
            return (
              <div
                key={sign.name}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-primary/50 bg-white shadow-[0_6px_20px_-8px_oklch(0.7_0.2_55/0.35)]">
                  <span className="font-medium text-[11px] leading-none text-[oklch(0.48_0.12_45)]">
                    {sign.glyph}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating glows */}
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/2 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float-slow"
      />
    </section>
  );
}