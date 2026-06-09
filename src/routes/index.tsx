import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Play, ArrowUpRight, ArrowRight, Plus, Mail } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/match-mentor-logo.png.asset.json";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import card7 from "@/assets/card-7.jpg";

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
};

const cards: Card[] = [
  { img: card1, name: "Dr. Sarah K.", bg: "bg-[#1E5F8A]", className: "col-start-1 row-start-1 row-span-2 aspect-[3/4]", from: { x: -400, y: -200, rotate: -25 } },
  { img: card6, name: "Dr. Maria L.", bg: "bg-[#F5B027]", className: "col-start-1 row-start-3 aspect-[4/3]", from: { x: -500, y: 300, rotate: 20 } },
  { img: card2, name: "Dr. Priya N.", bg: "bg-[#1F8A4C]", className: "col-start-2 row-start-1 row-span-3 aspect-[3/5]", from: { x: -200, y: 400, rotate: -10 } },
  { img: card3, name: "Dr. James M.", bg: "bg-[#0E4F73]", className: "col-start-3 row-start-1 row-span-2 aspect-[3/4]", from: { x: 0, y: -400, rotate: 15 } },
  { img: card4, name: "Dr. Emily R.", bg: "bg-[#B7DDEA]", className: "col-start-4 row-start-1 row-span-3 aspect-[3/5]", from: { x: 200, y: -400, rotate: -15 } },
  { img: card5, name: "Dr. Alex T.", bg: "bg-[#7FC4A0]", className: "col-start-5 row-start-1 row-span-2 aspect-[3/4]", from: { x: 500, y: -300, rotate: 25 } },
  { img: card7, name: "Dr. David S.", bg: "bg-[#1F5E3A]", className: "col-start-5 row-start-3 aspect-[4/3]", from: { x: 500, y: 300, rotate: -20 } },
];

function Index() {
  const [email, setEmail] = useState("");

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
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: c.from.x, y: c.from.y, rotate: c.from.rotate, scale: 0.6 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${c.className} ${c.bg} group relative overflow-hidden rounded-[28px] shadow-lg cursor-pointer`}
              >
                <video
                  src={VIDEO}
                  poster={c.img}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity" />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xl opacity-90 group-hover:opacity-100 transition"
                  >
                    <Play className="w-5 h-5 text-neutral-900 fill-neutral-900 ml-0.5" />
                  </motion.div>
                </div>

                {/* Name label */}
                <div className="absolute left-3 right-3 bottom-3 text-white">
                  <div className="text-xs uppercase tracking-wider opacity-80">Testimony</div>
                  <div className="text-sm font-semibold">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex items-center gap-2 rounded-full bg-neutral-900 text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1E5F8A] transition-colors"
          >
            Explore Mentors <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
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
