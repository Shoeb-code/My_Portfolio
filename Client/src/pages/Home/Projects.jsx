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
      className="relative py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-white/10 bg-white/5 mb-6"
        >
          <Sparkles size={14} />
          <span className="text-sm text-gray-300">
            Featured Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          Projects That Create Impact
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Real-world applications built with scalable architecture,
          modern UI, and production-ready code.
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
            className={`grid lg:grid-cols-2 gap-14 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Info Section */}
            <div>
              <p className="text-indigo-400 text-sm font-medium mb-3">
                Featured Project #{index + 1}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 text-lg mb-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full
                               bg-white/5 border border-white/10
                               text-gray-300 hover:border-white/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3
                             rounded-xl border border-white/10
                             bg-white/5 hover:bg-white/10 transition"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3
                               rounded-xl border border-white/10
                               bg-white/5 hover:bg-white/10 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                <button
                  onClick={() =>
                    navigate(`/projects/${project.slug}`)
                  }
                  className="inline-flex items-center gap-2 px-6 py-3
                             rounded-xl bg-gradient-to-r
                             from-indigo-500 via-purple-500 to-pink-500
                             hover:scale-105 transition duration-300"
                >
                  View Case Study
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Image Preview */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden
                         border border-white/10 bg-white/5
                         backdrop-blur-2xl shadow-2xl"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition" />

              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 w-full h-[380px] object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}