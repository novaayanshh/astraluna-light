import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { ComplimentaryServices } from "@/components/site/ComplimentaryServices";
import { Astrologers } from "@/components/site/Astrologers";
import { Kundli } from "@/components/site/Kundli";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <Hero />
        <Categories />
        <ComplimentaryServices />
        <Astrologers />
        <Kundli />
        <Services />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
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
