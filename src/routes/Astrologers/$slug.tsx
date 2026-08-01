import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AstrologerDetail } from "@/components/site/AstrologerDetail";
import { Footer } from "@/components/site/Footer";
import { getAstrologerBySlug } from "@/data/astrologers";

export const Route = createFileRoute("/astrologers/$slug")({
  loader: ({ params }) => {
    const astrologer = getAstrologerBySlug(params.slug);
    if (!astrologer) throw notFound();
    return astrologer;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Astrology` },
          {
            name: "description",
            content: `Chat with ${loaderData.name}, a Vedic astrologer specialising in ${loaderData.expertise}.`,
          },
        ]
      : [],
  }),
  component: AstrologerRoute,
  notFoundComponent: () => (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-3xl text-foreground">Astrologer not found</h1>
      <p className="mt-3 text-muted-foreground">
        This astrologer profile doesn&apos;t exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-glow"
      >
        Back to Home
      </Link>
    </div>
  ),
});

function AstrologerRoute() {
  const astrologer = Route.useLoaderData();
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <main>
        <AstrologerDetail astrologer={astrologer} />
      </main>
      <Footer />
    </div>
  );
}
