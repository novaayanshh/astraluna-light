import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, MessageCircle, Sparkles, ShoppingCart } from "lucide-react";
import type { Astrologer } from "@/data/astrologers";

export function AstrologerDetail({ astrologer }: { astrologer: Astrologer }) {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/" hash="astrologers" className="transition-colors hover:text-primary">
            Astrologers
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-primary">{astrologer.name}</span>
        </motion.nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr_0.85fr] lg:items-start">
          {/* Portrait + chat rate */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass ring-gradient rounded-3xl p-3"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={astrologer.image}
                alt={`Portrait of ${astrologer.name}`}
                className="aspect-square w-full object-cover"
              />
              <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-background/60 p-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Chat Rate
                </p>
                <p className="font-display text-2xl gradient-gold">
                  ₹{astrologer.rate.toFixed(2)}
                  <span className="text-sm text-muted-foreground">/msg</span>
                </p>
              </div>
              <button className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" />
                Chat Now
              </button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl text-foreground sm:text-5xl">
              {astrologer.name}
            </h1>

            <dl className="mt-6 space-y-3 text-sm sm:text-base">
              <div className="flex flex-wrap gap-1.5">
                <dt className="font-semibold text-foreground">Expertise:</dt>
                <dd className="text-muted-foreground">{astrologer.expertise}</dd>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <dt className="font-semibold text-foreground">Experience:</dt>
                <dd className="text-muted-foreground">{astrologer.experience}</dd>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <dt className="font-semibold text-foreground">Language:</dt>
                <dd className="text-muted-foreground">{astrologer.language}</dd>
              </div>
            </dl>

            <div className="mt-10">
              <h2 className="font-display text-2xl text-foreground">
                About {astrologer.name}
              </h2>
              <p className="mt-3 text-balance text-muted-foreground">{astrologer.about}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl text-foreground">Education</h2>
              <ul className="mt-3 space-y-2">
                {astrologer.education.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Promo banner */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass ring-gradient overflow-hidden rounded-3xl"
          >
            <div className="relative bg-gradient-to-br from-primary/15 to-accent/10 p-6">
              <span className="absolute right-3 top-3 rounded-full bg-foreground/80 px-2 py-0.5 text-[10px] font-medium text-white">
                Ad
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Astrotring Shop
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
                Yellow Sapphire (Pukhraj)
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Attracts wealth, wisdom &amp; good fortune. Certified &amp; lab-tested.
              </p>
              <Link
                to="/shop"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <ShoppingCart className="h-4 w-4" />
                Shop Now
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
