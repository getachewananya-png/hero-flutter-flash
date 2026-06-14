import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Target, Globe, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import matched1 from "@/assets/matched-1.jpg";
import matched2 from "@/assets/matched-2.jpg";
import matched3 from "@/assets/matched-3.jpg";
import matched4 from "@/assets/matched-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Match Mentor" },
      { name: "description", content: "Match Mentor pairs aspiring physicians with matched residents for honest, personalized guidance." },
      { property: "og:title", content: "About — Match Mentor" },
      { property: "og:description", content: "Our mission: make the U.S. residency match transparent and accessible." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Built by mentors", desc: "Every guide, tool, and template is created by residents who matched." },
  { icon: Target, title: "Outcome-focused", desc: "We measure success by your Match Day, not vanity metrics." },
  { icon: Globe, title: "IMG-friendly", desc: "Half our community are international applicants. We get the nuances." },
  { icon: Sparkles, title: "Always free core", desc: "Foundational resources stay free — paid coaching is optional." },
];

const STATS = [
  { n: "12K+", l: "Applicants supported" },
  { n: "850+", l: "Active mentors" },
  { n: "94%", l: "Mentee match rate" },
  { n: "32", l: "Specialties covered" },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="We're the friend you wish you had during match"
      description="Match Mentor connects aspiring physicians with residents who've recently walked the same path — for honest, personalized, no-gatekeeping guidance."
    >
      <div className="grid md:grid-cols-2 gap-4 mb-20">
        {[matched1, matched2, matched3, matched4].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Matched resident"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-2xl object-cover w-full ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[5/4]"} ${i === 1 ? "md:mt-12" : ""}`}
          />
        ))}
      </div>

      <section className="grid md:grid-cols-4 gap-6 mb-20">
        {STATS.map((s) => (
          <div key={s.l} className="text-center rounded-2xl bg-[#5a4af4] text-white py-8">
            <div className="text-4xl font-extrabold">{s.n}</div>
            <div className="text-sm opacity-90 mt-1">{s.l}</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">What we stand for</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[#5a4af4]/10 text-[#5a4af4] flex items-center justify-center">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
