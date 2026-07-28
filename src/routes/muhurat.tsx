import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { MuhuratPage } from "@/components/site/MuhuratPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/muhurat")({
  head: () => ({
    meta: [
      { title: "Muhurat & Kundli — Astrology" },
      {
        name: "description",
        content:
          "Find auspicious Muhurat timing for marriage, Griha Pravesh, business launches and more, plus a free Kundli generator.",
      },
    ],
  }),
  component: MuhuratRoute,
});

function MuhuratRoute() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <MuhuratPage />
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
