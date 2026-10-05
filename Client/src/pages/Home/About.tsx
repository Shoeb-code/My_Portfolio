import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Download, 
  MapPin, 
  Building2, 
  Award, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  ArrowUpRight,
  Cpu,
  CheckCircle2
} from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Jamia Millia Islamia",
      duration: "2022 – 2026",
      location: "New Delhi, India",
      highlight: "Specializing in Software Engineering & Distributed Systems",
      coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      degree: "Senior Secondary Education (Class XII)",
      institution: "Hamdard Public School",
      duration: "2019 – 2021",
      location: "New Delhi, India",
      highlight: "Distinction in Science & Mathematics",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  ];

  const pillars = [
    {
      number: "01",
      icon: <Layers className="text-[#2997FF]" size={18} />,
      title: "System Scalability",
      desc: "High-throughput REST APIs and optimized database query indexing.",
      tag: "MERN Stack",
      accent: "#2997FF"
    },
    {
      number: "02",
      icon: <Zap className="text-[#BF5AF2]" size={18} />,
      title: "Fluid UI Engineering",
      desc: "60fps micro-animations and strict TypeScript type contracts.",
      tag: "React 19 & Framer",
      accent: "#BF5AF2"
    },
    {
      number: "03",
      icon: <Award className="text-[#FFD60A]" size={18} />,
      title: "Algorithmic Rigor",
      desc: "Optimized time and space complexity with advanced graph theory.",
      tag: "520+ DSA Solved",
      accent: "#FFD60A"
    },
    {
      number: "04",
      icon: <ShieldCheck className="text-[#30D158]" size={18} />,
      title: "Security & Standards",
      desc: "Cryptographic token auth, modular patterns, and clean code hygiene.",
      tag: "JWT & Strict Types",
      accent: "#30D158"
    }
  ];

  const techDomains = [
    {
      title: "Frontend Architecture",
      icon: <Code2 size={16} className="text-[#2997FF]" />,
      skills: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Redux Toolkit"]
    },
    {
      title: "Backend & Systems",
      icon: <Cpu size={16} className="text-[#30D158]" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Security", "System Design", "Microservices"]
    },
    {
      title: "Databases & DevOps",
      icon: <Terminal size={16} className="text-[#BF5AF2]" />,
      skills: ["MongoDB", "PostgreSQL", "Git / GitHub", "Vite", "Docker", "Postman"]
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#000000] overflow-hidden">
      {/* Apple-style subtle ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[400px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Swiss Style Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] max-w-2xl text-[15px] sm:text-lg leading-relaxed"
          >
            A synthesis of algorithmic rigor, full-stack systems engineering, and deliberate interface design.
          </motion.p>
        </div>

        {/* Compact Bento Grid Top Tier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Dossier Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between bg-[#0A0A0C]/90 rounded-3xl p-7 sm:p-9 border border-white/[0.08] shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6"
          >
            <div className="space-y-6">
              
              {/* Profile Meta Header */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#2997FF]">
                  Profile • Shoeb Khan
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#86868B] font-mono">
                  <MapPin size={13} className="text-[#2997FF]" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Title & Core narrative */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5F5F7] tracking-tight leading-snug">
                  Engineering Scalable Systems with Structural Precision.
                </h3>
                
                <p className="text-sm sm:text-[15px] text-[#A1A1A6] leading-relaxed">
                  Full-Stack Software Developer focused on bridging high-throughput backend infrastructure with intuitive, kinetic client-side interfaces.
                </p>

                <p className="text-xs sm:text-sm font-mono text-[#86868B] leading-relaxed">
                  Specializing in secure multi-tier REST APIs, optimized MongoDB schemas, and 60 FPS component architectures engineered for scale.
                </p>
              </div>

              {/* Compact Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#FFD60A]">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F5F5F7]">520+ Problems</h4>
                    <p className="text-xs text-[#86868B]">LeetCode &amp; Algorithmic DSA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#BF5AF2]">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F5F5F7]">B.Tech Engineering</h4>
                    <p className="text-xs text-[#86868B]">Jamia Millia Islamia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <a
                href="/resume.pdf"
                download="Shoeb_Khan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#E5E5EA] transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#86868B] hover:text-white transition-colors cursor-pointer"
              >
                <span>Direct Inquiries</span>
                <ArrowUpRight size={14} className="text-[#2997FF]" />
              </a>
            </div>
          </motion.div>

          {/* Academic Pedigree Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#0A0A0C]/90 rounded-3xl p-7 sm:p-9 border border-white/[0.08] shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-5"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#BF5AF2]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">Academic Pedigree</h3>
                  <p className="text-xs text-[#86868B] font-mono">Formal Engineering Education</p>
                </div>
              </div>

              {/* Education list */}
              <div className="space-y-3.5">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-[#F5F5F7]">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-[#86868B]">
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#2997FF] font-medium">
                      <Building2 size={13} />
                      <span>{edu.institution}</span>
                      <span className="text-gray-700">•</span>
                      <span className="text-[#86868B]">{edu.location}</span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                      {edu.highlight}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-[#86868B]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LeetCode quick counter */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-sm">
              <span className="text-[#86868B] font-mono text-xs">DSA Rigor</span>
              <span className="font-mono font-semibold text-xs text-[#FFD60A] bg-[#FFD60A]/10 px-3 py-1 rounded-full border border-[#FFD60A]/20">
                520+ Solved
              </span>
            </div>
          </motion.div>

        </div>

        {/* Redesigned 4 Architectural Pillars: Compact & Concise */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF]" />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F7] font-semibold">
                Core Engineering Philosophy
              </h3>
            </div>
            <span className="text-xs font-mono text-[#86868B]">
              4 Architectural Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 rounded-3xl bg-[#0A0A0C]/90 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg backdrop-blur-xl"
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shadow-inner">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#86868B] tracking-wider">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Short Tagline */}
                  <h4 className="text-base font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Pill Chip */}
                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#A1A1A6]">
                    {pillar.tag}
                  </span>
                  <CheckCircle2 size={13} style={{ color: pillar.accent }} className="opacity-80" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Technical DNA Matrix */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#0A0A0C]/80 border border-white/[0.06] shadow-xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-sm space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2997FF]">
                Core Competencies
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7]">
                Technical Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Optimized modern tooling and architectures for building scalable enterprise software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 flex-1">
              {techDomains.map((domain, sIdx) => (
                <div key={sIdx} className="space-y-2.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    {domain.icon}
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold">
                      {domain.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.skills.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-[#86868B]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
