import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Signup } from "@/components/site/Signup";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Create Account — Astrotring" }],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <Signup />
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
