import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  metric: string;
  review: string;
  rating: number;
  initials: string;
  color: string;
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const testimonials: Testimonial[] = [
    {
      id: "01",
      name: "Alex Peterson",
      role: "Founder & CTO",
      company: "SaaS Analytics",
      category: "Full-Stack Velocity",
      metric: "Ahead of Schedule",
      review: "Shoeb engineered our real-time analytics dashboard with exceptional precision. His mastery of React, TypeScript, and state management delivered clean, self-documenting code that scaled smoothly under production traffic from day one.",
      rating: 5,
      initials: "AP",
      color: "#2997FF"
    },
    {
      id: "02",
      name: "Sarah Jenkins",
      role: "Product Director",
      company: "EduFast Solutions",
      category: "Database & Backend Core",
      metric: "35% Faster Response",
      review: "Working with Shoeb was frictionless. He refactored our RESTful API endpoints and designed optimized MongoDB schemas that slashed platform loading times by 35%. His technical communication and execution reliability are top-tier.",
      rating: 5,
      initials: "SJ",
      color: "#30D158"
    },
    {
      id: "03",
      name: "Marcus Aurelius",
      role: "Lead Engineer",
      company: "Velo Labs",
      category: "UI/UX & Interactions",
      metric: "60 FPS Fluidity",
      review: "Shoeb built a bespoke interface with fluid micro-interactions using Framer Motion. The level of visual polish, sub-pixel alignment, and responsive ergonomics blew our design team and client stakeholders away.",
      rating: 5,
      initials: "MA",
      color: "#FFD60A"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as const }
    })
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#000000] overflow-hidden">
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] rounded-full blur-[160px] opacity-10 transition-colors duration-1000"
          style={{ backgroundColor: current.color }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto space-y-10">
        
        {/* Section Header: Swiss Minimalist */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Endorsements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-[#86868B] text-xs sm:text-sm leading-relaxed"
          >
            Verified feedback on architectural fidelity, rapid delivery, and senior-level communication.
          </motion.p>
        </div>

        {/* Compact Slide Showcase Card */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[220px]"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#0A0A0C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[90px] opacity-15 pointer-events-none transition-colors duration-700"
                style={{ backgroundColor: current.color }}
              />

              <div className="relative z-10 space-y-5">
                
                {/* Top Row: Ratings, Category & Metric Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.05] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#FFD60A] text-[#FFD60A]" />
                      ))}
                    </div>
                    <span className="text-white/20">•</span>
                    <span className="text-[11px] font-mono text-[#86868B]">
                      {current.category}
                    </span>
                  </div>

                  {/* Metric Badge */}
                  <div 
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium"
                    style={{ borderColor: `${current.color}35`, backgroundColor: `${current.color}0D`, color: current.color }}
                  >
                    <CheckCircle2 size={11} />
                    <span>{current.metric}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative space-y-2">
                  <Quote size={20} className="text-white/[0.06] absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-[14px] sm:text-[15px] text-[#D1D1D6] leading-relaxed pt-1 font-normal">
                    "{current.review}"
                  </p>
                </div>

                {/* Bottom Row: Client Profile & Slide Controls */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
                  
                  {/* Client Profile */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-9 h-9 rounded-xl bg-white/[0.03] border flex items-center justify-center font-bold text-xs select-none"
                      style={{ borderColor: `${current.color}40`, color: current.color }}
                    >
                      {current.initials}
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-[#F5F5F7]">
                        {current.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[#86868B]">
                        {current.role} • <span className="text-[#D1D1D6]">{current.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons & Dots */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 mr-1">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                          }}
                          className={`h-1 rounded-full transition-all cursor-pointer ${
                            i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handlePrev}
                      className="w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] text-[#86868B] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Previous Endorsement"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] text-[#86868B] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Next Endorsement"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Executive Verification Guarantee Strip */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.06] flex flex-wrap items-center justify-center sm:justify-between gap-3 text-center sm:text-left text-[11px] font-mono text-[#86868B]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30D158]" />
            <span className="text-[#F5F5F7] font-medium">100% Verified Production Delivery</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Zero Tech Debt</span>
            <span className="text-white/20">•</span>
            <span>Clean Code Standards</span>
            <span className="text-white/20">•</span>
            <span>Direct Communication</span>
          </div>
        </div>

      </div>
    </section>
  );
}



