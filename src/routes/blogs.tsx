import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import matched1 from "@/assets/matched-1.jpg";
import matched2 from "@/assets/matched-2.jpg";
import matched3 from "@/assets/matched-3.jpg";
import matched4 from "@/assets/matched-4.jpg";
import matched5 from "@/assets/matched-5.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Match Mentor" },
      { name: "description", content: "Expert guides, templates, and real stories from matched residents." },
      { property: "og:title", content: "Blogs — Match Mentor" },
      { property: "og:description", content: "Insights & resources for your Match journey." },
    ],
  }),
  component: BlogsPage,
});

const BLOGS = [
  { tag: "ERAS Guide", title: "USMLE to ERAS Migration Guide", desc: "Our bullet-proof step-by-step checklist to transition from Step exams to ERAS without missing a beat.", cover: matched1, bg: "bg-[#eef7ec]" },
  { tag: "Swipe File", title: "Top 200 Personal Statements", desc: "You need some inspiration for your next personal statement? These are the PS that matched at top programs.", cover: matched2, bg: "bg-[#eaf2fb]" },
  { tag: "Template",  title: "Residency CV Examples + Templates", desc: "25+ Top residency CV examples and 8 ready-to-use templates to design your own application today.", cover: matched3, bg: "bg-[#f4eef9]" },
  { tag: "LinkedIn",  title: "Physician Personal Branding Playbook", desc: "Your ultimate LinkedIn personal branding guide including a free Notion content calendar.", cover: matched4, bg: "bg-[#eaf4fb]" },
  { featured: true, title: "Join the residency match newsletter", desc: "Every month, we send you the best free match templates, tools, and resources. 10,000+ future physicians are already in. Are you?" },
  { tag: "Guide",     title: "The Ultimate Guide to Mentor Collaboration", desc: "With this ultimate collaboration guide for residency mentorship, you can learn how to make the most of every call.", cover: matched5, bg: "bg-[#f0eef9]" },
];

function BlogsPage() {
  return (
    <PageShell
      eyebrow="Blogs"
      title="Insights & Resources for Your Match Journey"
      description="Expert guides, swipe-worthy templates, and real stories from matched residents."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.map((b, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`${b.featured ? "bg-[#5a4af4] text-white" : "bg-white border border-neutral-200"} rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow`}
          >
            {b.featured ? (
              <div className="p-7 flex flex-col h-full min-h-[420px] justify-between">
                <div>
                  <div className="flex justify-center mb-6 opacity-80">
                    <svg viewBox="0 0 80 60" className="w-20 h-14" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M10 40 Q 40 5 70 40" />
                      <circle cx="15" cy="20" r="1.5" fill="white"/>
                      <circle cx="40" cy="8" r="1.5" fill="white"/>
                      <circle cx="65" cy="20" r="1.5" fill="white"/>
                      <circle cx="70" cy="40" r="2" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-center">{b.title}</h3>
                  <p className="mt-3 text-sm text-white/80 text-center">{b.desc}</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-3">
                  <input type="email" required placeholder="Email *" className="w-full rounded-full bg-white/15 placeholder-white/70 text-white px-5 py-3 text-sm outline-none border border-white/20 focus:border-white/60" />
                  <button type="submit" className="w-full rounded-full bg-white text-[#5a4af4] px-5 py-3 text-sm font-semibold hover:bg-neutral-100 transition-colors">Subscribe</button>
                </form>
              </div>
            ) : (
              <>
                <div className={`${b.bg} p-6 aspect-[5/3] flex items-center justify-center overflow-hidden`}>
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover rounded-xl shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {b.tag && (
                    <span className="self-start text-[11px] font-medium tracking-wide text-[#5a4af4] border border-[#5a4af4]/40 rounded-full px-3 py-0.5">{b.tag}</span>
                  )}
                  <h3 className="mt-4 text-lg font-bold leading-snug text-neutral-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 flex-1">{b.desc}</p>
                  {b.tag && (
                    <Link 
                      to={`/blog/${b.tag.toLowerCase().replace(/\s+/g, '-')}` as any}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5a4af4] hover:text-[#4a3ad4] transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </>
            )}
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}