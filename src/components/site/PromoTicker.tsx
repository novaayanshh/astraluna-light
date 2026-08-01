import { Sparkle } from "lucide-react";

const TICKER_ITEMS = [
  "Free Kundli",
  "Kundli Matching",
  "Compatibility",
  "Horoscopes",
  "Chat to Astrologer",
];

// Tripled so the CSS marquee (which scrolls exactly one copy's width) loops seamlessly.
const LOOP_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export function PromoTicker() {
  return (
    <div
      aria-hidden={false}
      className="fixed inset-x-0 top-0 z-[60] h-11 overflow-hidden border-b border-primary/10 bg-background"
    >
      <div className="flex h-full w-max animate-marquee items-center gap-12 whitespace-nowrap px-6">
        {LOOP_ITEMS.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <Sparkle className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
