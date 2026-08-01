import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Shop } from "@/components/site/Shop";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Astrotring" },
      {
        name: "description",
        content:
          "Shop certified gemstones, malas, yantras, tarot decks and puja essentials, hand-picked by our Vedic astrologers.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <Shop />
      </main>
      <Footer />
      <Toaster
        theme="light"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(1 0 0 / 0.95)",
            border: "1px solid oklch(0.82 0.07 75 / 0.6)",
            color: "oklch(0.22 0.03 60)",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </div>
  );
}
