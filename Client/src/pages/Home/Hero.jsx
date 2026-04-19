import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  Briefcase,
  Code2,
  Laptop2,
  Brain,
} from "lucide-react";

export default function Hero({ scrollToContact }) {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-15%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[10%] h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-sm text-gray-300">
              Full Stack Developer • Freelance • Open to work
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-6xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[1.02]">
            Building
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              scalable digital
            </span>
            products that matter
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400 max-w-4xl mx-auto">
            Hi, I’m <span className="text-white font-medium">Shoeb Khan</span> —
            a full-stack software developer specializing in building
            production-grade applications, AI-powered platforms, and
            premium user experiences.
            <br />
            <br />
            Experienced in <span className="text-white">freelance projects</span>,
            internships, and end-to-end product development across web and mobile.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex justify-center flex-wrap gap-5">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Let’s Work Together
            <ArrowRight size={18} />
          </button>

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
          >
            Explore Projects
          </a>
        </div>

        {/* Premium Metrics Cards */}
        <div className="mt-20 grid md:grid-cols-4 gap-5">
          <PremiumCard
            icon={<Laptop2 className="text-indigo-400" />}
            title="10+ Projects"
            text="Built scalable web, mobile, AI-powered, and freelance products with real-world use cases."
          />

          <PremiumCard
            icon={<Briefcase className="text-purple-400" />}
            title="Freelance Work"
            text="Delivered freelance solutions for real clients, solving business challenges through scalable web applications, dashboards, and user-focused digital products."
          />

          <PremiumCard
            icon={<Code2 className="text-pink-400" />}
            title="Full Stack"
            text="React, Node.js,java, MongoDB,jwt authentication,Express, Javascript ,Firebase"
          />

          <PremiumCard
            icon={<Brain className="text-cyan-400" />}
            title="450+ DSA "
            text="Solved 450+ DSA problems with strong expertise in algorithms, optimization, and logical problem solving."
          />
        </div>

        {/* Social */}
        <div className="mt-12 flex justify-center gap-4">
          <SocialIcon href="https://github.com/Shoeb-code">
            <Github size={20} />
          </SocialIcon>

          <SocialIcon href="https://www.linkedin.com/in/shoeb-khan-480b58259/">
            <Linkedin size={20} />
          </SocialIcon>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      className="p-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:scale-105 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function PremiumCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 leading-7">{text}</p>
    </motion.div>
  );
}