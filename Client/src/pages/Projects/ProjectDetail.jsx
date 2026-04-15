import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Layers3,
} from "lucide-react";
import { projects } from "../../data/projects";
import PageWrapper from "../../components/PageWrapper";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        Project not found
      </div>
    );
  }

  return (
    <PageWrapper>
      <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
        {/* ===== Premium Background ===== */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* ===== Back Button ===== */}
          <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2
                       text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>

          {/* ===== Hero ===== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-sm text-gray-300">
                  Featured Case Study
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
                {project.title}
              </h1>

              <p className="text-xl text-indigo-300 mb-6 leading-8">
                {project.tagline}
              </p>

              <p className="text-gray-300 leading-8 text-lg mb-8">
                {project.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl
                             bg-gradient-to-r from-indigo-500
                             via-purple-500 to-pink-500
                             hover:scale-105 transition
                             inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl
                             border border-white/10
                             bg-white/5 hover:bg-white/10
                             transition inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  Source Code
                </a>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full
                               bg-white/5 border border-white/10
                               text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[2rem] border border-white/10
                         bg-white/5 backdrop-blur-2xl
                         p-4 shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl w-full"
              />
            </motion.div>
          </div>

          {/* ===== Features + Highlights ===== */}
          <div className="grid lg:grid-cols-2 gap-10 mt-24">
            {/* Features */}
            <div className="rounded-[2rem] transition-all duration-200 ease-in-out hover:scale-[1.04] hover:border-indigo-500 hover:bg-white/10 hover:shadow-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-indigo-400" size={43} />
                <h2 className="text-2xl text-amber-400 font-semibold">
                  Key Features
                </h2>
              </div>

              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-indigo-400 mt-1">•</span>
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project insights */}
            <div className="rounded-[2rem] transition-all duration-200 ease-in-out hover:scale-[1.04] hover:border-indigo-500 hover:bg-white/10 hover:shadow-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers3 className="text-purple-400" size={43} />
                <h2 className="text-2xl  text-indigo-400 font-semibold">
                  Project Insights
                </h2>
              </div>

              <p className="text-gray-300 leading-10 ">
                {project.projectsInsight}
              </p>
            </div>
          </div>

          {/* ===== Screenshots ===== */}
          <div className="mt-24">
            <h2 className="text-3xl font-semibold mb-8">
              Product Screens
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-3xl  border border-white/10
                             bg-white/5 backdrop-blur-xl
                             p-3 shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-2xl w-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}