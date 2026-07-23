import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CalendarDays,
  Clock,
  Sparkles,
  Heart,
  Briefcase,
  Compass,
  Gem,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./Categories";
import { Input } from "@/components/ui/input";

type Category = "Zodiac" | "Numerology" | "Vastu" | "Relationships" | "Career" | "Festivals";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  author: string;
  icon: LucideIcon;
  tint: string;
  featured?: boolean;
};

const CATEGORIES: Category[] = [
  "Zodiac",
  "Numerology",
  "Vastu",
  "Relationships",
  "Career",
  "Festivals",
];

const CATEGORY_META: Record<Category, { icon: LucideIcon; tint: string }> = {
  Zodiac: {
    icon: Sparkles,
    tint: "from-orange-500/30 to-red-500/10",
  },
  Numerology: {
    icon: Compass,
    tint: "from-sky-400/25 to-indigo-400/10",
  },
  Vastu: {
    icon: Gem,
    tint: "from-emerald-500/25 to-lime-500/10",
  },
  Relationships: {
    icon: Heart,
    tint: "from-pink-500/25 to-rose-400/10",
  },
  Career: {
    icon: Briefcase,
    tint: "from-amber-500/30 to-yellow-500/10",
  },
  Festivals: {
    icon: PartyPopper,
    tint: "from-fuchsia-400/25 to-purple-400/10",
  },
};

const POSTS: Post[] = [
  {
    id: "mercury-retrograde-2026",
    title: "Surviving Mercury Retrograde: A Practical Guide",
    excerpt:
      "What actually happens during retrograde season, and the rituals seasoned astrologers use to stay grounded through it.",
    category: "Zodiac",
    date: "Jul 18, 2026",
    readTime: "6 min read",
    author: "Aditi Sharma",
    icon: CATEGORY_META.Zodiac.icon,
    tint: CATEGORY_META.Zodiac.tint,
    featured: true,
  },
  {
    id: "life-path-number",
    title: "Finding Your Life Path Number in 5 Minutes",
    excerpt:
      "A simple formula using your birth date to uncover the numerology that shapes your personality and purpose.",
    category: "Numerology",
    date: "Jul 14, 2026",
    readTime: "4 min read",
    author: "Meera Kapoor",
    icon: CATEGORY_META.Numerology.icon,
    tint: CATEGORY_META.Numerology.tint,
  },
  {
    id: "vastu-entrance",
    title: "5 Vastu Fixes for Your Home's Main Entrance",
    excerpt:
      "Small, low-cost changes at your threshold that are believed to shift the energy flowing through your entire home.",
    category: "Vastu",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    author: "Pandit Ravi Krishnan",
    icon: CATEGORY_META.Vastu.icon,
    tint: CATEGORY_META.Vastu.tint,
  },
  {
    id: "compatibility-synastry",
    title: "Beyond Sun Signs: How Synastry Reveals Compatibility",
    excerpt:
      "Why comparing just your sun signs barely scratches the surface — and what a full synastry chart actually shows.",
    category: "Relationships",
    date: "Jul 6, 2026",
    readTime: "7 min read",
    author: "Meera Kapoor",
    icon: CATEGORY_META.Relationships.icon,
    tint: CATEGORY_META.Relationships.tint,
  },
  {
    id: "saturn-return-career",
    title: "Your Saturn Return: Career Reckoning at 29",
    excerpt:
      "Why so many people change careers or cities around age 29 — and how to work with this transit instead of against it.",
    category: "Career",
    date: "Jul 2, 2026",
    readTime: "8 min read",
    author: "Acharya Devansh",
    icon: CATEGORY_META.Career.icon,
    tint: CATEGORY_META.Career.tint,
  },
  {
    id: "raksha-bandhan-muhurat",
    title: "Raksha Bandhan 2026: Auspicious Muhurat Timings",
    excerpt:
      "The most favourable windows this year to tie the sacred thread, according to the Panchang.",
    category: "Festivals",
    date: "Jun 28, 2026",
    readTime: "3 min read",
    author: "Pandit Ravi Krishnan",
    icon: CATEGORY_META.Festivals.icon,
    tint: CATEGORY_META.Festivals.tint,
  },
  {
    id: "moon-sign-emotions",
    title: "Your Moon Sign Explains More Than You Think",
    excerpt:
      "If your sun sign is who you are, your moon sign is how you feel. Here's how to read yours.",
    category: "Zodiac",
    date: "Jun 24, 2026",
    readTime: "5 min read",
    author: "Aditi Sharma",
    icon: CATEGORY_META.Zodiac.icon,
    tint: CATEGORY_META.Zodiac.tint,
  },
  {
    id: "angel-numbers",
    title: "Angel Numbers: What 11:11 Is Really Telling You",
    excerpt:
      "The numerology behind repeating number sequences and how to start noticing your own patterns.",
    category: "Numerology",
    date: "Jun 20, 2026",
    readTime: "4 min read",
    author: "Meera Kapoor",
    icon: CATEGORY_META.Numerology.icon,
    tint: CATEGORY_META.Numerology.tint,
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const featured = POSTS.find((p) => p.featured);

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      if (p.featured) return false;
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function openPost(title: string) {
    toast.info(`"${title}" — full article page coming soon.`);
  }

  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Astraluna Journal"
          title="Stories written in the stars"
          description="Insights on zodiac, numerology, vastu and love — from our senior Vedic astrologers."
        />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="h-11 rounded-full border-border/60 bg-background/60 pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "btn-gold"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {featured && activeCategory === "All" && query.trim() === "" && (
          <button
            type="button"
            onClick={() => openPost(featured.title)}
            className="card-lift ring-gradient group relative mt-10 block w-full overflow-hidden rounded-3xl glass text-left"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
              <div
                className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br ${featured.tint} lg:min-h-[320px]`}
              >
                <featured.icon
                  className="h-24 w-24 text-foreground/50 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.2}
                />
                <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-soft">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-10">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {featured.category}
                </span>
                <h3 className="mt-4 text-balance font-display text-2xl text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                  <span>By {featured.author}</span>
                </div>
              </div>
            </div>
          </button>
        )}

        <motion.ul layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => {
              const Icon = post.icon;
              return (
                <motion.li
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    type="button"
                    onClick={() => openPost(post.title)}
                    className="card-lift ring-gradient group relative block w-full overflow-hidden rounded-3xl glass text-left"
                  >
                    <div
                      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${post.tint}`}
                    >
                      <Icon
                        className="h-14 w-14 text-foreground/50 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.3}
                      />
                      <span className="absolute left-3 top-3 rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-lg leading-snug text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No articles match your search yet.
          </p>
        )}
      </div>
    </section>
  );
}