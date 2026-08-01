import { motion } from "framer-motion";
import { SectionHeading } from "./Categories";

const SERVICES: {
  title: string;
  body: string;
  image: string;
  tint: string;
}[] = [
  {
    title: "Mangal Dosh (Manglik Dosh)",
    body: "Formed due to the placement of Mars in specific houses of the birth chart. It may cause delays in marriage and relationship challenges.",
    image: "/Mangaldhosh-uXp4su-6.webp",
    tint: "from-rose-200 to-orange-100",
  },
  {
    title: "Kaal Sarp Dosh",
    body: "Occurs when all planets are positioned between Rahu and Ketu. It can create life struggles and sudden obstacles.",
    image: "/sharpdosh-DZeCLuS4.webp",
    tint: "from-amber-200 to-yellow-100",
  },
  {
    title: "Chandra Dosh",
    body: "Happens when the Moon is weak. It may lead to emotional instability and mental imbalance.",
    image: "/chandradosh-oOnJ98am.webp",
    tint: "from-sky-200 to-blue-100",
  },
  {
    title: "Pitra Dosh",
    body: "Associated with ancestral karmic imbalance causing obstacles in career and family life.",
    image: "/pitradosh-BdVSztX-.webp",
    tint: "from-indigo-200 to-violet-100",
  },
  {
    title: "Shani Dosh",
    body: "Formed due to challenging placement of Saturn bringing delays and hardships.",
    image: "/shanidosh-CEkDO1Bg.webp",
    tint: "from-purple-200 to-fuchsia-100",
  },
  {
    title: "Guru Chandal Dosh",
    body: "Occurs when Jupiter and Rahu are conjunct causing confusion and impaired judgment.",
    image: "/guruchandaldosh-x_wACGPh.webp",
    tint: "from-emerald-200 to-teal-100",
  },
  {
    title: "Grahan Dosh (Eclipse Dosh)",
    body: "Present when the Sun or Moon is closely conjunct Rahu or Ketu, associated with clarity and confidence issues.",
    image: "/grahandosh-ORoT261x.webp",
    tint: "from-slate-200 to-zinc-100",
  },
  {
    title: "Ketu Dosh",
    body: "Occurs when Ketu is poorly placed or afflicted, often linked to detachment, confusion or sudden unexplained setbacks.",
    image: "/ketudosh-CxrJ64qa.webp",
    tint: "from-cyan-200 to-sky-100",
  },
  {
    title: "Rahu Dosh",
    body: "Arises when Rahu afflicts key houses or planets, associated with sudden upheavals, confusion and unconventional obstacles.",
    image: "/rahudosh-DGPyBSbM.webp",
    tint: "from-lime-200 to-emerald-100",
  },
];

export function ComplimentaryServices() {
  return (
    <section id="complimentary-services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Free Consultations"
          title="Complimentary Astrology Services"
          description="We offer free consultations to help you understand your birth chart and its implications."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ title, body, image, tint }) => (
            <motion.li
              key={title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className={`card-lift group relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${tint} p-6`}
            >
              <h3 className="max-w-[75%] font-display text-xl leading-snug text-foreground/90">
                {title}
              </h3>
              <p className="mt-3 max-w-[80%] text-sm text-foreground/60">{body}</p>

              <a
                href="/doshas"
                className="relative z-10 mt-auto inline-flex h-10 w-fit items-center rounded-full bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                View More
              </a>

              <img
                src={image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none absolute -bottom-2 -right-2 h-32 w-32 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 sm:h-36 sm:w-36"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
