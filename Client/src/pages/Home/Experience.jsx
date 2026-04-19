import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Calendar,
  Building2,
  TrendingUp,
} from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    company: "onNextWeb",
    duration: "Dec 2025 – Present",
    impact: "Reduced load time by 35%",
    highlights: [
      "Built scalable MERN stack modules handling real users.",
      "Designed REST APIs used across multiple services.",
      "Improved frontend performance & code maintainability.",
    ],
    projects: ["Dashboard System", "API Optimization", "Auth System"],
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    icon: Code2,
    role: "Frontend Engineer",
    company: "CodeFast Platform",
    duration: "Mar 2025 – Jun 2025",
    impact: "Boosted UX engagement by 40%",
    highlights: [
      "Created reusable UI component system.",
      "Built responsive and accessible interfaces.",
      "Optimized performance across pages.",
    ],
    projects: ["Design System", "Landing Pages", "UI Library"],
    skills: ["React", "Tailwind", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r  font-semibold tracking-tight">
            Work Experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Building real-world products with performance, scalability, and clean design in mind.
          </p>
        </div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Empty Side */}
                  <div className="md:w-1/2" />

                  {/* Center Dot */}
                  <div className="relative flex items-center justify-center w-10 h-10">
                    <div className="w-4 h-4 bg-white rounded-full z-10" />
                  </div>

                  {/* Card */}
                  <div className="md:w-1/2">
                    <div className="bg-gray-950 border border-white/10 rounded-2xl p-8 hover:bg-gray-800/10 hover:border-gray-700 transition-all duration-200">

                      {/* Top */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="text-xl font-medium">{exp.role}</h3>
                          <div className="flex gap-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <Building2 size={14} /> {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} /> {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex items-center gap-2 text-gray-200 text-sm mb-6">
                        <TrendingUp size={16} />
                        {exp.impact}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 text-gray-400 mb-6">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>• {h}</li>
                        ))}
                      </ul>

                      {/* Projects */}
                      <div className="mb-6">
                        <p className="text-xs text-gray-500 mb-2">PROJECTS</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((p, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-md bg-white/10"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-md border border-white/10 text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}