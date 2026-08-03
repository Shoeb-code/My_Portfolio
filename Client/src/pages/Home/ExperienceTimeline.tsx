import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Terminal, 
  CircleDot 
} from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  impact: string;
  highlights: string[];
  skills: string[];
}

export default function ExperienceTimeline() {
  const experiences: ExperienceItem[] = [
    {
      role: "Software Developer Intern",
      company: "onNextWeb",
      duration: "Dec 2025 – Present",
      location: "Remote",
      impact: "Optimized application routes, API structures, and MERN platform loading times by 35%.",
      highlights: [
        "Architecting production-grade MERN modules to manage parental queries and database logs.",
        "Developing REST APIs with JWT verification, ensuring secure sessions across multi-user environments.",
        "Refactoring database models to optimize aggregation requests and index queries."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"]
    },
    {
      role: "Frontend Engineer Intern",
      company: "CodeFast Platform",
      duration: "Mar 2025 – Jun 2025",
      location: "New Delhi, India",
      impact: "Increased interactive feature adoption and client-side page rendering speeds, boosting UX engagement by 40%.",
      highlights: [
        "Designed and compiled reusable UI component structures, ensuring strict compliance with visual styles.",
        "Engineered responsive layout architectures that scale across desktop, tablet, and mobile views.",
        "Integrated client-side state managers and visual feedback states with Framer Motion transitions."
      ],
      skills: ["React.js", "Tailwind CSS", "JavaScript ES6", "Framer Motion", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] right-[10%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[30%] left-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional Timeline
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            Work Experience &amp; Industry Experience
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative mt-12">
          {/* Vertical central divider line (Desktop only) */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1.5px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Space Holder for alternating grids (Desktop only) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Bullet Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-8 w-6 h-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <CircleDot className="text-blue-500 bg-[#030712] rounded-full w-5 h-5 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-card rounded-[2rem] p-7 border border-white/5 hover:border-blue-500/20 hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)] transition-all duration-300 relative group overflow-hidden">
                      {/* Gradient outline strip */}
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                      
                      {/* Job Header */}
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-2">
                          <Calendar size={10} />
                          {exp.duration}
                        </span>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span className="font-semibold text-gray-400">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlighted Impact */}
                      <div className="flex items-start gap-2.5 bg-blue-500/5 border border-blue-500/10 rounded-xl p-3.5 text-xs text-gray-300 mb-5">
                        <TrendingUp size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong>Impact Statement:</strong> {exp.impact}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 text-xs text-gray-400 mb-6 list-disc pl-4 marker:text-purple-500">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="leading-relaxed">{h}</li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="border-t border-white/5 pt-4">
                        <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mb-2 flex items-center gap-1">
                          <Terminal size={10} />
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-gray-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
