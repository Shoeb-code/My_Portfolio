import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Download, 
  Code2, 
  Cpu, 
  Layers, 
  Server, 
  Braces, 
  Award
} from "lucide-react";

interface HeroProps {
  scrollToContact: () => void;
}

// Typing animation component
function TypingAnimation() {
  const words = [
    "Full-Stack Software Engineer",
    "MERN & TypeScript Specialist",
    "High-Concurrency Node Backend",
    "Kinetic React & Mobile Architect"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, reverse ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-[#F5F5F7] font-mono">
      {text}
      <span className="text-[#2997FF] font-bold ml-0.5">_</span>
    </span>
  );
}

export default function Hero({ scrollToContact }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect coordinates
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightXSpring = useSpring(spotlightX, { stiffness: 120, damping: 25 });
  const spotlightYSpring = useSpring(spotlightY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        spotlightX.set(e.clientX - rect.left);
        spotlightY.set(e.clientY - rect.top);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [spotlightX, spotlightY]);

  const metrics = [
    { label: "520+ Solved", desc: "LeetCode DSA", icon: <Award size={18} className="text-[#FFD60A]" /> },
    { label: "MERN + TS", desc: "Full-Stack Core", icon: <Layers size={18} className="text-[#2997FF]" /> },
    { label: "React 19", desc: "Kinetic UI/UX", icon: <Cpu size={18} className="text-[#64D2FF]" /> },
    { label: "Node.js", desc: "High-Throughput", icon: <Server size={18} className="text-[#30D158]" /> },
    { label: "REST APIs", desc: "Stateless Security", icon: <Code2 size={18} className="text-[#BF5AF2]" /> },
    { label: "B.Tech Engineering", desc: "Jamia Millia Islamia", icon: <Braces size={18} className="text-[#F5F5F7]" /> }
  ];

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-[90vh] overflow-hidden bg-[#000000] text-[#F5F5F7] flex flex-col justify-center pt-24 pb-20 px-6 sm:px-10 lg:px-16"
    >
      {/* Apple Subtle Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div 
          style={{
            background: `radial-gradient(550px circle at ${spotlightXSpring.get()}px ${spotlightYSpring.get()}px, rgba(41, 151, 255, 0.05), transparent 80%)`
          }}
          className="absolute inset-0 z-10"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center py-6">
          
          {/* Left Column: Swiss Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
            
            {/* Monospace Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#86868B] text-xs sm:text-sm font-mono tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#30D158]" />
              Full-Stack Software Engineer
            </motion.div>

            {/* Apple Keynote Style Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-[#F5F5F7] leading-[1.05]"
            >
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D1D1D6] to-[#86868B]">
                products that scale.
              </span>
            </motion.h1>

            {/* Dynamic Role Subhead */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-lg sm:text-2xl text-[#86868B] font-mono"
            >
              Specializing as <TypingAnimation />
            </motion.div>

            {/* Bio Description (16px/17px) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#86868B] leading-relaxed max-w-2xl"
            >
              Hi, I’m <strong className="text-[#F5F5F7] font-semibold">Shoeb Khan</strong>. 
              I engineer high-performance web applications, robust backends, and kinetic user interfaces. I bridge complex architectural logic with deliberate, refined interface design.
            </motion.p>

            {/* Apple Style CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-full bg-[#F5F5F7] text-black font-semibold text-sm sm:text-base hover:bg-[#E5E5EA] active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="/resume.pdf"
                download="Shoeb_Khan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-[#F5F5F7] text-sm sm:text-base font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Curriculum Vitae</span>
                <Download size={15} className="text-[#86868B]" />
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2.5 pl-2">
                <a
                  href="https://github.com/Shoeb-code"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-[#86868B] hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shoeb-khan-480b58259/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-[#86868B] hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Swiss Architectural Monolith Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-md rounded-3xl bg-[#0A0A0C]/90 border border-white/[0.08] p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-[#86868B]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#30D158]" />
                  <span>CORE SPECS</span>
                </div>
                <span>Node.js • React • TypeScript</span>
              </div>

              {/* Center Monogram Graphic */}
              <div className="py-8 flex flex-col items-center justify-center relative">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 flex flex-col items-center justify-center relative shadow-inner">
                  <span className="text-5xl font-extrabold tracking-tight text-[#F5F5F7] select-none">
                    SK
                  </span>
                  <span className="text-[10px] font-mono text-[#86868B] tracking-[0.2em] mt-1.5">
                    ENGINEER
                  </span>
                </div>
              </div>

              {/* Stack Telemetry Chips */}
              <div className="space-y-2.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-sm">
                  <span className="text-[#86868B] font-mono text-xs">Primary Domain</span>
                  <span className="font-semibold text-[#F5F5F7]">Full-Stack Systems</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-sm">
                  <span className="text-[#86868B] font-mono text-xs">Algorithmic Solves</span>
                  <span className="font-mono text-[#FFD60A] font-semibold">520+ Problems</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-sm">
                  <span className="text-[#86868B] font-mono text-xs">University</span>
                  <span className="font-semibold text-[#F5F5F7]">Jamia Millia Islamia</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Metrics Bar (Compact Swiss Grid) */}
        <div className="pt-14 mt-10 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="p-4 rounded-2xl bg-[#0A0A0C]/80 border border-white/[0.06] hover:border-white/15 transition-all duration-200 flex flex-col items-start cursor-default"
              >
                <div className="mb-2.5 p-2 rounded-xl bg-white/[0.03]">
                  {metric.icon}
                </div>
                <h4 className="text-sm sm:text-[15px] font-bold text-[#F5F5F7] tracking-tight">
                  {metric.label}
                </h4>
                <p className="text-xs text-[#86868B] font-mono mt-0.5">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
