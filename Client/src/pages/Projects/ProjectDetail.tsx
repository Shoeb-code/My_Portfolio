import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { projects } from "../../data/projects";
import PageWrapper from "../../components/PageWrapper";

// UI Enhancements
import MouseFollower from "../../components/MouseFollower";
import ScrollProgress from "../../components/ScrollProgress";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] text-white">
        <p className="text-lg font-semibold mb-4 text-gray-400">Project Case Study Not Found</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-semibold transition-colors cursor-pointer text-sm"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <PageWrapper>
      {/* Visual enhancers for case studies */}
      <MouseFollower />
      <ScrollProgress />

      <section className="relative min-h-screen bg-[#030712] text-white overflow-hidden py-16 px-6">
        
        {/* Spotlight backgrounds */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-blue-500/5 blur-[130px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/5 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer select-none"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>

          {/* Hero segment */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Title / Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
                <Sparkles size={12} className="text-blue-400" />
                <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                  Case Study Details
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-blue-400">
                {project.tagline}
              </p>

              <p className="text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Stack list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-gray-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Repo triggers */}
              <div className="flex flex-wrap gap-3.5 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                >
                  <Github size={16} />
                  Source Code
                </a>

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/10"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Showcase Visual preview */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-[2.2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-3 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-[1.6rem] w-full h-[220px] sm:h-[300px] object-cover object-top"
                />
              </motion.div>
            </div>

          </div>

          {/* Double Column Features vs Insights */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            
            {/* Features panel */}
            <div className="glass-card rounded-[2rem] p-7.5 border border-white/5 hover:border-blue-500/15 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                  <CheckCircle2 size={18} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Key Features &amp; Modules
                </h2>
              </div>

              <ul className="space-y-3.5 text-xs text-gray-400 pl-4 list-disc marker:text-blue-500">
                {project.features.map((feature, i) => (
                  <li key={i} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights panel */}
            <div className="glass-card rounded-[2rem] p-7.5 border border-white/5 hover:border-purple-500/15 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10">
                  <Layers size={18} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Project Insights &amp; Challenges
                </h2>
              </div>

              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                {project.projectsInsight}
              </p>
            </div>

          </div>

          {/* Screengrid section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-white">
              Application Interfaces
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-[#111827] overflow-hidden shadow-lg p-2.5"
                >
                  <img
                    src={img}
                    alt={`Interface View ${i + 1}`}
                    loading="lazy"
                    className="rounded-xl w-full h-[150px] sm:h-[180px] object-cover object-top"
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
