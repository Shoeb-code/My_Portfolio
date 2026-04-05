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
    glow: "shadow-indigo-500/20",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    glow: "shadow-emerald-500/20",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Refresh Tokens",
      "Socket.IO",
      "Firebase",
      "Cloud Functions",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    glow: "shadow-orange-500/20",
    skills: [
      "MongoDB",
      "Mongoose",
      "Firestore",
      "MySQL",
      "SQL Joins",
      "Aggregation",
      "Indexing",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-pink-500 via-rose-500 to-red-500",
    glow: "shadow-pink-500/20",
    skills: [
      "React Native",
      "Expo",
      "Navigation",
      "Push Notifications",
      "Async Storage",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-sky-500 via-blue-500 to-indigo-500",
    glow: "shadow-blue-500/20",
    skills: [
      "Docker",
      "CI/CD",
      "Vercel",
      "Render",
      "Netlify",
      "Firebase Hosting",
      "GitHub Actions",
    ],
  },
  {
    title: "Core CS",
    icon: Cpu,
    color: "from-violet-500 via-fuchsia-500 to-pink-500",
    glow: "shadow-violet-500/20",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "OS",
      "CN",
      "System Design Basics",
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    color: "from-green-500 via-emerald-500 to-teal-500",
    glow: "shadow-green-500/20",
    skills: [
      "JWT",
      "OAuth",
      "Protected Routes",
      "Role-based Access",
      "Token Rotation",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-slate-500 via-gray-500 to-zinc-500",
    glow: "shadow-gray-500/20",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
      "Chrome DevTools",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
        >
          <span className="text-sm text-gray-300">
            My Technical Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-3xl mx-auto"
        >
          A production-ready tech stack focused on building scalable web,
          mobile, and backend applications with performance and clean
          architecture.
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
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group rounded-3xl border border-white/10 
                          bg-white/5 backdrop-blur-2xl p-6 shadow-2xl 
                          ${item.glow} hover:border-white/20 transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center
                           bg-gradient-to-r ${item.color}
                           shadow-xl mb-6 group-hover:scale-110 transition`}
              >
                <Icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-5">
                {item.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full
                               bg-white/5 border border-white/10
                               text-gray-300 hover:text-white
                               hover:border-white/30 transition"
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