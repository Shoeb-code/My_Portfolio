import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Download, 
  Calendar, 
  MapPin, 
  Building2,
  Trophy
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const experiences = [
    {
      role: "Software Developer Intern",
      company: "onNextWeb",
      duration: "Dec 2025 – Present",
      location: "Remote",
      points: [
        "Developing scalable MERN stack modules for real-world software platforms.",
        "Refactoring endpoints and designing REST APIs to optimize load times by 35%.",
        "Participating in code reviews, optimizing layouts, and standardizing frontend components."
      ]
    },
    {
      role: "Frontend Engineer Intern",
      company: "CodeFast Platform",
      duration: "Mar 2025 – Jun 2025",
      location: "New Delhi, India",
      points: [
        "Crafted responsive and highly interactive UI elements using React & Tailwind CSS.",
        "Collaborated on designing and compiling a reusable component library, boosting UX engagement by 40%.",
        "Optimized web vitals, bundle sizes, and visual layouts for speed and mobile responsiveness."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Jamia Millia Islamia",
      duration: "2022 – 2026",
      location: "New Delhi, India",
      details: "Specializing in software engineering, algorithms, and full-stack development. Active member of technical clubs."
    },
    {
      degree: "Senior Secondary Education (Class XII)",
      institution: "AMU Senior Secondary School",
      duration: "2020 – 2022",
      location: "Aligarh, India",
      details: "Completed with a focus on Mathematics, Physics, and Computer Science."
    }
  ];

  return (
    <section id="about-section" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            Professional background &amp; path
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Who I Am
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                I am a final-year Computer Engineering student and a passionate Full-Stack Developer with hands-on experience building scalable applications. I enjoy creating seamless interactions on the frontend while developing optimized, secure services on the backend.
              </p>
              
              <p className="text-gray-400 leading-relaxed text-sm mt-4">
                My approach to coding is driven by clean architecture, performance efficiency, and robust user experiences. Over the past couple of years, I have successfully delivered freelance modules, designed database architectures, and worked in collaborative environments during internships.
              </p>

              <div className="pt-6 border-t border-white/5 mt-6 space-y-3.5">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <MapPin size={15} className="text-blue-500" />
                  <span>Based in Okhla, New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Trophy size={15} className="text-yellow-500" />
                  <span>LeetCode solver (520+ problems solved)</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Download CV / Resume
                  <Download size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Timeline / Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Tab Buttons */}
            <div className="flex gap-2 p-1 bg-white/[0.03] border border-white/5 rounded-2xl mb-6 max-w-sm">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-[#111827] text-white border border-white/10 shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase size={15} />
                Experience
              </button>
              
              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === "education"
                    ? "bg-[#111827] text-white border border-white/10 shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <GraduationCap size={16} />
                Education
              </button>
            </div>

            {/* Tab Contents */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="experience-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {experiences.map((exp, i) => (
                      <div 
                        key={i} 
                        className="glass-card rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 relative group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                              {exp.role}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                              <Building2 size={13} className="text-gray-500" />
                              <span>{exp.company}</span>
                              <span>•</span>
                              <MapPin size={13} className="text-gray-500" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs text-gray-400 font-medium whitespace-nowrap self-start sm:self-center">
                            <Calendar size={12} />
                            {exp.duration}
                          </div>
                        </div>
                        
                        <ul className="space-y-2.5 text-xs text-gray-400 pl-4 list-disc marker:text-blue-500">
                          {exp.points.map((pt, index) => (
                            <li key={index} className="leading-relaxed">{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="education-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {education.map((edu, i) => (
                      <div 
                        key={i} 
                        className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300 relative group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                              <Building2 size={13} className="text-gray-500" />
                              <span>{edu.institution}</span>
                              <span>•</span>
                              <MapPin size={13} className="text-gray-500" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs text-gray-400 font-medium whitespace-nowrap self-start sm:self-center">
                            <Calendar size={12} />
                            {edu.duration}
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {edu.details}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
