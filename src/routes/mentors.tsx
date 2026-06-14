import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — Match Mentor" },
      { name: "description", content: "Book 1:1 sessions with matched residents across top U.S. programs." },
      { property: "og:title", content: "Mentors — Match Mentor" },
      { property: "og:description", content: "Personalized guidance from residents who've been there." },
    ],
  }),
  component: MentorsPage,
});

const MENTORS = [
  { img: card1, name: "Dr. Sarah K.",  specialty: "Internal Medicine", program: "Johns Hopkins", city: "Baltimore, MD", rating: 4.9, sessions: 142 },
  { img: card2, name: "Dr. Priya N.",  specialty: "Pediatrics",        program: "Boston Children's", city: "Boston, MA", rating: 5.0, sessions: 98 },
  { img: card3, name: "Dr. James M.",  specialty: "Surgery",            program: "Mayo Clinic", city: "Rochester, MN", rating: 4.8, sessions: 76 },
  { img: card4, name: "Dr. Emily R.",  specialty: "Psychiatry",         program: "UCSF", city: "San Francisco, CA", rating: 4.9, sessions: 120 },
  { img: card5, name: "Dr. Alex T.",   specialty: "Emergency Medicine", program: "Mass General", city: "Boston, MA", rating: 4.7, sessions: 64 },
  { img: card6, name: "Dr. Maria L.",  specialty: "Family Medicine",    program: "Stanford", city: "Palo Alto, CA", rating: 5.0, sessions: 110 },
];

function MentorsPage() {
  return (
    <PageShell
      eyebrow="Mentors"
      title="Meet residents who've matched"
      description="1:1 coaching, application reviews, and mock interviews from doctors at top U.S. programs."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENTORS.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{m.name}</h3>
                <span className="flex items-center gap-1 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-[#F5B027] text-[#F5B027]" /> {m.rating}
                </span>
              </div>
              <p className="text-sm text-[#5a4af4] font-semibold mt-1">{m.specialty}</p>
              <p className="text-sm text-neutral-600 mt-1">{m.program}</p>
              <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {m.city}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{m.sessions} sessions</span>
                <button className="rounded-full bg-neutral-900 hover:bg-[#5a4af4] text-white px-4 py-2 text-sm font-medium transition-colors">
                  Book session
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
