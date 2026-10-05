import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Layers,
  Cpu,
  ShieldCheck,
  Globe,
  ArrowRight,
  Maximize2,
  X,
  Database,
  LineChart,
  Lock,
  Workflow
} from "lucide-react";
import { projects } from "../../data/projects";
import PageWrapper from "../../components/PageWrapper";
import MouseFollower from "../../components/MouseFollower";
import ScrollProgress from "../../components/ScrollProgress";

// Helper to derive clean human-readable titles from image filenames
function getImageCaption(path: string): string {
  if (path.includes("chart")) return "Telemetry & Analytics Dashboard";
  if (path.includes("perform-history")) return "Performance History & Scoring Metrics";
  if (path.includes("prep-list")) return "Mock Interview Question Repository";
  if (path.includes("role panel")) return "Role Selection & Interview Simulation Panel";
  if (path.includes("register")) return "Secure Authentication & User Onboarding";
  if (path.includes("home")) return "Platform Command Center & Overview";
  if (path.includes("tuitions")) return "Subject & Class Matching Directory";
  if (path.includes("DashBoard")) return "Dynamic Multi-Role Management Dashboard";
  if (path.includes("loginPage")) return "JWT Encrypted Authentication Gateway";
  if (path.includes("info")) return "Tutor Verification & Enquiry Stream";
  return "System Interface Viewport";
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? projects[slug] : undefined;

  // Lightbox modal state for full-screen screenshot inspection
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);

  // Compute other projects for bottom navigation
  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.findIndex(k => k === slug);
  const nextSlug = projectKeys[(currentIndex + 1) % projectKeys.length];
  const nextProject = projects[nextSlug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] text-[#F5F5F7] px-6">
        <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] text-center max-w-md space-y-4">
          <p className="text-xl font-bold text-[#F5F5F7]">Project Dossier Not Found</p>
          <p className="text-sm text-[#86868B]">The requested architectural case study does not exist or has been relocated.</p>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded-xl bg-[#F5F5F7] text-black hover:bg-white font-bold transition-all text-xs cursor-pointer"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const isLive = project.live && project.live !== "#";

  // Structured 4-Pillar Architectural Breakdown per project
  const architecturalPillars = project.slug === "fast_Ai_Interview_platform"
    ? [
        {
          id: "01",
          title: "Simulation Engine",
          subtitle: "Workflow Orchestration",
          icon: Workflow,
          color: "#2997FF",
          points: [
            "AI-assisted mock interview questions and dynamic scoring evaluation",
            "Role-based simulation panels with structured answer assessment",
            "Modular React state handlers managing multi-step question flows"
          ]
        },
        {
          id: "02",
          title: "Identity & Session Guard",
          subtitle: "Zero-Trust Security",
          icon: Lock,
          color: "#30D158",
          points: [
            "Secure JSON Web Token (JWT) lifecycle with route-level verification",
            "Protected API endpoints ensuring encrypted session state",
            "Sanitized payload validation on registration and login pipelines"
          ]
        },
        {
          id: "03",
          title: "Telemetry & Analytics",
          subtitle: "Data Visualization",
          icon: LineChart,
          color: "#FFD60A",
          points: [
            "Recharts visualization engine rendering historical performance trajectories",
            "Real-time interview scoring feedback and progression metrics",
            "Comprehensive history tracking with drill-down review capabilities"
          ]
        },
        {
          id: "04",
          title: "Data Layer & Persistence",
          subtitle: "MongoDB Engine",
          icon: Database,
          color: "#BF5AF2",
          points: [
            "Structured MongoDB schemas for user profiles and interview sessions",
            "Optimized query execution for fast score retrieval and history lookups",
            "Scalable Express.js backend structure with unified error middleware"
          ]
        }
      ]
    : [
        {
          id: "01",
          title: "Dual-Role Matching Engine",
          subtitle: "Matching Architecture",
          icon: Workflow,
          color: "#2997FF",
          points: [
            "Subject and class-wise algorithmic matching for parents and tutors",
            "Structured enquiry pipeline routing direct tuition requests",
            "Multi-criteria filtering engine for location and subject specialization"
          ]
        },
        {
          id: "02",
          title: "RBAC Authentication",
          subtitle: "Role-Based Access Control",
          icon: Lock,
          color: "#30D158",
          points: [
            "JWT token generation with secure cookie session handling",
            "Strict role separation between Parent and Tutor dashboard access",
            "Request interceptors safeguarding private communication endpoints"
          ]
        },
        {
          id: "03",
          title: "Dynamic Dashboards",
          subtitle: "Interface Layer",
          icon: LineChart,
          color: "#FFD60A",
          points: [
            "Tailored dashboards rendering real-time incoming student requests",
            "Profile verification and management interfaces built with React",
            "High-performance state updates via lightweight modular components"
          ]
        },
        {
          id: "04",
          title: "Scalable REST Backend",
          subtitle: "MongoDB & Express",
          icon: Database,
          color: "#BF5AF2",
          points: [
            "Normalized MongoDB document models for users, tutors, and enquiries",
            "RESTful API architecture with centralized error handling middleware",
            "Clean folder structure designed for horizontal scalability"
          ]
        }
      ];

  return (
    <PageWrapper>
      <MouseFollower />
      <ScrollProgress />

      <main className="relative min-h-screen bg-[#000000] text-[#F5F5F7] overflow-hidden selection:bg-[#2997FF]/30">
        
        {/* Subtle Apple Pro Ambient Background Lighting */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-10 left-1/4 w-[850px] h-[500px] bg-gradient-to-b from-[#2997FF]/[0.06] via-[#BF5AF2]/[0.03] to-transparent blur-[180px]" />
          <div className="absolute top-2/3 right-1/4 w-[750px] h-[450px] bg-[#2997FF]/[0.04] blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 space-y-16 sm:space-y-24">
          
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-[#86868B] hover:text-[#F5F5F7] transition-all cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Portfolio Core</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#86868B] hidden sm:inline-block">
                SYSTEM ARCHITECTURE DOSSIER
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-[#D1D1D6] bg-white/[0.04] border border-white/[0.08]">
                {isLive ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30D158]" />
                    <span>Live Production</span>
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A]" />
                    <span>Full-Stack Build</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Title & Key Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-[1.1]">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base font-mono text-[#2997FF] leading-relaxed">
                {project.tagline}
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#A1A1A6] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Matrix */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                  Core Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[#D1D1D6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                {isLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5F5F7] text-black text-xs sm:text-sm font-bold hover:bg-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <Globe size={14} />
                    <span>Launch Live Platform</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F5F7] text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Github size={15} />
                  <span>Source Repository</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero macOS Browser Mockup */}
            <div className="lg:col-span-6">
              <div 
                onClick={() => setActiveLightboxImg(project.image)}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] bg-[#070709] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group cursor-pointer"
              >
                {/* macOS Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111114] border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#000000]/60 border border-white/[0.04] text-[11px] font-mono text-[#86868B] truncate max-w-[240px]">
                    <span className="text-[#2997FF]">https://</span>
                    <span className="truncate">{project.slug}.shoeb.dev</span>
                  </div>

                  <div className="text-[10px] font-mono text-[#86868B]">
                    Primary Node
                  </div>
                </div>

                {/* Screenshot Display */}
                <div className="relative aspect-[16/10] bg-[#000000] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-40 group-hover:opacity-15 transition-opacity pointer-events-none" />
                  
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F5F7] group-hover:border-[#2997FF]/50 transition-colors">
                    <Maximize2 size={12} className="text-[#2997FF]" />
                    <span>Expand Viewport</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Redesigned Premium 4-Pillar System Breakdown */}
          <div className="space-y-8">
            
            {/* Section Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#2997FF]">
                  <Layers size={13} />
                  <span>System Breakdown</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
                  Architectural Pillars
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#86868B] max-w-md">
                Production-tested modules engineered for modularity, low latency, and zero-trust authentication.
              </p>
            </div>

            {/* 4 Architectural Pillar Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {architecturalPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="bg-[#0A0A0C] rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.2] shadow-xl flex flex-col justify-between space-y-5 transition-all group"
                  >
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#86868B]">
                          PILLAR • {pillar.id}
                        </span>
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center border"
                          style={{ borderColor: `${pillar.color}40`, backgroundColor: `${pillar.color}15`, color: pillar.color }}
                        >
                          <Icon size={14} />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] font-mono text-[#86868B]">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Concise Points */}
                    <div className="space-y-2.5 pt-2 border-t border-white/[0.05]">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#A1A1A6] leading-relaxed">
                          <span style={{ color: pillar.color }} className="font-mono font-bold shrink-0 mt-0.5">▪</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Executive Engineering Decisions & Core Value: 5 Structured Points */}
            <div className="bg-[#0A0A0C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#30D158]">
                    <Cpu size={14} />
                    <span>Architectural Synthesis</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7]">
                    Engineering Decisions &amp; Core Value
                  </h3>
                </div>

                <span className="self-start sm:self-auto px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#D1D1D6]">
                  5 Core Principles
                </span>
              </div>

              {/* 5 High-Impact Architecture Decisions Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {(project.slug === "fast_Ai_Interview_platform" ? [
                  {
                    num: "01",
                    title: "JWT Session Guard",
                    desc: "Token lifecycles & route guards ensuring isolated encrypted access.",
                    color: "#2997FF"
                  },
                  {
                    num: "02",
                    title: "Scalable REST APIs",
                    desc: "Express controllers orchestrating dynamic prompts & scoring cycles.",
                    color: "#30D158"
                  },
                  {
                    num: "03",
                    title: "MongoDB Indexing",
                    desc: "Optimized schemas maintaining query latency under 300ms.",
                    color: "#FFD60A"
                  },
                  {
                    num: "04",
                    title: "Telemetry & Radar",
                    desc: "Recharts engine delivering instant performance visualizations.",
                    color: "#BF5AF2"
                  },
                  {
                    num: "05",
                    title: "Modular React UI",
                    desc: "Reusable component system engineered for 60 FPS fluidity.",
                    color: "#FF375F"
                  }
                ] : [
                  {
                    num: "01",
                    title: "Dual-Role RBAC",
                    desc: "Dedicated onboarding workflows & strict permission boundaries.",
                    color: "#2997FF"
                  },
                  {
                    num: "02",
                    title: "Matching Engine",
                    desc: "Multi-criteria algorithms matching tutors by subject and proximity.",
                    color: "#30D158"
                  },
                  {
                    num: "03",
                    title: "Encrypted Cookies",
                    desc: "Secure HTTP-only session handlers safeguarding enquiry channels.",
                    color: "#FFD60A"
                  },
                  {
                    num: "04",
                    title: "Live Dashboards",
                    desc: "Responsive interfaces rendering real-time incoming student requests.",
                    color: "#BF5AF2"
                  },
                  {
                    num: "05",
                    title: "Modular Backend",
                    desc: "Centralized REST error middleware with normalized database models.",
                    color: "#FF375F"
                  }
                ]).map((point) => (
                  <div 
                    key={point.num}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-xs font-mono font-bold"
                        style={{ color: point.color }}
                      >
                        {point.num}
                      </span>
                      <span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: point.color }}
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-[#F5F5F7] group-hover:text-white transition-colors leading-snug">
                        {point.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#86868B] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Interactive Screen Interfaces Gallery */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#2997FF]">
                  <ShieldCheck size={13} />
                  <span>Visual Blueprint</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
                  Production Interface Viewports
                </h2>
              </div>

              <div className="text-xs font-mono text-[#86868B] hidden sm:block">
                {project.images.length} Captured Interfaces
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, i) => {
                const caption = getImageCaption(img);
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActiveLightboxImg(img)}
                    className="bg-[#0A0A0C] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.22] shadow-xl group cursor-pointer transition-colors"
                  >
                    {/* Viewport mini chrome header */}
                    <div className="flex items-center justify-between px-3.5 py-2 bg-[#111114] border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/70" />
                        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                        <div className="w-2 h-2 rounded-full bg-[#27C93F]/70" />
                      </div>
                      <span className="text-[10px] font-mono text-[#86868B] truncate max-w-[150px]">
                        screen_0{i + 1}.png
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-[#000000] overflow-hidden">
                      <img
                        src={img}
                        alt={caption}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#000000]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="px-3 py-1 rounded-full bg-[#000000]/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5">
                          <Maximize2 size={11} className="text-[#2997FF]" />
                          <span>Inspect Full Size</span>
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="p-3.5 bg-[#0A0A0C] border-t border-white/[0.04]">
                      <div className="text-xs font-semibold text-[#F5F5F7] truncate">
                        {caption}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Next Project Dossier Navigation */}
          {nextProject && (
            <div className="pt-8 border-t border-white/[0.06]">
              <div 
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#86868B]">
                    Next Architectural Dossier
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] group-hover:text-[#2997FF] transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs font-mono text-[#86868B]">
                    {nextProject.tagline}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F5F5F7] group-hover:bg-[#F5F5F7] group-hover:text-black transition-all">
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Interactive Lightbox Inspection Modal */}
      <AnimatePresence>
        {activeLightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImg(null)}
            className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0A0A0C] rounded-2xl sm:rounded-3xl border border-white/[0.15] overflow-hidden shadow-2xl cursor-default"
            >
              {/* Modal Chrome Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111114] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-xs font-mono text-[#86868B] ml-2">
                    {getImageCaption(activeLightboxImg)}
                  </span>
                </div>

                <button
                  onClick={() => setActiveLightboxImg(null)}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#86868B] hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Full Image */}
              <div className="max-h-[75vh] overflow-auto bg-[#000000] p-2 flex items-center justify-center">
                <img
                  src={activeLightboxImg}
                  alt="Expanded interface preview"
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageWrapper>
  );
}

