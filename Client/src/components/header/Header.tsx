import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  scrollToContact: () => void;
}

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "DSA", id: "dsa" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Header({ scrollToContact }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Scroll Spy to highlight active section in navbar
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "About";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = item.label;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = (item: { label: string; id: string }) => {
    setActive(item.label);
    const section = document.getElementById(item.id);

    if (section) {
      const yOffset = -80; // offset navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (item.label === "Contact") {
      scrollToContact();
    }

    setOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex justify-center py-3 px-4 sm:px-8 transition-all duration-300">
      <div
        className={`w-full max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0C]/90 border-white/[0.14] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
            : "bg-[#0A0A0C]/60 border-white/[0.08] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-3.5">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base sm:text-lg font-bold tracking-tight text-[#F5F5F7] cursor-pointer select-none flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2997FF]" />
            <span>Shoeb<span className="text-[#86868B] font-normal">.dev</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1.5 text-sm sm:text-[15px] font-medium">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative cursor-pointer py-1.5 px-3.5 select-none"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      active === item.label
                        ? "text-[#F5F5F7] font-semibold"
                        : "text-[#86868B] hover:text-[#F5F5F7]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {active === item.label && (
                    <motion.div
                      layoutId="header-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full"
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Apple Style Action Button */}
            <button
              onClick={() => handleNavClick({ label: "Contact", id: "contact" })}
              className="px-5 py-2 rounded-full bg-[#F5F5F7] text-black text-sm font-semibold hover:bg-[#E5E5EA] transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden text-[#86868B] hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/[0.08] overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 bg-[#0A0A0C]/95 backdrop-blur-2xl rounded-b-3xl">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="flex justify-between items-center py-2.5 text-base cursor-pointer hover:bg-white/[0.04] rounded-xl px-3 transition-colors"
                  >
                    <span
                      className={
                        active === item.label
                          ? "text-white font-semibold"
                          : "text-[#86868B] hover:text-white"
                      }
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight size={16} className="text-[#86868B]" />
                  </div>
                ))}

                <button
                  onClick={() => handleNavClick({ label: "Contact", id: "contact" })}
                  className="w-full mt-3 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#E5E5EA] transition-all text-center cursor-pointer shadow-md"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
