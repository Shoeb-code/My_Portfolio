import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  initials: string;
  color: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Alex Peterson",
      role: "Founder & CTO",
      company: "SaaS Analytics Platform",
      review: "Shoeb did an incredible job building out our analytics dashboard. His expertise in React, TypeScript, and Tailwind was evident from day one. He delivered clean, well-documented, and highly optimized code two weeks ahead of schedule.",
      rating: 5,
      initials: "AP",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Sarah Jenkins",
      role: "Product Director",
      company: "EduFast Solutions",
      review: "Working with Shoeb was seamless. He helped refactor our API endpoints and integrated MongoDB schemas that reduced our platform's loading times by 35%. He is highly responsive, detail-oriented, and a great communicator.",
      rating: 5,
      initials: "SJ",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Marcus Aurelius",
      role: "Lead Engineer",
      company: "Velo Labs",
      review: "Shoeb helped us build a highly custom UI prototype with detailed micro-animations using Framer Motion. The visual polish he achieved was outstanding, and our clients were blown away by the responsiveness on mobile devices.",
      rating: 5,
      initials: "MA",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index, isAutoplay]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Sliding motion variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            What clients say about my work
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full glass-card rounded-[2.2rem] p-8 sm:p-10 border border-white/5 shadow-2xl relative"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-6 right-8 text-white/5 w-16 h-16 pointer-events-none" />

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Client Avatar Graphic */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr ${current.color} flex items-center justify-center font-bold text-white text-lg sm:text-xl shrink-0 shadow-lg select-none`}>
                  {current.initials}
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base leading-relaxed text-gray-300 italic">
                    "{current.review}"
                  </p>

                  {/* Author Meta */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {current.role} • <span className="text-blue-400 font-semibold">{current.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Index Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-8 bg-blue-500" : "w-2 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
