import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, FileText, ClipboardList, Stethoscope, GraduationCap, Plane } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Guides — Match Mentor" },
      { name: "description", content: "Step-by-step guides to navigate every stage of the U.S. residency match process." },
      { property: "og:title", content: "Guides — Match Mentor" },
      { property: "og:description", content: "Step-by-step residency guides from application to interview day." },
    ],
  }),
  component: GuidesPage,
});

const GUIDES = [
  { icon: ClipboardList, title: "Application Roadmap", desc: "A complete timeline from USMLE prep to Rank Order List submission.", tag: "Beginner" },
  { icon: FileText, title: "Personal Statement Masterclass", desc: "Frameworks, examples, and editing checklists that programs love.", tag: "Writing" },
  { icon: Stethoscope, title: "Clinical Experience in the U.S.", desc: "Securing rotations, observerships, and meaningful LORs as an IMG.", tag: "IMG" },
  { icon: GraduationCap, title: "Interview Prep Playbook", desc: "Behavioral questions, mock interviews, and post-interview etiquette.", tag: "Interview" },
  { icon: Plane, title: "Visa & Relocation Guide", desc: "J-1 vs H-1B, ECFMG sponsorship, and moving logistics, demystified.", tag: "Visa" },
  { icon: BookOpen, title: "Specialty Selection Guide", desc: "Compare competitiveness, lifestyle, and match data across specialties.", tag: "Strategy" },
];

function GuidesPage() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Guides built by matched residents"
      description="Clear, practical, no-fluff playbooks for every milestone of the match journey."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((g, i) => (
          <motion.article
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl border border-neutral-200 bg-white p-7 hover:border-[#5a4af4] hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#5a4af4]/10 text-[#5a4af4] flex items-center justify-center mb-5 group-hover:bg-[#5a4af4] group-hover:text-white transition-colors">
              <g.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{g.tag}</span>
            <h3 className="mt-1 text-xl font-bold">{g.title}</h3>
            <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{g.desc}</p>
            <button className="mt-5 text-sm font-semibold text-[#5a4af4] hover:underline">Read guide →</button>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
