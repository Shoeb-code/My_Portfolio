import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Briefcase,
} from "lucide-react";

export default function Hero({ scrollToContact }) {
  return (
    <section className="relative top-19 min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* ===== Luxury Background ===== */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 left-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -120, 0], y: [0, 120, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#6366f115,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f715,transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ===== Main Layout ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* ===== Left Content ===== */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-indigo-400" />
              <span className="text-sm text-gray-300">
                Available for freelance & full-time opportunity

              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                scalable digital
              </span>
              <br />
              products with
              <br />
              premium experiences.
            </motion.h1>

            {/* Richer Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-8 max-w-2xl mb-10"
            >
              Hi, I’m{" "}
              <span className="text-white font-semibold">
                Shoeb Khan
              </span>{" "}
              — a full-stack software developer focused on crafting
              high-performance web and mobile applications using
              React, React Native, Node.js, and modern backend systems.
              <br />
              <br />
              I specialize in transforming ideas into scalable,
              elegant, and production-ready products.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r
                           from-indigo-500 via-purple-500 to-pink-500
                           hover:scale-105 shadow-2xl
                           transition duration-300 font-medium
                           inline-flex items-center gap-2"
              >
                Let’s Work Together
                <ArrowRight size={18} />
              </button>

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl border border-white/10
                           bg-white/5 hover:bg-white/10
                           backdrop-blur-md transition"
              >
                Explore Projects
              </a>
            </motion.div>

            {/* Social */}
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/Shoeb-code">
                <Github size={20} />
              </SocialIcon>

              <SocialIcon href="https://www.linkedin.com/in/shoeb-khan-480b58259/">
                <Linkedin size={20} />
              </SocialIcon>

             
            </div>
          </div>

          {/* ===== Right Premium Info Panel ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <InfoCard
                  icon={<Code2 className="text-indigo-400" />}
                  title="Tech Focus"
                  text="Full-stack engineering, mobile development, scalable backend systems."
                />

                <InfoCard
                  icon={<Briefcase className="text-purple-400" />}
                  title="Current Role"
                  text="Software Developer Intern building production-grade applications."
                />

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <StatBox number="10+" label="Projects" />
                  <StatBox number="450+" label="LeetCode" />
                  <StatBox number="2+" label="Internships" />
                  <StatBox number="100%" label="Commitment" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Scroll ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      className="p-3 rounded-2xl border border-white/10
                 bg-white/5 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 leading-7">{text}</p>
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}