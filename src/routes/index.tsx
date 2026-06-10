import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Play, ArrowUpRight, ArrowRight, Plus, Mail, TrendingUp, Layers, Compass } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/match-mentor-logo.png.asset.json";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import card7 from "@/assets/card-7.jpg";
import matched1 from "@/assets/matched-1.jpg";
import matched2 from "@/assets/matched-2.jpg";
import matched3 from "@/assets/matched-3.jpg";
import matched4 from "@/assets/matched-4.jpg";
import matched5 from "@/assets/matched-5.jpg";
import matched6 from "@/assets/matched-6.jpg";
import matched7 from "@/assets/matched-7.jpg";
import matched8 from "@/assets/matched-8.jpg";
import subscribeStudents from "@/assets/subscribe-students.png.asset.json";
import { Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Match Mentor — Your Guide to U.S. Residency Success" },
      { name: "description", content: "Comprehensive guides, expert advice, and resources to help you achieve your U.S. residency dreams." },
    ],
  }),
  component: Index,
});

const VIDEO = "https://cdn.coverr.co/videos/coverr-a-fashion-model-posing-1080p.mp4";

type Card = {
  img: string;
  name: string;
  bg: string;
  className: string;
  from: { x: number; y: number; rotate: number };
  scatter: { x: number; y: number; rotate: number };
};

const cards: Card[] = [
  { img: card1, name: "Dr. Sarah K.",  bg: "bg-[#1E5F8A]", className: "col-start-1 row-start-1 row-span-2 aspect-[3/4]", from: { x: -400, y: -200, rotate: -25 }, scatter: { x: -600, y: -300, rotate: -28 } },
  { img: card6, name: "Dr. Maria L.",  bg: "bg-[#F5B027]", className: "col-start-1 row-start-3 aspect-[4/3]",            from: { x: -500, y:  300, rotate:  20 }, scatter: { x: -700, y:  400, rotate:  24 } },
  { img: card2, name: "Dr. Priya N.",  bg: "bg-[#1F8A4C]", className: "col-start-2 row-start-1 row-span-3 aspect-[3/5]", from: { x: -200, y:  400, rotate: -10 }, scatter: { x: -350, y:  500, rotate: -18 } },
  // index 3 = CENTER card that morphs into the About photo
  { img: card3, name: "Dr. James M.",  bg: "bg-[#0E4F73]", className: "col-start-3 row-start-1 row-span-2 aspect-[3/4]", from: { x:    0, y: -400, rotate:  15 }, scatter: { x:    0, y:    0, rotate:   0 } },
  { img: card4, name: "Dr. Emily R.",  bg: "bg-[#B7DDEA]", className: "col-start-4 row-start-1 row-span-3 aspect-[3/5]", from: { x:  200, y: -400, rotate: -15 }, scatter: { x:  350, y: -500, rotate:  18 } },
  { img: card5, name: "Dr. Alex T.",   bg: "bg-[#7FC4A0]", className: "col-start-5 row-start-1 row-span-2 aspect-[3/4]", from: { x:  500, y: -300, rotate:  25 }, scatter: { x:  700, y: -400, rotate:  30 } },
  { img: card7, name: "Dr. David S.",  bg: "bg-[#1F5E3A]", className: "col-start-5 row-start-3 aspect-[4/3]",            from: { x:  500, y:  300, rotate: -20 }, scatter: { x:  720, y:  450, rotate: -26 } },
];

const HERO_CARD_LAYOUT_ID = "morph-hero-card";
const HERO_CARD = cards[3];

function Index() {
  const [email, setEmail] = useState("");
  const { scrollY } = useScroll();
  const [inAbout, setInAbout] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.45 : 400;
    setInAbout(y > threshold);
  });

  return (
    <div className="min-h-screen bg-[#0e0e0e] p-3 md:p-5">
      <div className="mx-auto max-w-[1680px] rounded-2xl bg-[#fdfcf8] px-6 md:px-14 py-6 md:py-8 overflow-hidden">
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="Match Mentor" className="h-10 w-auto" />
            <span className="text-xl font-extrabold tracking-tight">Match Mentor</span>
          </div>
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-neutral-800">
            {["Home", "Guides", "Mentors", "Resources", "About"].map((l) => (
              <li key={l} className="hover:text-[#1E5F8A] cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <button className="ml-2 rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
              Sign In
            </button>
          </div>
        </motion.nav>

        {/* Heading */}
        <div className="relative mt-10 md:mt-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute left-0 top-4 hidden lg:flex w-28 h-28 items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9" letterSpacing="1" fill="#222">
                <textPath href="#circ">watch success stories · from matched residents ·</textPath>
              </text>
            </svg>
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute right-0 top-6 hidden lg:flex items-center -space-x-3"
          >
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F5B027]" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1E5F8A]" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-900 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center font-extrabold tracking-tight text-[clamp(2.25rem,6.2vw,5rem)] leading-[1.02]"
          >
            Your Guide to U.S.<br />Residency Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 text-center text-neutral-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Comprehensive guides, expert advice, and resources to help you achieve your residency dreams.
          </motion.p>

          {/* Email subscribe */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => { e.preventDefault(); }}
            className="mt-7 mx-auto flex items-center gap-2 w-full max-w-md bg-white border border-neutral-300 rounded-full p-1.5 shadow-sm"
          >
            <div className="pl-3 text-neutral-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-sm py-2"
            />
            <button
              type="submit"
              className="rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1E5F8A] transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>

        {/* Cards grid */}
        <div className="relative mt-12">
          <div className="grid grid-cols-5 grid-rows-3 gap-4 md:gap-5 items-end">
            {cards.map((c, i) => {
              const isHeroCard = i === 3;
              // Center card: render with shared layoutId only while still in hero.
              if (isHeroCard) {
                return (
                  <div key={i} className={`${c.className} relative`}>
                    <AnimatePresence>
                      {!inAbout && (
                        <motion.div
                          layoutId={HERO_CARD_LAYOUT_ID}
                          initial={{ opacity: 0, x: c.from.x, y: c.from.y, rotate: c.from.rotate, scale: 0.6 }}
                          animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 + i * 0.08 }}
                          className={`absolute inset-0 ${c.bg} group overflow-hidden rounded-[28px] shadow-lg cursor-pointer`}
                        >
                          <CardInner c={c} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: c.from.x, y: c.from.y, rotate: c.from.rotate, scale: 0.6 }}
                  animate={
                    inAbout
                      ? { opacity: 1, x: [0, -8, 8, -6, 6, 0], y: [0, 4, -4, 3, -3, 0], rotate: [0, -2, 2, -1.5, 1.5, 0], scale: 1 }
                      : { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
                  }
                  transition={
                    inAbout
                      ? { duration: 0.9, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: i * 0.05 }
                      : { type: "spring", stiffness: 70, damping: 14, delay: 0.3 + i * 0.08 }
                  }
                  whileHover={!inAbout ? { y: -8, scale: 1.02 } : undefined}
                  className={`${c.className} ${c.bg} group relative overflow-hidden rounded-[28px] shadow-lg cursor-pointer`}
                >
                  <CardInner c={c} />
                </motion.div>
              );
            })}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inAbout ? 0 : 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex items-center gap-2 rounded-full bg-neutral-900 text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1E5F8A] transition-colors"
          >
            Explore Mentors <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* About Us section */}
        <section id="about" className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pb-10">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Feeling Stuck or<br />
              Overwhelmed on the road to{" "}
              <span className="text-[#F26B1F]">Residency?</span>
            </h2>
            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F26B1F] text-white px-6 py-3 text-sm font-medium shadow-md hover:bg-[#d85a14] transition-colors">
              Let's Find Out
            </button>
            <ul className="mt-7 space-y-3 text-sm text-neutral-700">
              {[
                "You're struggling to navigate ERAS and don't know where to focus.",
                "You feel overwhelmed juggling too many priorities in your application.",
                "You crave a clear, personalized roadmap to match faster and smarter.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center photo — morph target */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5]">
              <AnimatePresence>
                {inAbout && (
                  <motion.div
                    layoutId={HERO_CARD_LAYOUT_ID}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                    className={`absolute inset-0 ${HERO_CARD.bg} group overflow-hidden rounded-[32px] shadow-2xl cursor-pointer`}
                  >
                    <CardInner c={HERO_CARD} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right bullets */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4 space-y-7"
          >
            {[
              { icon: TrendingUp, title: "Growth Stuck", text: "Your application has plateaued and you need fresh strategies to break through the ceiling." },
              { icon: Layers,     title: "Wearing Hats", text: "You're juggling everything alone—Step prep, research, sub-Is—and it's draining your energy fast." },
              { icon: Compass,    title: "Lack Clarity", text: "Without a clear roadmap, every decision feels risky, slow, and emotionally exhausting to make." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <div className="text-[#F26B1F] mt-0.5"><Icon className="w-5 h-5" /></div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <p className="mt-1 text-sm text-neutral-600 max-w-xs">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Subscribe section */}
        <section id="subscribe" className="mt-24 md:mt-32 relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#eaf4fb] to-[#fdfcf8] px-6 md:px-10 pt-14 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-extrabold tracking-tight text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-neutral-900">
              Find Your Tribe,<br />Build Your Network.
            </h2>
            <p className="mt-5 text-neutral-600 text-base md:text-lg max-w-xl mx-auto">
              Connect with like-minded future physicians for mentorship, friendships, and residency opportunities.
            </p>

            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 mx-auto flex items-center gap-2 w-full max-w-md bg-white border border-neutral-300 rounded-full p-1.5 shadow-md"
            >
              <div className="pl-3 text-neutral-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-sm py-2"
              />
              <button
                type="submit"
                className="rounded-full bg-neutral-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1AA7EC] transition-colors inline-flex items-center gap-1.5"
              >
                Join for Free <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-8 md:mt-10 flex justify-center items-end"
          >
            <img
              src={subscribeStudents.url}
              alt="Medical students celebrating together"
              className="w-full max-w-5xl h-auto object-contain block"
            />
          </motion.div>
        </section>


        {/* Footer bar */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 pb-4"
        >
          <div>
            <div className="text-3xl text-neutral-400 leading-none">"</div>
            <p className="mt-2 text-sm text-neutral-700 max-w-sm">
              Match Mentor's guidance was a game-changer in my residency journey. The mentorship and resources helped me match into my dream program!
            </p>
            <div className="mt-3 inline-block">
              <span className="italic text-lg font-serif relative">
                Dr. Rafi H.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F5B027]/60 -z-10 rounded" />
              </span>
            </div>
          </div>
          <div className="md:justify-self-end flex items-start gap-6">
            <div className="text-5xl font-semibold tracking-tight">01</div>
            <div className="flex-1 max-w-xs">
              <div className="text-sm text-neutral-500">Mentorship</div>
              <div className="mt-6 text-lg font-semibold leading-snug">Match With Top Residency Mentors Today</div>
            </div>
            <button className="mt-1 w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CardInner({ c }: { c: Card }) {
  return (
    <>
      <video
        src={VIDEO}
        poster={c.img}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-14 h-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xl opacity-90 group-hover:opacity-100 transition"
        >
          <Play className="w-5 h-5 text-neutral-900 fill-neutral-900 ml-0.5" />
        </motion.div>
      </div>
      <div className="absolute left-3 right-3 bottom-3 text-white">
        <div className="text-xs uppercase tracking-wider opacity-80">Testimony</div>
        <div className="text-sm font-semibold">{c.name}</div>
      </div>
    </>
  );
}
