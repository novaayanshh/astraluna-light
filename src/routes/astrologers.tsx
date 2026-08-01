import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AstrologersPage } from "@/components/site/AstrologersPage";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/astrologers")({
  head: () => ({
    meta: [
      { title: "AI Astrologers — Astrotring" },
      {
        name: "description",
        content:
          "Browse all of Astrotring's AI astrologers and connect instantly for guidance on career, love, health, finance and more.",
      },
    ],
  }),
  component: AstrologersRoute,
});

function AstrologersRoute() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <AstrologersPage />
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
