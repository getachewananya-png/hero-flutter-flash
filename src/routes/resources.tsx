import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, Video, Calendar, Calculator, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Match Mentor" },
      { name: "description", content: "Free templates, calculators, webinars, and tools for residency applicants." },
      { property: "og:title", content: "Resources — Match Mentor" },
      { property: "og:description", content: "Templates, calculators, and webinars to power your match." },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  { icon: FileText, title: "ERAS CV Template", type: "PDF", desc: "Recruiter-tested CV layout used by 2,000+ matched residents.", cta: "Download" },
  { icon: Calculator, title: "Match Probability Calculator", type: "Tool", desc: "Estimate your odds based on Step scores, specialty, and visa status.", cta: "Launch tool" },
  { icon: Video, title: "Interview Day Walkthrough", type: "Video", desc: "A 45-minute video tour of a virtual interview, from prep to thank-you note.", cta: "Watch now" },
  { icon: Calendar, title: "2027 Match Timeline", type: "Calendar", desc: "Every key date — ERAS opens, ROL deadlines, Match Week — in one calendar.", cta: "Add to calendar" },
  { icon: FileText, title: "Personal Statement Templates", type: "PDF", desc: "Five proven structures with annotated examples per specialty.", cta: "Download" },
  { icon: Users, title: "Applicant Community", type: "Community", desc: "Private Discord for IMGs and U.S. seniors prepping for the match.", cta: "Join free" },
];

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Free tools to power your match"
      description="Templates, calculators, and live workshops — built with mentors, free for applicants."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl bg-white border border-neutral-200 p-7 flex flex-col hover:border-[#5a4af4] hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#5a4af4] text-white flex items-center justify-center">
                <r.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600">{r.type}</span>
            </div>
            <h3 className="mt-5 text-xl font-bold">{r.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">{r.desc}</p>
            <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-[#5a4af4] text-white px-5 py-2.5 text-sm font-medium transition-colors">
              <Download className="w-4 h-4" /> {r.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
