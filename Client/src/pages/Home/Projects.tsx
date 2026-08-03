import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects, Project } from "../../data/projects";

interface ProjectRowProps {
  project: Project;
  index: number;
}

function ProjectRow({ project, index }: ProjectRowProps) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isFlipped = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24 last:mb-0"
    >
      {/* Project Details */}
      <div className={`lg:col-span-5 space-y-6 ${isFlipped ? "lg:order-2" : "lg:order-1"}`}>
        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
            Featured Project · {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-gray-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            <Github size={16} />
            Source Code
          </a>

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/10"
          >
            View Case Study
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Project Image Wrapper with Zoom & Glow */}
      <div className={`lg:col-span-7 ${isFlipped ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative group rounded-[2.2rem] overflow-hidden border border-white/10 bg-[#111827] shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => navigate(`/projects/${project.slug}`)}
        >
          {/* Neon Glow overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          
          {/* Subtle gradient overlay to darken image on bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-[#030712]/20 to-transparent z-10 pointer-events-none" />

          {/* Project Screenshot */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-[260px] sm:h-[400px] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />

          {/* Floating Number Tag */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#030712]/80 backdrop-blur-md border border-white/10 text-[10px] font-bold font-mono text-gray-400">
            {String(index + 1).padStart(2, "0")} / {Object.keys(projects).length.toString().padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projectList = Object.values(projects);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Featured Engineering Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto"
          >
            A curated selection of platforms built with modern technology, scalable architecture, and visual polish.
          </motion.p>
        </div>

        {/* Projects Rows List */}
        <div className="space-y-24">
          {projectList.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
