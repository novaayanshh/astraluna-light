import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "./Particles";

export function CTA() {
  return (
    <section id="consult" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="ring-gradient relative overflow-hidden rounded-[36px] glass-strong px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/40 via-accent/20 to-transparent"
          />
          <div
            aria-hidden
            className="absolute -left-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/40 blur-[100px] animate-float"
          />
          <div
            aria-hidden
            className="absolute -right-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/40 blur-[100px] animate-float-slow"
          />
          <Particles count={40} />

          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Limited-time offer
          </span>
          <h2 className="mt-6 text-balance font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Your first 3 minutes</span>
            <br />
            <span className="text-foreground">are on the house.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            Join millions who've reshaped their story with a single conversation.
            No credit card. No commitments.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="btn-premium group inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-medium"
            >
              Claim Free Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#astrologers"
              className="glass ring-gradient inline-flex h-14 items-center gap-2 rounded-full px-7 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              Meet the Astrologers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
