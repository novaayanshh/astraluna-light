import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { HoroscopePage } from "@/components/site/HoroscopePage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/horoscopes")({
  head: () => ({
    meta: [
      { title: "Horoscopes — Astrology" },
      {
        name: "description",
        content:
          "Daily, weekly and monthly horoscopes for all 12 zodiac signs, prepared by our Vedic astrologers.",
      },
    ],
  }),
  component: HoroscopesRoute,
});

function HoroscopesRoute() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <Navbar />
      <main>
        <HoroscopePage />
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
