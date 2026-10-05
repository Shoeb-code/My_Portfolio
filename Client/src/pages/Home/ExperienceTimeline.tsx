import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2,
  Briefcase,
  Database
} from "lucide-react";

interface KeyMetric {
  label: string;
  value: string;
  icon: typeof Zap;
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: "Current" | "Completed";
  accentColor: string;
  accentBorder: string;
  summary: string;
  metrics: KeyMetric[];
  deliverables: {
    title: string;
    description: string;
  }[];
  skills: string[];
}

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Vertical dynamic scroll progress for the center spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences: ExperienceItem[] = [
    {
      id: "01",
      role: "Software Developer Intern",
      company: "Jetquins",
      location: "Remote",
      period: "Jul 2026 – Oct 2026",
      status: "Completed",
      accentColor: "#2997FF",
      accentBorder: "border-[#2997FF]",
      summary: "Engineered core modules for BrillSign, a decentralized e-signature SaaS platform, spanning secure APIs, PostgreSQL schemas, and responsive React workflows.",
      metrics: [
        { label: "Product", value: "BrillSign", icon: Cpu },
        { label: "Architecture", value: "React + Node", icon: Code2 },
        { label: "Database", value: "PostgreSQL", icon: Database }
      ],
      deliverables: [
        {
          title: "BrillSign SaaS Platform",
          description: "Engineered core e-signature modules supporting multi-party document workflows, signers, and reviewer stages."
        },
        {
          title: "Secure API & Authentication",
          description: "Architected REST endpoints with JWT role-based access control for document signing and verification."
        },
        {
          title: "Database & ORM Architecture",
          description: "Designed relational PostgreSQL models with Prisma ORM for high-concurrency document operations."
        },
        {
          title: "Signing & Review Workflow",
          description: "Built automated document status state machines, audit trails, and multi-signer invitation pipelines."
        },
        {
          title: "Frontend Architecture",
          description: "Developed modular, high-performance React.js dashboards with strict design system adherence."
        },
        {
          title: "System Performance",
          description: "Optimized query throughput and component re-renders to deliver fluid 60fps user interactions."
        }
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
        "JWT Authentication",
        "JavaScript",
        "Git",
        "SaaS Architecture",
        "E-Signature Workflows"
      ]
    },
    {
      id: "02",
      role: "Software Developer Intern",
      company: "onNextWeb",
      location: "Remote",
      period: "Dec 2025 – Apr 2026",
      status: "Completed",
      accentColor: "#30D158",
      accentBorder: "border-[#30D158]",
      summary: "Engineered scalable MERN backend services, JWT-secured RESTful endpoints, and optimized MongoDB query aggregations for production traffic.",
      metrics: [
        { label: "API Latency", value: "35% Faster", icon: Zap },
        { label: "Architecture", value: "MERN Stack", icon: Cpu },
        { label: "Auth Guard", value: "JWT Verified", icon: ShieldCheck }
      ],
      deliverables: [
        {
          title: "Production Backend Systems",
          description: "Engineered high-throughput Express.js services handling multi-tier business workflows with sub-150ms latency."
        },
        {
          title: "API Security & RBAC",
          description: "Architected secure RESTful APIs with JWT authentication, rate limiting, and strict input validation."
        },
        {
          title: "Database Query Optimization",
          description: "Refactored MongoDB aggregation pipelines and compound indexing to eliminate execution bottlenecks."
        }
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "System Design", "Aggregation Pipelines"]
    },
    {
      id: "03",
      role: "Frontend Engineer Intern",
      company: "CodeFast Platform",
      location: "New Delhi, India",
      period: "Mar 2025 – Jun 2025",
      status: "Completed",
      accentColor: "#BF5AF2",
      accentBorder: "border-[#BF5AF2]",
      summary: "Engineered type-safe design systems, client state architecture, and interactive web experiences with 60fps animations.",
      metrics: [
        { label: "UX Engagement", value: "+40% Growth", icon: TrendingUp },
        { label: "Type Safety", value: "100% Strict", icon: ShieldCheck },
        { label: "Design Parity", value: "Multi-Device", icon: Code2 }
      ],
      deliverables: [
        {
          title: "Type-Safe Component System",
          description: "Constructed an atomic React + TypeScript UI library cutting feature development cycles by 30%."
        },
        {
          title: "Kinetic Micro-Interactions",
          description: "Crafted 60fps hardware-accelerated Framer Motion animations to elevate user engagement."
        },
        {
          title: "Core Web Vitals Optimization",
          description: "Tuned client-side rendering pathways for instant First Contentful Paint across all viewports."
        }
      ],
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX Architecture", "State Management", "Performance"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden"
    >
      {/* Apple Pro Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-b from-[#2997FF]/10 via-[#BF5AF2]/5 to-transparent blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
      </div>

      {/* Expanded Full Width (max-w-7xl) for Spacious Premium Cards */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Work Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] text-[15px] sm:text-lg leading-relaxed"
          >
            Demonstrated engineering expertise in full-stack architecture, API security, and high-performance client systems.
          </motion.p>
        </div>

        {/* Alternating Left-Right Timeline */}
        <div className="relative">
          
          {/* Center Vertical Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-white/[0.08] rounded-full">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-[#2997FF] via-[#BF5AF2] to-[#30D158] origin-top rounded-full shadow-[0_0_15px_rgba(41,151,255,0.7)]"
            />
          </div>

          {/* Left Rail for Mobile View */}
          <div className="md:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-white/[0.08] rounded-full">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-[#2997FF] via-[#BF5AF2] to-[#30D158] origin-top rounded-full shadow-[0_0_12px_rgba(41,151,255,0.6)]"
            />
          </div>

          {/* Experience Cards Stack */}
          <div className="space-y-14 sm:space-y-20">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 1; // 0 = Left, 1 = Right on desktop

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: idx * 0.15 }}
                  className="relative flex flex-col md:flex-row items-center w-full"
                >
                  {/* Center Node Pin (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center z-20">
                    <div 
                      className={`w-11 h-11 rounded-full bg-[#0A0A0C] border-2 ${exp.accentBorder} shadow-[0_0_20px_rgba(41,151,255,0.35)] flex items-center justify-center`}
                    >
                      <span className="text-xs font-mono font-bold text-[#F5F5F7]">{exp.id}</span>
                    </div>
                  </div>

                  {/* Mobile Node Pin */}
                  <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-8 h-8 rounded-full bg-[#0A0A0C] border-2 ${exp.accentBorder} flex items-center justify-center shadow-lg`}>
                      <span className="text-[10px] font-mono font-bold text-[#F5F5F7]">{exp.id}</span>
                    </div>
                  </div>

                  {/* Card Shell */}
                  <div 
                    className={`w-full pl-10 md:pl-0 ${
                      isEven 
                        ? "md:w-[calc(50%-48px)] lg:w-[calc(50%-56px)] md:ml-auto" 
                        : "md:w-[calc(50%-48px)] lg:w-[calc(50%-56px)] md:mr-auto"
                    }`}
                  >
                    <div className="bg-[#0A0A0C]/90 border border-white/[0.09] hover:border-white/[0.22] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 group hover:-translate-y-1">
                      
                      {/* Card Header with Company Avatar & Badges */}
                      <div className="pb-6 border-b border-white/[0.08] space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] flex items-center justify-center text-[#2997FF] shadow-inner shrink-0">
                              <Building2 size={20} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-base font-bold text-[#F5F5F7] tracking-tight">{exp.company}</span>
                                <span className="text-white/20">•</span>
                                <span className="flex items-center gap-1 text-xs font-mono text-[#86868B]">
                                  <MapPin size={11} />
                                  {exp.location}
                                </span>
                              </div>
                              <div className="text-xs font-mono text-[#86868B] flex items-center gap-1 mt-0.5">
                                <Briefcase size={11} className="text-[#2997FF]" />
                                Engineering Milestone
                              </div>
                            </div>
                          </div>

                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                            exp.status === "Current"
                              ? "bg-[#2997FF]/10 text-[#2997FF] border-[#2997FF]/30"
                              : "bg-white/[0.03] text-[#86868B] border-white/[0.08]"
                          }`}>
                            {exp.status}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
                            {exp.role}
                          </h3>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#A1A1A6] w-fit shrink-0">
                            <Calendar size={12} className="text-[#86868B]" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="pt-5 text-[#A1A1A6] text-[15px] sm:text-base leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* High-Impact Metric Cards */}
                      <div className="grid grid-cols-3 gap-2.5 pt-5 pb-2">
                        {exp.metrics.map((metric, mIdx) => {
                          const IconComp = metric.icon;
                          return (
                            <div 
                              key={mIdx}
                              className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col items-start gap-1"
                            >
                              <div className="flex items-center gap-1.5 text-[#2997FF]">
                                <IconComp size={13} />
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] truncate">{metric.label}</span>
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#F5F5F7] font-mono">
                                {metric.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Deliverables / Architectural Achievements */}
                      <div className="pt-5 space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#86868B] flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#30D158]" />
                          Key Architectural Deliverables
                        </h4>
                        
                        <div className="space-y-2.5">
                          {exp.deliverables.map((item, dIdx) => (
                            <div 
                              key={dIdx} 
                              className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#A1A1A6] leading-relaxed"
                            >
                              <span className="text-[#2997FF] font-mono text-xs shrink-0 mt-1 font-bold">
                                ❯
                              </span>
                              <p>
                                <strong className="text-[#F5F5F7] font-medium">{item.title}:</strong>{" "}
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stack Badges */}
                      <div className="pt-6 border-t border-white/[0.06] mt-5 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs uppercase font-mono text-[#86868B] mr-1">
                          Stack:
                        </span>
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[#D1D1D6] hover:border-[#2997FF]/50 hover:text-white transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
