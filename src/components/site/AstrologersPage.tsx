import { motion } from "framer-motion";
import { AI_ASTROLOGERS } from "@/data/astrologers";
import { AstrologerCard } from "./Astrologers";
import { SectionHeading } from "./Categories";

export function AstrologersPage() {
  return (
    <section className="relative pb-24 pt-[192px] lg:pt-[224px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="AI Astrologers"
          title="AI Astrologers"
          description="Connect with our expert AI astrologers for guidance"
          plain
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {AI_ASTROLOGERS.map((a) => (
            <motion.li
              key={a.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <AstrologerCard a={a} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
