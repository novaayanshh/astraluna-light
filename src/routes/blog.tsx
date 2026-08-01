import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Astrotring" },
      {
        name: "description",
        content:
          "Read the Astraluna journal — insights on zodiac, numerology, vastu, relationships and career from our Vedic astrologers.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <Blog />
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
