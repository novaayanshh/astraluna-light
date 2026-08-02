import { motion } from "framer-motion";

const STATS = [
  { value: "500K+", label: "Happy Customers", color: "from-orange-600 to-red-500" },
  { value: "1M+", label: "Consultations Delivered", color: "from-orange-500 to-amber-500" },
  { value: "250+", label: "Astrologers Available", color: "from-amber-600 to-lime-600" },
  { value: "100+", label: "Services Offered", color: "from-green-600 to-emerald-500" },
];

export function Stats() {
  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.li
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-border/60 bg-white p-6 text-center shadow-sm sm:p-8"
            >
              <div
                className={`font-sans text-4xl font-black tracking-tight bg-gradient-to-br bg-clip-text text-transparent sm:text-5xl ${s.color}`}
              >
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                {s.label}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}