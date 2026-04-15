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
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    points: [
      "Built scalable full-stack features using MERN stack.",
      "Owned frontend modules and backend API integrations.",
      "Improved maintainability and application performance.",
      "Collaborated in agile product development workflow.",
    ],
  },
  {
    icon: Code2,
    role: "Frontend Engineer",
    company: "CodeFast Platform",
    duration: "Mar 2025 – Jun 2025",
    skills: ["React", "JavaScript", "Tailwind", "API Integration"],
    points: [
      "Developed scalable UI systems and design components.",
      "Built reusable frontend architecture.",
      "Focused on responsive and premium user experience.",
      "Optimized performance and accessibility.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-xl">
            <Sparkles size={14} className="text-purple-300" />
            <span className="text-sm text-gray-400 tracking-wide">
              Professional Experience
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-300  bg-clip-text text-transparent">
            Work Experience
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Building scalable products, premium interfaces, and real-world
            business solutions through internships and freelance work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10 hover:border-purple-400/30 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] transition-all duration-500"
              >
                <div className="grid lg:grid-cols-[1fr_auto] gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center shadow-[0_8px_30px_rgba(168,85,247,0.25)]">
                        <Icon
                          size={24}
                          className="text-indigo-300"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-medium">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap gap-5 mt-3 text-sm">
                          <div className="flex items-center gap-2 text-indigo-300">
                            <Building2 size={14} />
                            {exp.company}
                          </div>

                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar size={14} />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="space-y-4 mb-8">
                      {exp.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <ArrowRight
                            size={16}
                            className="mt-1 text-purple-300"
                          />
                          <span className="leading-8">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-indigo-400/30 hover:text-white hover:shadow-[0_6px_20px_rgba(99,102,241,0.2)] transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Stat */}
                  <div className="lg:w-40">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 text-center shadow-[0_10px_40px_rgba(168,85,247,0.18)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.28)] transition-all duration-500">
                      <p className="text-gray-400 text-sm mb-2">
                        Impact
                      </p>
                      <p className="text-4xl font-semibold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                        95%
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Delivery Score
                      </p>
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