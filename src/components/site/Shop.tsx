import { motion, AnimatePresence } from "framer-motion";
import {
  Gem,
  Flame,
  BookOpenText,
  CircleDot,
  Feather,
  Compass,
  Sparkles,
  ShoppingBag,
  Star,
  Plus,
  Minus,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./Categories";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type Category =
  "Gemstones" | "Malas & Rudraksha" | "Yantras & Idols" | "Tarot & Books" | "Puja Essentials";

type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  icon: LucideIcon;
  tint: string;
  blurb: string;
};

const CATEGORIES: Category[] = [
  "Gemstones",
  "Malas & Rudraksha",
  "Yantras & Idols",
  "Tarot & Books",
  "Puja Essentials",
];

const CATEGORY_TINT: Record<Category, string> = {
  Gemstones: "from-orange-500/30 to-red-500/10",
  "Malas & Rudraksha": "from-amber-500/30 to-yellow-500/10",
  "Yantras & Idols": "from-sky-400/25 to-indigo-400/10",
  "Tarot & Books": "from-fuchsia-400/25 to-purple-400/10",
  "Puja Essentials": "from-emerald-500/25 to-lime-500/10",
};

const PRODUCTS: Product[] = [
  {
    id: "ruby-gemstone",
    name: "Certified Ruby (Manik)",
    category: "Gemstones",
    price: 89,
    rating: 4.8,
    reviews: 342,
    icon: Gem,
    tint: CATEGORY_TINT.Gemstones,
    blurb: "Sun gemstone for confidence & leadership",
  },
  {
    id: "yellow-sapphire",
    name: "Yellow Sapphire (Pukhraj)",
    category: "Gemstones",
    price: 129,
    rating: 4.9,
    reviews: 518,
    icon: Gem,
    tint: CATEGORY_TINT.Gemstones,
    blurb: "Jupiter's stone for wisdom & prosperity",
  },
  {
    id: "rudraksha-5",
    name: "5 Mukhi Rudraksha Mala",
    category: "Malas & Rudraksha",
    price: 34,
    rating: 4.7,
    reviews: 890,
    icon: CircleDot,
    tint: CATEGORY_TINT["Malas & Rudraksha"],
    blurb: "108 beads for meditation & calm",
  },
  {
    id: "tulsi-mala",
    name: "Sacred Tulsi Mala",
    category: "Malas & Rudraksha",
    price: 22,
    rating: 4.6,
    reviews: 401,
    icon: Feather,
    tint: CATEGORY_TINT["Malas & Rudraksha"],
    blurb: "Hand-strung holy basil beads",
  },
  {
    id: "sri-yantra",
    name: "Sri Yantra (Brass)",
    category: "Yantras & Idols",
    price: 45,
    rating: 4.8,
    reviews: 267,
    icon: Compass,
    tint: CATEGORY_TINT["Yantras & Idols"],
    blurb: "Attracts abundance & harmony",
  },
  {
    id: "ganesh-idol",
    name: "Ganesh Idol, Brass",
    category: "Yantras & Idols",
    price: 58,
    rating: 4.9,
    reviews: 612,
    icon: Sparkles,
    tint: CATEGORY_TINT["Yantras & Idols"],
    blurb: "Remover of obstacles, new beginnings",
  },
  {
    id: "tarot-deck",
    name: "Celestial Tarot Deck",
    category: "Tarot & Books",
    price: 28,
    rating: 4.9,
    reviews: 733,
    icon: BookOpenText,
    tint: CATEGORY_TINT["Tarot & Books"],
    blurb: "78-card deck with guidebook",
  },
  {
    id: "vedic-book",
    name: "Vedic Astrology Handbook",
    category: "Tarot & Books",
    price: 19,
    rating: 4.7,
    reviews: 205,
    icon: BookOpenText,
    tint: CATEGORY_TINT["Tarot & Books"],
    blurb: "A practical guide to your Kundli",
  },
  {
    id: "havan-kit",
    name: "Havan Puja Kit",
    category: "Puja Essentials",
    price: 24,
    rating: 4.6,
    reviews: 178,
    icon: Flame,
    tint: CATEGORY_TINT["Puja Essentials"],
    blurb: "Complete kit for home rituals",
  },
];

type CartItem = { id: string; qty: number };

export function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(
    () =>
      activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);
  const cartTotal = cart.reduce((sum, c) => {
    const product = PRODUCTS.find((p) => p.id === c.id);
    return sum + (product ? product.price * c.qty : 0);
  }, 0);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id);
      if (existing) {
        return prev.map((c) => (c.id === product.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { id: product.id, qty: 1 }];
    });
    toast.success(`${product.name} added to cart`);
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c)).filter((c) => c.qty > 0),
    );
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow="Cosmic Boutique"
            title="Shop celestial essentials"
            description="Gemstones, malas, yantras and sacred tools — hand-picked and blessed for your spiritual journey."
            align="left"
          />

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="glass ring-gradient relative mt-1 inline-flex h-12 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col glass-strong">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Your cart</SheetTitle>
                <SheetDescription>
                  {cartCount === 0
                    ? "Your cart is empty."
                    : `${cartCount} item${cartCount > 1 ? "s" : ""} ready for checkout.`}
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-4">
                  {cart.map((item) => {
                    const product = PRODUCTS.find((p) => p.id === item.id);
                    if (!product) return null;
                    const Icon = product.icon;
                    return (
                      <li key={item.id} className="flex items-center gap-3 rounded-2xl glass p-3">
                        <div
                          className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${product.tint}`}
                        >
                          <Icon className="h-6 w-6 text-foreground/70" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">${product.price} each</p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="grid h-6 w-6 place-items-center rounded-full glass text-foreground hover:text-primary"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-4 text-center text-xs font-medium">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              aria-label="Increase quantity"
                              className="grid h-6 w-6 place-items-center rounded-full glass text-foreground hover:text-primary"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${product.name}`}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <SheetFooter className="border-t border-white/10 pt-4">
                <div className="flex w-full flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-display text-xl gradient-gold">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <SheetClose asChild>
                    <button
                      type="button"
                      disabled={cartCount === 0}
                      onClick={() =>
                        toast.info("Checkout isn't wired up yet — this is a demo cart.")
                      }
                      className="btn-gold flex h-12 w-full items-center justify-center rounded-full text-sm disabled:opacity-40"
                    >
                      Checkout
                    </button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
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

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => {
              const Icon = product.icon;
              return (
                <motion.li
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-lift ring-gradient group relative overflow-hidden rounded-3xl glass"
                >
                  <div
                    className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${product.tint}`}
                  >
                    <Icon
                      className="h-16 w-16 text-foreground/60 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-xs">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {product.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg text-foreground">{product.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{product.blurb}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <div>
                        <div className="font-display text-lg gradient-gold">${product.price}</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {product.reviews.toLocaleString()} reviews
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="btn-gold inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-xs"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        Add
                      </button>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No products in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}