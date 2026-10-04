import { 
  Atom, 
  Cpu, 
  Code2, 
  Wind, 
  Database, 
  Zap, 
  Box, 
  GitBranch, 
  Flame, 
  DatabaseZap 
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function TechMarquee() {
  const techList: TechItem[] = [
    { name: "React", icon: <Atom size={16} />, color: "text-cyan-400" },
    { name: "Node.js", icon: <Cpu size={16} />, color: "text-emerald-500" },
    { name: "TypeScript", icon: <Code2 size={16} />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <Wind size={16} />, color: "text-sky-400" },
    { name: "MongoDB", icon: <Database size={16} />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <Database size={16} />, color: "text-blue-500" },
    { name: "Redis", icon: <Zap size={16} />, color: "text-red-500" },
    { name: "Docker", icon: <Box size={16} />, color: "text-blue-400" },
    { name: "Git", icon: <GitBranch size={16} />, color: "text-orange-500" },
    { name: "Firebase", icon: <Flame size={16} />, color: "text-amber-500" },
    { name: "Prisma", icon: <DatabaseZap size={16} />, color: "text-purple-400" }
  ];

  // Double the list to make the marquee animation scroll infinitely and seamlessly
  const doubleList = [...techList, ...techList, ...techList];

  return (
    <section className="py-14 bg-[#030712]/50 border-y border-white/5 overflow-hidden relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-gray-500">
          Technologies I Work With
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left fade gradient blur overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient blur overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        {/* Scrolling wrapper */}
        <div className="flex gap-8 shrink-0 min-w-full animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {doubleList.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 text-sm font-semibold text-gray-300 hover:text-white hover:border-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300 shrink-0"
            >
              <span className={tech.color}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
