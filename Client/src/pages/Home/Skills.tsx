import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Atom, 
  Code2, 
  Wind, 
  Sparkles, 
  Layers, 
  Cpu, 
  Server, 
  Database, 
  Zap, 
  DatabaseZap,
  GitBranch, 
  Box, 
  Flame, 
  Terminal, 
  Send
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: string;
  glow: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

// 3D Tilt Card wrapper using Framer Motion springs
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(25px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Building responsive, highly-interactive, client-facing applications.",
      skills: [
        { name: "React", icon: <Atom size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
        { name: "TypeScript", icon: <Code2 size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
        { name: "Next.js", icon: <Layers size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
        { name: "Tailwind CSS", icon: <Wind size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" },
        { name: "Framer Motion", icon: <Sparkles size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" }
      ]
    },
    {
      title: "Backend & Databases",
      description: "Developing robust backends, secure APIs, and managing databases.",
      skills: [
        { name: "Node.js", icon: <Cpu size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]" },
        { name: "Express.js", icon: <Server size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(156,163,175,0.2)]" },
        { name: "Prisma ORM", icon: <DatabaseZap size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
        { name: "PostgreSQL", icon: <Database size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
        { name: "MongoDB", icon: <Database size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]" },
        { name: "Redis Cache", icon: <Zap size={18} />, level: "Intermediate", glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]" }
      ]
    },
    {
      title: "Tools & Deployments",
      description: "Optimizing dev workflows, version control, and containerization.",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
        { name: "Docker", icon: <Box size={18} />, level: "Intermediate", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
        { name: "Firebase", icon: <Flame size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]" },
        { name: "VS Code", icon: <Terminal size={18} />, level: "Expert", glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" },
        { name: "Postman API", icon: <Send size={18} />, level: "Advanced", glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] left-[-5%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            My skill set categorized by layers
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col h-full"
            >
              {/* Category Container */}
              <TiltCard className="glass-card rounded-[2rem] p-7 border border-white/5 flex flex-col h-full hover:border-blue-500/20 transition-all duration-500 shadow-xl glow-border">
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3.5 mt-auto">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 6 }}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 group transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-[#030712] border border-white/5 text-gray-400 group-hover:text-white transition-all duration-300 ${skill.glow}`}>
                          {skill.icon}
                        </div>
                        <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
