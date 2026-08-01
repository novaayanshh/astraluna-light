import { motion } from "framer-motion";
import { SectionHeading } from "./Categories";

const DOSHAS: { id: string; title: string; body: string; remedy: string; image: string }[] = [
  {
    id: "mangal-dosh",
    title: "Mangal Dosh (Manglik Dosh)",
    body: "Formed due to the placement of Mars in specific houses of the birth chart. It may cause delays in marriage and relationship challenges.",
    remedy: "Often addressed through Kumbh Vivah rituals, Hanuman worship, or matching with another Manglik chart.",
    image: "/Mangaldhosh-uXp4su-6.webp",
  },
  {
    id: "kaal-sarp-dosh",
    title: "Kaal Sarp Dosh",
    body: "Occurs when all planets are positioned between Rahu and Ketu. It can create life struggles and sudden obstacles.",
    remedy: "Commonly pacified with Rahu-Ketu remedies, specific mantras, and worship at Trimbakeshwar or similar temples.",
    image: "/sharpdosh-DZeCLuS4.webp",
  },
  {
    id: "chandra-dosh",
    title: "Chandra Dosh",
    body: "Happens when the Moon is weak. It may lead to emotional instability and mental imbalance.",
    remedy: "Eased with Moon-strengthening remedies — Somvar fasting, pearl gemstone guidance, and Chandra mantra japa.",
    image: "/chandradosh-oOnJ98am.webp",
  },
  {
    id: "pitra-dosh",
    title: "Pitra Dosh",
    body: "Associated with ancestral karmic imbalance causing obstacles in career and family life.",
    remedy: "Typically eased through Pitru Paksha rituals, Tarpan, and offerings to ancestors on relevant tithis.",
    image: "/pitradosh-BdVSztX-.webp",
  },
  {
    id: "shani-dosh",
    title: "Shani Dosh",
    body: "Formed due to challenging placement of Saturn bringing delays and hardships.",
    remedy: "Managed with Shani worship, discipline in daily routine, and specific gemstone or mantra recommendations.",
    image: "/shanidosh-CEkDO1Bg.webp",
  },
  {
    id: "guru-chandal-dosh",
    title: "Guru Chandal Dosh",
    body: "Occurs when Jupiter and Rahu are conjunct causing confusion and impaired judgment.",
    remedy: "Pacified through Guru mantra japa, yellow-sapphire guidance, and targeted Rahu remedial measures.",
    image: "/guruchandaldosh-x_wACGPh.webp",
  },
  {
    id: "grahan-dosh",
    title: "Grahan Dosh (Eclipse Dosh)",
    body: "Present when the Sun or Moon is closely conjunct Rahu or Ketu, associated with clarity and confidence issues.",
    remedy: "Addressed through targeted mantra japa and strengthening the afflicted planet via its remedial measures.",
    image: "/grahandosh-ORoT261x.webp",
  },
  {
    id: "ketu-dosh",
    title: "Ketu Dosh",
    body: "Occurs when Ketu is poorly placed or afflicted, often linked to detachment, confusion or sudden unexplained setbacks.",
    remedy: "Balanced through Ketu mantra japa, cat's-eye gemstone guidance, and spiritual practices like meditation.",
    image: "/ketudosh-CxrJ64qa.webp",
  },
  {
    id: "rahu-dosh",
    title: "Rahu Dosh",
    body: "Arises when Rahu afflicts key houses or planets, associated with sudden upheavals, confusion and unconventional obstacles.",
    remedy: "Pacified with Rahu mantra japa, hessonite (Gomed) gemstone guidance, and targeted remedial rituals.",
    image: "/rahudosh-DGPyBSbM.webp",
  },
];

export function DoshaPage() {
  return (
    <>
      <section className="relative pb-16 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Doshas"
            title="Understand your chart's challenges"
            description="A dosha is a planetary combination that Vedic astrology flags for extra attention — not a verdict, but a cue for the right remedy."
          />
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {DOSHAS.map(({ id, title, body, remedy, image }) => (
              <motion.li
                key={title}
                id={id}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                className="card-lift ring-gradient relative scroll-mt-28 overflow-hidden rounded-3xl glass p-6"
              >
                <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/20">
                  <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain p-2" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                <div className="mt-4 rounded-2xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
                    Typical remedy
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{remedy}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-14 text-center">
            <a
              href="/consultation"
              className="btn-gold inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm"
            >
              Get your chart checked by an astrologer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
