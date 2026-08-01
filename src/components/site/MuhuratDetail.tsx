import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles, Zap } from "lucide-react";
import { MUHURATS, type Muhurat } from "@/data/muhurats";

export function MuhuratDetail({ muhurat }: { muhurat: Muhurat }) {
  const related = MUHURATS.filter((m) => m.slug !== muhurat.slug);

  return (
    <div className="relative overflow-hidden pt-[192px] lg:pt-[224px]">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
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
          <Link to="/muhurat" className="transition-colors hover:text-primary">
            Muhurat
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-primary">{muhurat.navLabel}</span>
        </motion.nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              {muhurat.pageTitle}
            </h1>

            {/* Ornamental divider */}
            <div className="mt-8 flex items-center gap-3 text-primary/60" aria-hidden="true">
              <span className="h-2 w-2 rotate-45 bg-current" />
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
              <Sparkles className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              <span className="h-px flex-1 bg-gradient-to-l from-primary/50 via-primary/20 to-transparent" />
              <span className="h-2 w-2 rotate-45 bg-current" />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">
              {muhurat.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {muhurat.headline}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {muhurat.intro}
            </p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                <Zap className="h-4 w-4 text-primary" fill="currentColor" strokeWidth={0} />
                Quick Answer
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {muhurat.quickAnswer}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/consultation"
                className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Talk to an Astrologer
              </Link>
              <Link
                to="/muhurat"
                className="inline-flex h-11 items-center rounded-full border border-primary/30 bg-white px-6 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore All Muhurats
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-primary/15 bg-card p-6"
          >
            <h3 className="font-display text-xl font-bold text-foreground">Related Muhurat</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <span className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                  {muhurat.navLabel}
                </span>
              </li>
              {related.map((m) => (
                <li key={m.slug}>
                  <Link
                    to="/muhurat/$slug"
                    params={{ slug: m.slug }}
                    className="flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    {m.navLabel}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
