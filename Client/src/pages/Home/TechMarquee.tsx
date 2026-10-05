import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiDocker, 
  SiGit, 
  SiPrisma,
  SiVite
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function TechMarquee() {
  const techList: TechItem[] = [
    { name: "React 19", icon: <SiReact className="text-[#61DAFB]" size={15} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={15} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={15} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" size={15} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={15} /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" size={15} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={15} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={15} /> },
    { name: "Redis", icon: <SiRedis className="text-[#FF4438]" size={15} /> },
    { name: "Prisma", icon: <SiPrisma className="text-cyan-300" size={15} /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={15} /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" size={15} /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" size={15} /> }
  ];

  const doubleList = [...techList, ...techList, ...techList];

  return (
    <section className="py-8 bg-[#000000] border-y border-white/[0.06] overflow-hidden relative z-10 select-none">
      <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
        <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#86868B]">
          Ecosystem &amp; Frameworks
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left & right fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

        {/* Scrolling wrapper */}
        <div className="flex gap-4 shrink-0 min-w-full animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {doubleList.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0C] border border-white/[0.06] text-xs font-medium text-[#86868B] hover:text-[#F5F5F7] hover:border-white/20 transition-colors shrink-0 cursor-default"
            >
              <span>{tech.icon}</span>
              <span className="font-mono text-[11px]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
