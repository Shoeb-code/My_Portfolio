import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  Zap,
  Workflow,
  ShieldCheck,
  Server,
  Lock,
  Boxes,
  Activity
} from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiPrisma, 
  SiDocker, 
  SiGit, 
  SiPostman, 
  SiVite, 
  SiJsonwebtokens 
} from "react-icons/si";

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  brandColor: string;
  proficiency: number;
  highlight: string;
}

interface SkillLayer {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  accent: string;
  skills: SkillItem[];
}

export default function Skills() {
  // Default to the first layer (01 // Frontend)
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const pipelineRef = useRef<HTMLDivElement>(null);

  // Dynamic scroll-driven progress for the zig-zag segments
  const { scrollYProgress } = useScroll({
    target: pipelineRef,
    offset: ["start 75%", "end 75%"]
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const layers: SkillLayer[] = [
    {
      id: "frontend",
      number: "01",
      title: "Client & Interface Layer",
      tagline: "React Ecosystem & Kinetic UX",
      icon: <Layers size={18} className="text-[#2997FF]" />,
      accent: "#2997FF",
      skills: [
        {
          name: "React 19",
          category: "Framework",
          icon: <SiReact className="text-[#61DAFB]" size={20} />,
          brandColor: "#61DAFB",
          proficiency: 95,
          highlight: "Concurrent Mode, Custom Hooks, Suspense"
        },
        {
          name: "TypeScript",
          category: "Language",
          icon: <SiTypescript className="text-[#3178C6]" size={20} />,
          brandColor: "#3178C6",
          proficiency: 92,
          highlight: "Strict Typing, Generics, Type Contracts"
        },
        {
          name: "Next.js",
          category: "SSR / SSG",
          icon: <SiNextdotjs className="text-white" size={20} />,
          brandColor: "#FFFFFF",
          proficiency: 88,
          highlight: "App Router, Server Components, SEO"
        },
        {
          name: "Tailwind CSS 4",
          category: "Design Engine",
          icon: <SiTailwindcss className="text-[#06B6D4]" size={20} />,
          brandColor: "#06B6D4",
          proficiency: 96,
          highlight: "Modern Utility Tokens, Responsive Design"
        },
        {
          name: "Framer Motion",
          category: "Kinetic UI",
          icon: <SiFramer className="text-[#0055FF]" size={20} />,
          brandColor: "#0055FF",
          proficiency: 90,
          highlight: "Physics-Based Springs, Layout Animations"
        },
        {
          name: "Redux Toolkit",
          category: "State Management",
          icon: <SiRedux className="text-[#764ABC]" size={20} />,
          brandColor: "#764ABC",
          proficiency: 86,
          highlight: "RTK Query, Slices, Normalized State"
        }
      ]
    },
    {
      id: "backend",
      number: "02",
      title: "Runtime & API Layer",
      tagline: "Distributed Systems & REST Architecture",
      icon: <Cpu size={18} className="text-[#30D158]" />,
      accent: "#30D158",
      skills: [
        {
          name: "Node.js",
          category: "V8 Server Runtime",
          icon: <SiNodedotjs className="text-[#5FA04E]" size={20} />,
          brandColor: "#5FA04E",
          proficiency: 94,
          highlight: "Asynchronous I/O, Event Loop, Streams"
        },
        {
          name: "Express.js",
          category: "Web Framework",
          icon: <SiExpress className="text-gray-200" size={20} />,
          brandColor: "#EEEEEE",
          proficiency: 95,
          highlight: "Middleware Design, REST API Endpoints"
        },
        {
          name: "JWT Auth",
          category: "Security & Tokens",
          icon: <SiJsonwebtokens className="text-[#D63AFF]" size={20} />,
          brandColor: "#D63AFF",
          proficiency: 92,
          highlight: "Token Rotation, RBAC Authorization"
        },
        {
          name: "RESTful APIs",
          category: "Integration",
          icon: <Zap className="text-[#2997FF]" size={20} />,
          brandColor: "#2997FF",
          proficiency: 96,
          highlight: "Rate Limiting, Schema Validation, CORS"
        }
      ]
    },
    {
      id: "database",
      number: "03",
      title: "Data & Persistence Layer",
      tagline: "Document, Relational & In-Memory Stores",
      icon: <Database size={18} className="text-[#FFD60A]" />,
      accent: "#FFD60A",
      skills: [
        {
          name: "MongoDB",
          category: "Document Store",
          icon: <SiMongodb className="text-[#47A248]" size={20} />,
          brandColor: "#47A248",
          proficiency: 95,
          highlight: "Aggregation Pipelines, Compound Indexing"
        },
        {
          name: "PostgreSQL",
          category: "Relational SQL",
          icon: <SiPostgresql className="text-[#4169E1]" size={20} />,
          brandColor: "#4169E1",
          proficiency: 88,
          highlight: "ACID Transactions, Joins, Schema Modeling"
        },
        {
          name: "Redis",
          category: "Cache Engine",
          icon: <SiRedis className="text-[#FF4438]" size={20} />,
          brandColor: "#FF4438",
          proficiency: 84,
          highlight: "Fast Key-Value Store, Session Caching"
        },
        {
          name: "Prisma ORM",
          category: "Data Layer",
          icon: <SiPrisma className="text-cyan-300" size={20} />,
          brandColor: "#64D2FF",
          proficiency: 90,
          highlight: "Type-Safe Client, Schema Migrations"
        }
      ]
    },
    {
      id: "devops",
      number: "04",
      title: "Infrastructure & Tooling",
      tagline: "Virtualization & Developer Toolchains",
      icon: <Terminal size={18} className="text-[#BF5AF2]" />,
      accent: "#BF5AF2",
      skills: [
        {
          name: "Docker",
          category: "Virtualization",
          icon: <SiDocker className="text-[#2496ED]" size={20} />,
          brandColor: "#2496ED",
          proficiency: 85,
          highlight: "Containerization, Multi-Stage Builds"
        },
        {
          name: "Git & GitHub",
          category: "Version Control",
          icon: <SiGit className="text-[#F05032]" size={20} />,
          brandColor: "#F05032",
          proficiency: 95,
          highlight: "Git Workflow, Branching & CI Pipelines"
        },
        {
          name: "Vite",
          category: "Build Tool",
          icon: <SiVite className="text-[#646CFF]" size={20} />,
          brandColor: "#646CFF",
          proficiency: 94,
          highlight: "Fast HMR, Tree-Shaking, ESM Bundling"
        },
        {
          name: "Postman API",
          category: "API Testing",
          icon: <SiPostman className="text-[#FF6C37]" size={20} />,
          brandColor: "#FF6C37",
          proficiency: 92,
          highlight: "Automated Testing, Mock Environments"
        }
      ]
    }
  ];

  const currentLayer = layers.find(layer => layer.id === activeTab) || layers[0];

  // 8-Node Compact Square Zig-Zag Pipeline (Thin & Small)
  const pipelineNodes = [
    {
      step: "01",
      title: "Client UI",
      tech: "React 19",
      icon: Layers,
      accent: "#2997FF"
    },
    {
      step: "02",
      title: "Type Gateway",
      tech: "TypeScript",
      icon: Activity,
      accent: "#30D158"
    },
    {
      step: "03",
      title: "Auth Guard",
      tech: "JWT Tokens",
      icon: Lock,
      accent: "#FFD60A"
    },
    {
      step: "04",
      title: "API Runtime",
      tech: "Node / Express",
      icon: Server,
      accent: "#BF5AF2"
    },
    {
      step: "05",
      title: "Cache Engine",
      tech: "Redis Memory",
      icon: Zap,
      accent: "#2997FF"
    },
    {
      step: "06",
      title: "Data Layer",
      tech: "MongoDB / SQL",
      icon: Database,
      accent: "#30D158"
    },
    {
      step: "07",
      title: "Hydration",
      tech: "JSON State",
      icon: ShieldCheck,
      accent: "#FFD60A"
    },
    {
      step: "08",
      title: "Deployment",
      tech: "Docker Cloud",
      icon: Boxes,
      accent: "#BF5AF2"
    }
  ];

  // 7 Distinct Solid-Colored Thin Segments (No Gradients)
  const zigZagSegments = [
    { from: "32 6.25", to: "68 18.75", color: "#2997FF" },
    { from: "68 18.75", to: "32 31.25", color: "#30D158" },
    { from: "32 31.25", to: "68 43.75", color: "#FFD60A" },
    { from: "68 43.75", to: "32 56.25", color: "#BF5AF2" },
    { from: "32 56.25", to: "68 68.75", color: "#2997FF" },
    { from: "68 68.75", to: "32 81.25", color: "#30D158" },
    { from: "32 81.25", to: "68 93.75", color: "#BF5AF2" }
  ];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#000000] overflow-hidden">
      {/* Apple-style subtle graphite vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Swiss Style Header */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] max-w-2xl text-[15px] sm:text-lg leading-relaxed"
          >
            Core technical proficiencies structured across four dedicated architectural layers.
          </motion.p>
        </div>

        {/* Apple Segmented Switcher (4 Layers Only) */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#0A0A0C] border border-white/10 rounded-full backdrop-blur-2xl shadow-2xl">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveTab(layer.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  activeTab === layer.id ? "text-white" : "text-[#86868B] hover:text-white"
                }`}
              >
                {activeTab === layer.id && (
                  <motion.div
                    layoutId="skills-layer-active"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-[#1C1C1E] border border-white/15 rounded-full shadow-md"
                  />
                )}
                <span className="relative z-10 font-mono text-xs text-[#2997FF] font-semibold">{layer.number}</span>
                <span className="relative z-10 font-medium">{layer.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Layer Panel */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLayer.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A0A0C]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-2xl relative overflow-hidden space-y-8"
            >
              {/* Layer Meta Header Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner">
                    {currentLayer.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-widest text-[#2997FF] font-semibold">
                        LAYER {currentLayer.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs sm:text-sm text-[#86868B] font-medium">
                        {currentLayer.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
                      {currentLayer.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/[0.03] text-[#A1A1A6] border border-white/10 w-fit">
                  {currentLayer.skills.length} Engineered Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5">
                {currentLayer.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: sIdx * 0.04 }}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/15 transition-all duration-200 flex flex-col justify-between space-y-4 group cursor-default shadow-sm"
                  >
                    <div className="space-y-3">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#000000] border border-white/10 group-hover:scale-105 transition-transform duration-200">
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-[15px] sm:text-base font-semibold text-[#F5F5F7] group-hover:text-white transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-[#86868B] font-mono block">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-medium text-[#86868B]">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Progress Line */}
                      <div className="w-full bg-white/[0.04] h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          style={{ backgroundColor: skill.brandColor }}
                          className="h-full rounded-full opacity-85"
                        />
                      </div>

                      {/* Highlight summary */}
                      <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                        {skill.highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small & Thin Square Zig-Zag Full-Stack Architecture & Data Flow */}
        <div 
          ref={pipelineRef}
          className="bg-[#0A0A0C]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-2xl space-y-8 relative overflow-hidden"
        >
          {/* Subtle Monochromatic Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-b from-white/[0.03] to-transparent blur-[140px] pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2997FF]/10 border border-[#2997FF]/20 flex items-center justify-center text-[#2997FF]">
                <Workflow size={18} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                  Full-Stack Architecture & Data Flow
                </h4>
                <p className="text-xs font-mono text-[#86868B]">
                  8-Stage Precision Execution Pipeline
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#30D158] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30D158]" />
              Continuous Circuit Flow
            </span>
          </div>

          {/* Precision Zig-Zag Pipeline Container with Small, Thin Square Nodes */}
          <div className="relative pt-4 pb-2 z-10 max-w-3xl mx-auto">
            
            {/* Thin Multi-Color (3-4 Solid Colors, No Gradient) SVG Zig-Zag Lines */}
            <svg 
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Background Thin Guide Track */}
              <path
                d="M 32 6.25 L 68 18.75 L 32 31.25 L 68 43.75 L 32 56.25 L 68 68.75 L 32 81.25 L 68 93.75"
                fill="none"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* 7 Distinct Solid-Colored Thin Segments (No Gradients) with Scroll Animation */}
              {zigZagSegments.map((seg, sIdx) => (
                <motion.path
                  key={sIdx}
                  d={`M ${seg.from} L ${seg.to}`}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="1.2"
                  style={{ pathLength: pathProgress }}
                />
              ))}
            </svg>

            {/* Mobile Vertical Left Line with Solid Scroll Progress */}
            <div className="md:hidden absolute left-5 top-4 bottom-4 w-[1.5px] bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div 
                style={{ scaleY: pathProgress }}
                className="w-full h-full bg-[#2997FF] origin-top"
              />
            </div>

            {/* Alternating Small, Thin Square Nodes */}
            <div className="space-y-4 sm:space-y-5 relative z-10">
              {pipelineNodes.map((node, idx) => {
                const isEven = idx % 2 === 1; // 0 = Left, 1 = Right on desktop
                const IconComponent = node.icon;

                return (
                  <motion.div
                    key={node.step}
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 24, 
                      delay: idx * 0.04 
                    }}
                    className="relative flex items-center w-full"
                  >
                    {/* Square Node Container: Alternating Left or Right on Desktop */}
                    <div 
                      className={`w-full pl-10 md:pl-0 flex ${
                        isEven 
                          ? "md:justify-end md:pr-14 lg:md:pr-20" 
                          : "md:justify-start md:pl-14 lg:md:pl-20"
                      }`}
                    >
                      {/* Small, Thin Square Shape Node */}
                      <motion.div 
                        whileHover={{ scale: 1.06, y: -3 }}
                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                        className="relative w-28 h-28 sm:w-32 sm:h-32 p-3 rounded-2xl bg-[#0C0C0E]/95 hover:bg-[#121216] border border-white/[0.08] hover:border-white/25 transition-colors duration-200 group shadow-[0_6px_20px_rgba(0,0,0,0.6)] flex flex-col items-center justify-between text-center"
                      >
                        {/* Top Step Pill */}
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[9px] font-mono font-bold text-[#86868B]">
                            0{idx + 1}
                          </span>
                          <span 
                            style={{ color: node.accent, borderColor: `${node.accent}40` }}
                            className="text-[8px] font-mono px-1.5 py-0.2 rounded-full bg-white/[0.03] border font-semibold"
                          >
                            {node.step}
                          </span>
                        </div>

                        {/* Thin Compact Icon Container */}
                        <div 
                          style={{ borderColor: `${node.accent}30` }}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.03] border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"
                        >
                          <IconComponent size={16} style={{ color: node.accent }} />
                        </div>

                        {/* Title & Short Tech */}
                        <div className="space-y-0">
                          <h5 className="text-[11px] sm:text-xs font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors truncate max-w-[100px] sm:max-w-[110px]">
                            {node.title}
                          </h5>
                          <span className="text-[9px] font-mono text-[#86868B] block truncate max-w-[95px] sm:max-w-[110px]">
                            {node.tech}
                          </span>
                        </div>

                      </motion.div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
