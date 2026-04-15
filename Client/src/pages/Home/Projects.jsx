import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";

export default function Projects() {
  const navigate = useNavigate();
  const projectList = Object.values(projects);

  return (
    <section
      id="projects"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-6"
        >
          <Sparkles size={14} className="text-purple-300" />
          <span className="text-sm text-gray-400">
            Featured Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
        >
          Projects That Create Impact
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
          Real-world applications built with scalable architecture,
          modern UI, and production-ready engineering.
        </p>
      </div>

      {/* Projects */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-28">
        {projectList.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Left Info */}
            <div>
              <p className="text-indigo-300 text-sm font-medium mb-3 tracking-wide">
                Featured Project #{index + 1}
              </p>

              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-9 text-lg mb-8">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-indigo-400/30 hover:text-white hover:shadow-[0_6px_20px_rgba(99,102,241,0.15)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-purple-400/20 transition-all duration-300"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-indigo-400/20 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                <button
                  onClick={() =>
                    navigate(`/projects/${project.slug}`)
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(168,85,247,0.35)]"
                >
                  View Case Study
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Preview */}
            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-purple-400/20 hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 w-full h-[420px] object-cover group-hover:scale-[1.02] transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}