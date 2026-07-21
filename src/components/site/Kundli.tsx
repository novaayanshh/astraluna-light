import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SectionHeading } from "./Categories";

interface KundliForm {
  name: string;
  date: string;
  time: string;
  place: string;
}

const FEATURES = [
  { title: "Rashi & Nakshatra", body: "Moon-sign and lunar mansion with precise degrees." },
  { title: "Dasha Predictions", body: "Vimshottari Mahadasha and Antardasha timeline." },
  { title: "Doshas & Remedies", body: "Manglik, Kaal Sarp and Sade Sati analysis." },
  { title: "Divisional Charts", body: "D1, D9, D10 and beyond, rendered beautifully." },
];

export function Kundli() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<KundliForm>();

  const onSubmit = async (values: KundliForm) => {
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Your Kundli is being generated ✨", {
      description: `We'll email your personalised chart to ${values.name}.`,
    });
    reset();
  };

  return (
    <section id="kundli" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Free Janam Kundli"
              title="Your cosmic blueprint, decoded."
              description="Generate a museum-quality birth chart with rich Vedic detail — completely free, forever."
              align="left"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="ring-gradient rounded-2xl glass p-5"
                >
                  <div className="flex items-center gap-2 font-display text-lg text-foreground">
                    <Sparkles className="h-4 w-4 text-gold" />
                    {f.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl"
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="ring-gradient relative overflow-hidden rounded-3xl glass-strong p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl text-foreground">
                    Generate your Kundli
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your birth details below
                  </p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-glow">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <Field
                  label="Full name"
                  error={errors.name?.message}
                  input={
                    <input
                      type="text"
                      placeholder="Arjun Mehta"
                      {...register("name", { required: "Name is required" })}
                      className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  }
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Date of birth"
                    icon={<Calendar className="h-4 w-4" />}
                    error={errors.date?.message}
                    input={
                      <input
                        type="date"
                        {...register("date", { required: "Required" })}
                        className="w-full bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
                      />
                    }
                  />
                  <Field
                    label="Time of birth"
                    icon={<Clock className="h-4 w-4" />}
                    error={errors.time?.message}
                    input={
                      <input
                        type="time"
                        {...register("time", { required: "Required" })}
                        className="w-full bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
                      />
                    }
                  />
                </div>

                <Field
                  label="Place of birth"
                  icon={<MapPin className="h-4 w-4" />}
                  error={errors.place?.message}
                  input={
                    <input
                      type="text"
                      placeholder="Mumbai, India"
                      {...register("place", { required: "Required" })}
                      className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  }
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-base font-medium disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Casting your chart…
                    </span>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate My Kundli — Free
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Your data is encrypted and never shared.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  icon,
  error,
}: {
  label: string;
  input: React.ReactNode;
  icon?: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div
        className={`ring-gradient flex items-center gap-2 rounded-2xl bg-primary/5 px-4 py-3.5 transition-colors focus-within:bg-primary/10 ${
          error ? "!ring-destructive/60" : ""
        }`}
      >
        {icon && <span className="text-gold-soft">{icon}</span>}
        {input}
      </div>
      {error && (
        <span className="mt-1 block text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}
