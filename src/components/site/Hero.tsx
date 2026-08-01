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

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
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
          <div className="absolute inset-0 rounded-full border border-primary/25" />
          <div className="absolute inset-6 rounded-full border border-primary/20" />
          <div className="absolute inset-14 rounded-full border border-primary/15" />
          <div className="absolute inset-24 rounded-full border border-primary/10" />

          {/* Zodiac chips */}
          {[
            { name: "Aries", image: "/aries-KxO7nP9A.webp" },
            { name: "Taurus", image: "/taurus-BYxEmmrx.webp" },
            { name: "Gemini", image: "/gemini-6zulReUB.webp" },
            { name: "Cancer", image: "/cancer-C_dxN-8s.webp" },
            { name: "Leo", image: "/leo-_NR55xqJ.webp" },
            { name: "Virgo", image: "/virgo-BNP1NYmB.webp" },
            { name: "Libra", image: "/libra-BmQ7M_q-.webp" },
            { name: "Scorpio", image: "/scorpio-E6aDllmG.webp" },
            { name: "Sagittarius", image: "/sagittarius-CTZbtTko.webp" },
            { name: "Capricorn", image: "/capricorn-CaigM1Sd.webp" },
            { name: "Aquarius", image: "/aquarius-CuQ8WK_q.webp" },
            { name: "Pisces", image: "/pisces-DwiBbkF6.webp" },
          ].map((sign, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 48 * Math.cos(angle);
            const y = 50 + 48 * Math.sin(angle);
            return (
              <div
                key={sign.name}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-card shadow-[0_6px_20px_-8px_oklch(0.7_0.2_55/0.5)] ring-1 ring-primary/20">
                  <img
                    src={sign.image}
                    alt={sign.name}
                    loading="lazy"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
              </div>
            );
          })}

          {/* Sun core */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[oklch(0.95_0.15_85)] via-[oklch(0.82_0.19_65)] to-[oklch(0.7_0.22_45)] shadow-[0_0_80px_oklch(0.78_0.2_65/0.7)] animate-glow-pulse" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_60px_oklch(1_0.1_85/0.9)]" />
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