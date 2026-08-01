import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { MuhuratDetail } from "@/components/site/MuhuratDetail";
import { Footer } from "@/components/site/Footer";
import { getMuhuratBySlug } from "@/data/muhurats";

export const Route = createFileRoute("/muhurat/$slug")({
  loader: ({ params }) => {
    const muhurat = getMuhuratBySlug(params.slug);
    if (!muhurat) throw notFound();
    return muhurat;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.pageTitle} — Astrotring` },
          { name: "description", content: loaderData.quickAnswer },
        ]
      : [],
  }),
  component: MuhuratSlugRoute,
  notFoundComponent: () => (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-6 pt-32 text-center">
      <h1 className="font-display text-3xl text-foreground">Muhurat not found</h1>
      <p className="mt-3 text-muted-foreground">
        This Muhurat page doesn&apos;t exist or may have moved.
      </p>
      <Link
        to="/muhurat"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-glow"
      >
        Back to Muhurat
      </Link>
    </div>
  ),
});

function MuhuratSlugRoute() {
  const muhurat = Route.useLoaderData();
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <MuhuratDetail muhurat={muhurat} />
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
