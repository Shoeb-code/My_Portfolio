import { motion } from "framer-motion";
import { 
  Globe, 
  Atom, 
  Cpu, 
  BarChart3, 
  Settings, 
  Sparkles, 
  KeyRound, 
  Database 
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Full Stack Web Apps",
      description: "End-to-end web applications with secure backends, real-time sync, and fluid client-side responsive interactions.",
      icon: <Globe size={22} />,
      color: "group-hover:text-blue-400 group-hover:border-blue-500/30"
    },
    {
      title: "React Websites",
      description: "Modern, high-performance static or dynamic SPA/MPA websites optimized for SEO, web vitals, and conversion rates.",
      icon: <Atom size={22} />,
      color: "group-hover:text-cyan-400 group-hover:border-cyan-500/30"
    },
    {
      title: "Backend APIs",
      description: "Secure, optimized RESTful or GraphQL APIs written in Express/Node.js, featuring rate-limiting, documentation, and JWT validations.",
      icon: <Cpu size={22} />,
      color: "group-hover:text-emerald-400 group-hover:border-emerald-500/30"
    },
    {
      title: "Dashboard Development",
      description: "Complex analytical tools and data visualization layouts using performance-centric charts, filtering, and real-time streams.",
      icon: <BarChart3 size={22} />,
      color: "group-hover:text-purple-400 group-hover:border-purple-500/30"
    },
    {
      title: "Admin Panels",
      description: "Internal business systems designed with role-based accessibility, logging, table formatting, and CRUD dashboard modules.",
      icon: <Settings size={22} />,
      color: "group-hover:text-pink-400 group-hover:border-pink-500/30"
    },
    {
      title: "Portfolio Websites",
      description: "Premium personal showcase sites utilizing premium design systems, motion layout reveals, animations, and contact flows.",
      icon: <Sparkles size={22} />,
      color: "group-hover:text-yellow-400 group-hover:border-yellow-500/30"
    },
    {
      title: "Authentication Systems",
      description: "Secure user registration flows using JWT credentials, session handling, cookie controls, OAuth integrations, and protected routing.",
      icon: <KeyRound size={22} />,
      color: "group-hover:text-indigo-400 group-hover:border-indigo-500/30"
    },
    {
      title: "Database Design",
      description: "Custom schemas, aggregation streams, caching patterns, indexing operations, and relational/document setups with MongoDB or PostgreSQL.",
      icon: <Database size={22} />,
      color: "group-hover:text-teal-400 group-hover:border-teal-500/30"
    }
  ];

  return (
    <section id="services" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50%] left-[15%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            What I Can Build
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            Freelance services &amp; engineering solutions
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-[2rem] p-6.5 border border-white/5 flex flex-col justify-between hover:border-blue-500/20 hover:shadow-[0_15px_30px_rgba(59,130,246,0.06)] transition-all duration-300 group cursor-default"
            >
              <div>
                {/* Icon block */}
                <div className={`w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 mb-5 transition-all duration-300 ${svc.color}`}>
                  {svc.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-xs text-gray-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Minimal aesthetic line */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
