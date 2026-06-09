import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Play, ArrowUpRight, ArrowRight, Plus } from "lucide-react";
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
      { title: "TrendZone — Elevate Your Style With Bold Fashion" },
      { name: "description", content: "Discover bold fashion collections at TrendZone. Elevate your style with curated trends." },
    ],
  }),
  component: Index,
});

// Sample looping stock videos (muted, autoplay-friendly)
const VIDEO = "https://cdn.coverr.co/videos/coverr-a-fashion-model-posing-1080p.mp4";

type Card = {
  img: string;
  poster?: string;
  bg: string;
  className: string;
  from: { x: number; y: number; rotate: number };
};

const cards: Card[] = [
  { img: card1, bg: "bg-[#F26B1F]", className: "col-start-1 row-start-1 row-span-2 aspect-[3/4]", from: { x: -400, y: -200, rotate: -25 } },
  { img: card6, bg: "bg-[#F5B027]", className: "col-start-1 row-start-3 aspect-[4/3]", from: { x: -500, y: 300, rotate: 20 } },
  { img: card2, bg: "bg-[#1F8A4C]", className: "col-start-2 row-start-1 row-span-3 aspect-[3/5]", from: { x: -200, y: 400, rotate: -10 } },
  { img: card3, bg: "bg-[#F5B027]", className: "col-start-3 row-start-1 row-span-2 aspect-[3/4]", from: { x: 0, y: -400, rotate: 15 } },
  { img: card4, bg: "bg-[#B7DDEA]", className: "col-start-4 row-start-1 row-span-3 aspect-[3/5]", from: { x: 200, y: -400, rotate: -15 } },
  { img: card5, bg: "bg-[#7FC4A0]", className: "col-start-5 row-start-1 row-span-2 aspect-[3/4]", from: { x: 500, y: -300, rotate: 25 } },
  { img: card7, bg: "bg-[#1F5E3A]", className: "col-start-5 row-start-3 aspect-[4/3]", from: { x: 500, y: 300, rotate: -20 } },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] p-3 md:p-6">
      <div className="mx-auto max-w-[1400px] rounded-2xl bg-[#fdfcf8] px-6 md:px-12 py-6 md:py-8 overflow-hidden">
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="text-2xl font-extrabold tracking-tight">TrendZone<span className="text-[#F26B1F]">.</span></div>
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-neutral-800">
            {["Home", "New Arrival", "Shop", "Contact", "About Us"].map((l) => (
              <li key={l} className="hover:text-[#F26B1F] cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
            <button className="ml-2 rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
              Sign In
            </button>
          </div>
        </motion.nav>

        {/* Heading */}
        <div className="relative mt-10 md:mt-14">
          {/* circular play badge */}
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
                <textPath href="#circ">learn about us · through this video ·</textPath>
              </text>
            </svg>
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </motion.div>

          {/* avatars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute right-0 top-6 hidden lg:flex items-center -space-x-3"
          >
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F5B027]" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#7B5BCF]" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-900 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center font-extrabold tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02]"
          >
            Elevate Your Style With<br />Bold Fashion
          </motion.h1>
        </div>

        {/* Cards grid */}
        <div className="relative mt-10">
          <div className="grid grid-cols-5 grid-rows-3 gap-4 md:gap-5 items-end">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: c.from.x, y: c.from.y, rotate: c.from.rotate, scale: 0.6 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 14,
                  delay: 0.3 + i * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${c.className} ${c.bg} relative overflow-hidden rounded-[28px] shadow-lg`}
              >
                <video
                  src={VIDEO}
                  poster={c.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Explore button overlay */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex items-center gap-2 rounded-full bg-neutral-900 text-white px-7 py-3.5 text-sm font-medium hover:bg-[#F26B1F] transition-colors"
          >
            Explore Collections <ArrowUpRight className="w-4 h-4" />
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
              TrendZone's styles are fresh, bold, and exactly what I needed to upgrade my wardrobe. Loved the quality and vibe!
            </p>
            <div className="mt-3 inline-block">
              <span className="italic text-lg font-serif relative">
                Rafi H.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F5B027]/60 -z-10 rounded" />
              </span>
            </div>
          </div>
          <div className="md:justify-self-end flex items-start gap-6">
            <div className="text-5xl font-semibold tracking-tight">01</div>
            <div className="flex-1 max-w-xs">
              <div className="text-sm text-neutral-500">Lifestyle</div>
              <div className="mt-6 text-lg font-semibold leading-snug">Set Up Your Fashion With The Latest Trends</div>
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
