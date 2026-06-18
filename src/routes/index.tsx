import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Play, ArrowUpRight, ArrowRight, Plus, Mail, TrendingUp, Layers, Compass } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/match-mentor-logo.png";
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
import subscribeStudents from "@/assets/subscribe-students.png";
import footerBg from "@/assets/footer-bg.png.asset.json";
import { Download, Sparkles } from "lucide-react";
import matchResourcesCollage from "@/assets/match-resources-collage.jpg";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.45 : 400;
    setInAbout(y > threshold);
  });

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

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
            <img src={logo} alt="Match Mentor" className="h-10 w-auto" />
            <span className="text-xl font-extrabold tracking-tight">Match Mentor</span>
          </div>
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-neutral-800">
            {[
              { label: "Home", to: "/" },
              { label: "Guides", to: "/guides" },
              { label: "Mentors", to: "/mentors" },
              { label: "Resources", to: "/resources" },
              { label: "Blogs", to: "/blogs" },
              { label: "About", to: "/about" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-[#1E5F8A] transition-colors">{l.label}</Link>
              </li>
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
            <img
              src={matched1}
              alt="Mentor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={matched2}
              alt="Mentor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src={matched3}
              alt="Mentor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
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
                          <CardInner c={c} onPlayClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")} />
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
                    <CardInner c={c} onPlayClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")} />
                  </motion.div>
              );
            })}
          </div>

          <Link
            to="/mentors"
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex items-center gap-2 rounded-full bg-neutral-900 text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1E5F8A] transition-colors"
          >
            Explore Mentors <ArrowUpRight className="w-4 h-4" />
          </Link>
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
              <span className="text-[#5a4af4]">Residency?</span>
            </h2>
            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#5a4af4] text-white px-6 py-3 text-sm font-medium shadow-md hover:bg-[#4a3ad4] transition-colors">
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
                    <CardInner c={HERO_CARD} onPlayClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")} />
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
                <div className="text-[#5a4af4] mt-0.5"><Icon className="w-5 h-5" /></div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <p className="mt-1 text-sm text-neutral-600 max-w-xs">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Match Resources section */}
        <section id="match-resources" className="mt-24 md:mt-32 relative overflow-hidden rounded-[32px] bg-[#5a4af4] px-10 md:px-20 py-12 md:py-16">
          {/* decorative blobs */}
          <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#a78bfa]/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#c084fc]/25 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: image / info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                <Sparkles className="size-3.5" /> Free Resource Pack
              </span>
              <h2 className="mt-5 font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                All-In-One <span className="text-[#0A0A0A]">MATCH®</span> Resources
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg max-w-md">
                ERAS Application Template, 20+ Personal Statement Examples, Interview Prep, LOR, MSPE Resources & More!
              </p>
              <p className="mt-2 text-[#0A0A0A font-semibold">
                Drafted by Physician MATCH Experts — ALL FOR FREE!
              </p>

              <div className="relative mt-8 max-w-md">
                <div aria-hidden className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-white/30 to-[#c084fc]/40 blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl rotate-[-2deg]">
                  <img
                    src={matchResourcesCollage}
                    alt="Match 2027 Resources — students who matched"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-auto block"
                  />
                </div>
                <div aria-hidden className="absolute -bottom-3 -right-3 rounded-full bg-white text-[#5a4af4] font-extrabold text-xs px-3 py-2 shadow-lg rotate-6">
                  100% FREE
                </div>
              </div>
            </motion.div>

            {/* Right: form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl bg-black p-8 md:p-10 shadow-2xl h-full"
            >
              <h3 className="text-white font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                Delivered Right To Your Inbox ✉️
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-1.5">First Name</label>
                    <input type="text" className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#5a4af4]" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-1.5">Last Name</label>
                    <input type="text" className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#5a4af4]" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/90 mb-1.5">Email Address</label>
                  <input type="email" className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3.5 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#5a4af4]" placeholder="you@example.com" />
                </div>

                <div>
                  <p className="text-xs font-bold text-white/90 mb-3">I am applying to the Match:</p>
                  <div className="space-y-2.5">
                    {[
                      "This year (Match 2027)",
                      "In 2-3 years (Match 2028-2029)",
                      "In 4-6 years",
                      "Already Matched",
                    ].map((label, i) => (
                      <label key={label} className="flex items-center gap-2.5 text-sm text-white/80 cursor-pointer">
                        <input type="radio" name="match-timing" defaultChecked={i === 0} className="accent-[#5a4af4]" />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#5a4af4] hover:bg-[#4a3ad4] transition-colors text-white font-bold py-4 shadow-lg"
                >
                  <Download className="size-4" />
                  Send me MATCH 2027 Resources!
                </button>
              </form>
            </motion.div>
          </div>
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
              src={subscribeStudents}
              alt="Medical students celebrating together"
              className="w-full max-w-5xl h-auto object-contain block"
            />
          </motion.div>
        </section>

        {/* Blogs section */}
        <section id="blogs" className="mt-24 md:mt-32 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.18em] text-[#1E5F8A] uppercase">
              From the Blog
            </span>
            <h2 className="mt-3 font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Insights & Resources<br />for Your Match Journey
            </h2>
            <p className="mt-4 text-neutral-600 text-base md:text-lg">
              Expert guides, swipe-worthy templates, and real stories from matched residents.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "ERAS Guide", title: "USMLE to ERAS Migration Guide", desc: "Our bullet-proof step-by-step checklist to transition from Step exams to ERAS without missing a beat.", cover: matched1, bg: "bg-[#eef7ec]" },
              { tag: "Swipe File", title: "Top 200 Personal Statements", desc: "You need some inspiration for your next personal statement? These are the PS that matched at top programs.", cover: matched2, bg: "bg-[#eaf2fb]" },
              { tag: "Template",  title: "Residency CV Examples + Templates", desc: "25+ Top residency CV examples and 8 ready-to-use templates to design your own application today.", cover: matched3, bg: "bg-[#f4eef9]" },
              { tag: "LinkedIn",  title: "Physician Personal Branding Playbook", desc: "Your ultimate LinkedIn personal branding guide including a free Notion content calendar.", cover: matched4, bg: "bg-[#eef4fb]" },
              { featured: true, title: "Join the residency match newsletter", desc: "Every month, we send you the best free match templates, tools, and resources. 10,000+ future physicians are already in. Are you?" },
              { tag: "Guide",     title: "The Ultimate Guide to Mentor Collaboration", desc: "With this ultimate collaboration guide for residency mentorship, you can learn how to make the most of every call.", cover: matched5, bg: "bg-[#f0eef9]" },
            ].map((b: any, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`${b.featured ? "bg-[#5a4af4] text-white" : "bg-white border border-neutral-200"} rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow cursor-pointer`}
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
                      <span className="self-start text-[11px] font-medium tracking-wide text-[#5a4af4] border border-[#5a4af4]/40 rounded-full px-3 py-0.5">{b.tag}</span>
                      <h3 className="mt-4 text-lg font-bold leading-snug text-neutral-900">{b.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
                      <Link 
                        to={`/blog/${b.tag.toLowerCase().replace(/\s+/g, '-')}` as any}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5a4af4] hover:text-[#4a3ad4] transition-colors"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </div>
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

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative mt-24 md:mt-32 mx-4 md:mx-8 mb-4 md:mb-8 text-white bg-[#5a4af4] overflow-hidden rounded-3xl md:rounded-[2.5rem]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 pt-20">
          {/* Newsletter hero */}
          <div className="text-center">
            <h2 className="font-extrabold tracking-tight text-white text-5xl md:text-7xl lg:text-8xl">
              NEWSLETTER
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto text-base md:text-lg">
              Match Mentor also has a newsletter! News, tips, and mentorship insights delivered to your inbox every week.
            </p>
            <p className="mt-8 font-semibold text-white">Sign up for free!</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="E-mail*"
                className="flex-1 w-full px-5 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#c084fc] to-[#a855f7] text-white font-bold tracking-wide hover:opacity-95 transition whitespace-nowrap"
              >
                SUBSCRIBE ME
              </button>
            </form>
            <p className="mt-3 text-xs text-white/70">By signing up, you agree to our privacy policy.</p>
          </div>
        </div>

        {/* Wave divider - full footer width */}
        <div className="my-14">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 md:h-16" aria-hidden="true">
            <path
              d="M0,40 C150,80 300,0 450,30 C600,60 750,20 900,40 C1050,60 1150,30 1200,40 L1200,80 L0,80 Z"
              fill="rgba(255,255,255,0.12)"
            />
            <path
              d="M0,50 C150,90 300,10 450,40 C600,70 750,30 900,50 C1050,70 1150,40 1200,50"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 pb-10">
          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-white">SERVICES</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li><a href="#" className="hover:text-white">Mentorship</a></li>
                <li><a href="#" className="hover:text-white">Coaching</a></li>
                <li><a href="#" className="hover:text-white">Workshops</a></li>
                <li><a href="#" className="hover:text-white">Match Mentor Club</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest text-white">SOLUTIONS</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li><a href="#" className="hover:text-white">For students</a></li>
                <li><a href="#" className="hover:text-white">For mentors</a></li>
                <li><a href="#" className="hover:text-white">For schools</a></li>
                <li><a href="#" className="hover:text-white">For companies</a></li>
                <li><a href="#" className="hover:text-white">Group sessions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest text-white">MATCH MENTOR</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li><a href="#" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Join us</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
                <li><a href="#" className="hover:text-white">Site Map</a></li>
                <li><a href="#" className="hover:text-white">All our articles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-widest text-white">JOIN THE CLUB</h4>
              <p className="mt-5 text-sm text-white/85">
                Receive exclusive mentorship tips and career advice from Match Mentor. It's free!
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#c084fc] to-[#a855f7] text-white font-bold text-sm">
                  SUBMIT
                </button>
              </form>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="hover:opacity-80">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Giant brand text */}
          <div className="mt-16 text-center">
            <h1 className="font-extrabold tracking-tighter text-white leading-none text-[18vw] md:text-[16vw]">
              Match Mentor
            </h1>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row md:justify-between gap-4 text-xs text-white/75">
            <div>
              <p>© {new Date().getFullYear()} Match Mentor. All rights reserved.</p>
              <p className="mt-1">hello@matchmentor.com · +1 800 098 8300</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Legal notices</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

function CardInner({ c, onPlayClick }: { c: Card; onPlayClick?: () => void }) {
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
          onClick={onPlayClick}
          className="w-14 h-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xl opacity-90 group-hover:opacity-100 transition cursor-pointer"
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
