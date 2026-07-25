import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { DoshaPage } from "@/components/site/DoshaPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/doshas")({
  head: () => ({
    meta: [
      { title: "Doshas — Astrology" },
      {
        name: "description",
        content:
          "Understand Manglik, Kaal Sarp, Pitra and other common doshas in your birth chart, along with their traditional remedies.",
      },
    ],
  }),
  component: DoshasRoute,
});

function DoshasRoute() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <Navbar />
      <main>
        <DoshaPage />
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
