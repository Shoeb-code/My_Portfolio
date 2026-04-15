import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Smartphone,
  Cloud,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-indigo-500 via-violet-500 to-purple-500",
    shadow: "shadow-[0_10px_30px_rgba(99,102,241,0.25)]",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    shadow: "shadow-[0_10px_30px_rgba(16,185,129,0.22)]",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Socket.IO",
      "Firebase",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    shadow: "shadow-[0_10px_30px_rgba(249,115,22,0.22)]",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "SQL",
      "Aggregation",
      "Indexing",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-pink-500 via-rose-500 to-red-500",
    shadow: "shadow-[0_10px_30px_rgba(236,72,153,0.22)]",
    skills: [
      "React Native",
      "Expo",
      "Navigation",
      "Push Notifications",
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "from-sky-500 via-blue-500 to-indigo-500",
    shadow: "shadow-[0_10px_30px_rgba(59,130,246,0.22)]",
    skills: [
      "Docker",
      "CI/CD",
      "Vercel",
      "Render",
      "GitHub Actions",
    ],
  },
  {
    title: "Core CS",
    icon: Cpu,
    color: "from-violet-500 via-fuchsia-500 to-pink-500",
    shadow: "shadow-[0_10px_30px_rgba(168,85,247,0.22)]",
    skills: ["DSA", "OOP", "DBMS", "OS", "CN"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    color: "from-green-500 via-emerald-500 to-teal-500",
    shadow: "shadow-[0_10px_30px_rgba(34,197,94,0.22)]",
    skills: [
      "JWT",
      "OAuth",
      "Protected Routes",
      "Role-based Access",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-slate-500 via-gray-500 to-zinc-500",
    shadow: "shadow-[0_10px_30px_rgba(113,113,122,0.22)]",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-6 backdrop-blur-xl"
        >
          <span className="text-sm text-gray-400">
            Technical Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-300  bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-3xl mx-auto leading-8"
        >
          A production-ready tech stack focused on scalable web,
          mobile, and backend systems with clean architecture.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 hover:border-purple-400/20 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.color} ${item.shadow} mb-6 group-hover:scale-110 transition-all duration-300`}
              >
                <Icon size={26} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-5">
                {item.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white hover:border-indigo-400/30 hover:shadow-[0_6px_20px_rgba(99,102,241,0.15)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}