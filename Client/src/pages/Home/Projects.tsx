import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Layers
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isFlipped = index % 2 !== 0;
  const isLive = project.live && project.live !== "#";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0A0A0C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-8 border border-white/[0.08] hover:border-white/[0.2] shadow-[0_16px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle Apple Obsidian Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-[#2997FF]/[0.03] rounded-full blur-[120px] pointer-events-none group-hover:bg-[#2997FF]/[0.06] transition-all duration-500" />

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        
        {/* Project Technical Highlights */}
        <div className={`lg:col-span-5 space-y-4 ${isFlipped ? "lg:order-2" : "lg:order-1"}`}>
          
          {/* Header Metadata */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2997FF] font-bold">
                0{index + 1} • FLAGSHIP
              </span>
              <span className="text-white/20">•</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#86868B]">
                <Layers size={11} className="text-[#30D158]" />
                Full-Stack
              </span>
            </div>

            <h3 
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            <p className="text-xs font-mono text-[#2997FF] line-clamp-1">
              {project.tagline}
            </p>
          </div>

          {/* Crisp 1-Line Summary */}
          <p className="text-[14px] leading-relaxed text-[#A1A1A6] line-clamp-2">
            {project.description}
          </p>

          {/* Core Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.07] text-[#D1D1D6]"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-0.5 text-[#86868B]">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Compact Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F5F5F7] text-black text-xs font-bold hover:bg-white transition-all shadow-[0_4px_16px_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight size={13} />
            </button>

            {isLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F5F7] text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <ExternalLink size={12} />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#86868B] hover:text-[#F5F5F7] transition-all cursor-pointer"
              title="GitHub Repository"
            >
              <Github size={14} />
            </a>
          </div>

        </div>

        {/* Compact macOS Browser Mockup Viewport */}
        <div className={`lg:col-span-7 ${isFlipped ? "lg:order-1" : "lg:order-2"}`}>
          <div 
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#070709] shadow-[0_12px_36px_rgba(0,0,0,0.7)] group/viewport cursor-pointer"
          >
            {/* macOS Chrome Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#111114] border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#000000]/60 border border-white/[0.04] text-[10px] font-mono text-[#86868B] truncate max-w-[200px]">
                <span className="text-[#2997FF]">https://</span>
                <span className="truncate">{project.slug}.shoeb.dev</span>
              </div>

              <div className="text-[10px] font-mono text-[#86868B]">
                0{index + 1}
              </div>
            </div>

            {/* Screenshot Frame */}
            <div className="relative overflow-hidden aspect-[16/10] bg-[#000000]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover/viewport:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Subtle Ambient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent opacity-40 group-hover/viewport:opacity-15 transition-opacity pointer-events-none" />

              {/* Hover Prompt */}
              <div className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#000000]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#F5F5F7] group-hover/viewport:border-[#2997FF]/50 transition-colors">
                <span>Explore Architecture</span>
                <ArrowUpRight size={11} className="text-[#2997FF]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projectList = Object.values(projects);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#000000] overflow-hidden">
      {/* Subtle Apple Pro Ambient Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[400px] bg-gradient-to-b from-[#2997FF]/[0.05] via-[#BF5AF2]/[0.02] to-transparent blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header: Swiss Minimalist */}
        <div ref={headerRef} className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-[#86868B] text-sm sm:text-base leading-relaxed"
          >
            Production full-stack platforms engineered for scale, reliability, and intuitive user workflows.
          </motion.p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-8 sm:space-y-10">
          {projectList.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}


