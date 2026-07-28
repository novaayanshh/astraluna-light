import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ConsultationPage } from "@/components/site/ConsultationPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Consultation — Astrology" },
      {
        name: "description",
        content:
          "Book a chat, call or video consultation with verified astrologers specialising in Vedic, Tarot and KP astrology.",
      },
    ],
  }),
  component: ConsultationRoute,
});

function ConsultationRoute() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <ConsultationPage />
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
