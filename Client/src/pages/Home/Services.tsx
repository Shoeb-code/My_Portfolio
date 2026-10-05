import { motion } from "framer-motion";
import { 
  Globe, 
  Layers, 
  Cpu, 
  Database,
  ArrowUpRight
} from "lucide-react";

interface ServicePillar {
  number: string;
  title: string;
  tagline: string;
  capabilities: string[];
  icon: typeof Globe;
  accent: string;
}

export default function Services() {
  const pillars: ServicePillar[] = [
    {
      number: "01",
      title: "Full-Stack Web Architecture",
      tagline: "End-to-end production web applications with robust backend foundations and fluid interfaces.",
      capabilities: ["React 19 & Next.js", "Node & Express", "State Hydration"],
      icon: Globe,
      accent: "#2997FF"
    },
    {
      number: "02",
      title: "Performance Frontend & UI",
      tagline: "Ultra-responsive user interfaces tuned for sub-second web vitals and 60fps micro-animations.",
      capabilities: ["TypeScript Strict", "Tailwind UI", "Framer Physics"],
      icon: Layers,
      accent: "#BF5AF2"
    },
    {
      number: "03",
      title: "Secure Backend & REST APIs",
      tagline: "High-throughput API endpoints with enterprise token security, rate-limiting, and middleware guards.",
      capabilities: ["JWT Auth Pipelines", "RBAC Security", "Structured Logging"],
      icon: Cpu,
      accent: "#30D158"
    },
    {
      number: "04",
      title: "Database Engineering & Cache",
      tagline: "Optimized schemas, compound indexing, and aggregation pipelines engineered for zero latency.",
      capabilities: ["MongoDB Pipelines", "PostgreSQL", "Redis Caching"],
      icon: Database,
      accent: "#FF9F0A"
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden">
      {/* Apple Subtle Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-[#2997FF]/10 via-[#BF5AF2]/5 to-transparent blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header: Swiss Minimalist */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Services &amp; Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] text-[15px] sm:text-base leading-relaxed"
          >
            Focused software engineering competencies built for scalable web products and resilient services.
          </motion.p>
        </div>

        {/* 4 Compact Cards Grid (Single-row 4-column on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, i) => {
            const IconComp = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#0A0A0C]/90 rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.2] shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                {/* Header Row: Compact Icon + Number */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#2997FF] group-hover:border-white/20 transition-colors shadow-inner">
                    <IconComp size={20} style={{ color: pillar.accent }} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#86868B] tracking-wider">
                    {pillar.number}
                  </span>
                </div>

                {/* Content: Title + 1-sentence punchy tagline */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-[#A1A1A6] leading-relaxed">
                    {pillar.tagline}
                  </p>
                </div>

                {/* Compact Capability Chips */}
                <div className="pt-3.5 border-t border-white/[0.06] space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pillar.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#C7C7CC] group-hover:border-white/[0.12] transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end text-[#86868B] group-hover:text-white transition-colors pt-1">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
