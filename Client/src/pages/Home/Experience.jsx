import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Calendar,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    company: "onNextWeb",
    duration: "Dec 2025 – Present",
    accent: "from-indigo-500 via-purple-500 to-pink-500",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    points: [
      "Built full-stack features using MERN stack.",
      "Owned frontend modules and API integration.",
      "Improved maintainability and performance.",
      "Collaborated in agile development workflow.",
    ],
  },
  {
    icon: Code2,
    role: "Frontend Engineer",
    company: "CodeFast Platform",
    duration: "Mar 2025 – Jun 2025",
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
    skills: ["React", "JavaScript", "Tailwind", "API Integration"],
    points: [
      "Developed scalable UI systems.",
      "Built reusable components.",
      "Focused on responsive design.",
      "Optimized accessibility and performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* ===== Premium Background ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[32rem] h-[32rem] bg-indigo-800/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-purple-500/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#6369f120,transparent_40%),radial-gradient(circle_at_bottom_right,#a855f720,transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-sm text-gray-300 tracking-wide">
              Professional Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Experience That
            <span className="bg-gradient-to-r from-indigo-600 to-pink-700 bg-clip-text text-transparent">
              {" "}Builds Trust
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Real-world product development experience across frontend,
            backend, and full-stack engineering.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* Glow Border */}
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r ${exp.accent} opacity-20 blur-xl group-hover:opacity-30 transition`}
                />

                {/* Glass Card */}
                <div
                  className="relative rounded-[2rem] border border-white/10
                             bg-white/[0.04] backdrop-blur-2xl
                             shadow-2xl p-8 md:p-10"
                >
                  <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                    {/* Left */}
                    <div>
                      {/* top */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${exp.accent}
                                     flex items-center justify-center shadow-xl`}
                        >
                          <Icon size={26} />
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            {exp.role}
                          </h3>

                          <div className="flex flex-wrap gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-2 text-indigo-500">
                              <Building2 size={14} />
                              {exp.company}
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar size={14} />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* points */}
                      <div className="space-y-3 mb-8">
                        {exp.points.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <ArrowRight
                              size={16}
                              className="mt-1 text-indigo-400"
                            />
                            <span className="leading-7">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* skills */}
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full
                                       bg-white/5 border border-white/10
                                       text-gray-200 hover:text-white
                                       hover:border-white/20 transition"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right premium stat */}
                    <div className="lg:w-44">
                      <div
                        className="rounded-3xl border border-white/10
                                   bg-white/5 p-6 text-center"
                      >
                        <p className="text-gray-400 text-sm mb-2">
                          Impact
                        </p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                          95%
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Delivery Score
                        </p>
                      </div>
                    </div>
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