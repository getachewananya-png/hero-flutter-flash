import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";
import logo from "@/assets/match-mentor-logo.png.asset.json";
import type { ReactNode } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Guides", to: "/guides" },
  { label: "Mentors", to: "/mentors" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
] as const;

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] p-3 md:p-5">
      <div className="mx-auto max-w-[1680px] rounded-2xl bg-[#fdfcf8] px-6 md:px-14 py-6 md:py-8 overflow-hidden">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Match Mentor" className="h-10 w-auto" />
            <span className="text-xl font-extrabold tracking-tight">Match Mentor</span>
          </Link>
          <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-neutral-800">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="hover:text-[#1E5F8A] transition-colors"
                  activeProps={{ className: "text-[#1E5F8A] font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
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

        <header className="relative mt-12 md:mt-16 text-center">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#5a4af4]/10 text-[#5a4af4] px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
            >
              <Plus className="w-3.5 h-3.5" /> {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-extrabold tracking-tight text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.04]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-neutral-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            {description}
          </motion.p>
        </header>

        <main className="mt-14 md:mt-20 pb-20">{children}</main>

        <footer className="mt-10 border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Match Mentor. All rights reserved.</p>
          <div className="flex gap-5">
            {NAV.slice(1).map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-neutral-900">{l.label}</Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
