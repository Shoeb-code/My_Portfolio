import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Server, 
  Terminal, 
  Braces,
  Award
} from "lucide-react";

interface HeroProps {
  scrollToContact: () => void;
}

// Typing animation component
function TypingAnimation() {
  const words = [
    "MERN Stack Developer",
    "React Native Expert",
    "Node.js Backend Engineer",
    "Freelance Software Developer"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1600);
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
    }, reverse ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-mono bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
      {text}
      <span className="animate-pulse text-purple-400 font-bold ml-0.5">|</span>
    </span>
  );
}

export default function Hero({ scrollToContact }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect coordinates
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightXSpring = useSpring(spotlightX, { stiffness: 150, damping: 25 });
  const spotlightYSpring = useSpring(spotlightY, { stiffness: 150, damping: 25 });

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

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex flex-col justify-center py-24 md:py-32 px-6"
    >
      {/* 1. Animated Gradient Background & Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Spotlight Overlay */}
        <motion.div 
          style={{
            background: `radial-gradient(400px circle at ${spotlightXSpring.get()}px ${spotlightYSpring.get()}px, rgba(59, 130, 246, 0.08), transparent 80%)`
          }}
          className="absolute inset-0 z-10"
        />
        
        {/* Floating blurred neon blobs */}
        <motion.div
          animate={{
            y: [0, 45, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[5%] md:left-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]"
        />
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-[10%] right-[5%] md:right-[15%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"
        />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Text details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4.5 py-1.5 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Sparkles size={11} className="text-blue-400" />
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            Building 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-extrabold">
              scalable digital
            </span>
            products that matter.
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-2xl font-medium text-gray-300 mb-6 min-h-[36px]"
          >
            I am a <TypingAnimation />
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-xl mb-10"
          >
            Hi, I’m <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">Shoeb Khan</span>. 
            I engineer high-performance web applications, robust backends, and premium interfaces. I help startups and direct businesses turn conceptual blueprints into production-grade solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_45px_rgba(139,92,246,0.45)]"
            >
              Hire Me
              <ArrowRight size={18} />
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://github.com/Shoeb-code"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/shoeb-khan-480b58259/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right column: Futuristic Avatar / Profile showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 select-none group"
          >
            {/* Spinning decorative outline rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
            
            {/* Pulsing glow under avatar */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            
            {/* Inner avatar container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10 bg-[#111827] flex items-center justify-center p-3">
              {/* Fallback avatar graphic */}
              <div className="w-full h-full rounded-full bg-[#030712] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                {/* Tech icon graphics floating in avatar background */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <div className="absolute top-8 left-8 text-blue-500"><Code2 size={24} /></div>
                  <div className="absolute bottom-8 right-8 text-purple-500"><Cpu size={24} /></div>
                </div>
                
                {/* Simulated developer visual (Sleek initials or avatar) */}
                <span className="text-7xl font-extrabold bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent select-none">
                  SK
                </span>
                
                {/* Floating particle text style */}
                <div className="absolute bottom-4 text-[10px] tracking-[0.2em] font-mono text-gray-500 font-medium">
                  FULL-STACK
                </div>
              </div>
            </div>
            
            {/* Small floating badges around avatar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 p-2.5 rounded-xl border border-white/10 bg-[#111827]/90 backdrop-blur-md shadow-lg"
            >
              <Braces size={16} className="text-cyan-400" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 p-2.5 rounded-xl border border-white/10 bg-[#111827]/90 backdrop-blur-md shadow-lg"
            >
              <Terminal size={16} className="text-purple-400" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* 2. Interactive Statistics Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-24">
        <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 text-center mb-8">
          Core Metrics &amp; Expertise
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <MetricCard
            icon={<Award className="text-yellow-400" size={20} />}
            title="520+ Solved"
            subtitle="LeetCode Problems"
            delay={0.1}
          />
          <MetricCard
            icon={<Layers className="text-blue-400" size={20} />}
            title="MERN Stack"
            subtitle="React/Express/Node/Mongo"
            delay={0.2}
          />
          <MetricCard
            icon={<Cpu className="text-cyan-400" size={20} />}
            title="React Dev"
            subtitle="Web &amp; Mobile UI/UX"
            delay={0.3}
          />
          <MetricCard
            icon={<Server className="text-purple-400" size={20} />}
            title="Node Backend"
            subtitle="Robust architecture"
            delay={0.4}
          />
          <MetricCard
            icon={<Code2 className="text-pink-400" size={20} />}
            title="REST APIs"
            subtitle="Scalable integrations"
            delay={0.5}
          />
          <MetricCard
            icon={<Braces className="text-indigo-400" size={20} />}
            title="TypeScript"
            subtitle="Type-safe software"
            delay={0.6}
          />
        </div>
      </div>
      
    </section>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

function MetricCard({ icon, title, subtitle, delay }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card rounded-2xl p-5 border border-white/5 hover:border-blue-500/20 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col items-center text-center cursor-default group"
    >
      <div className="mb-3 p-2.5 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.07] transition-colors">
        {icon}
      </div>
      <h4 className="font-bold text-sm tracking-tight text-white mb-1">
        {title}
      </h4>
      <p className="text-[11px] text-gray-500 leading-normal">
        {subtitle}
      </p>
    </motion.div>
  );
}
