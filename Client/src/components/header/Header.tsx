import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
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
  { label: "Contact", id: "contact" },
];

export default function Header({ scrollToContact }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up
    }
    setScrolled(latest > 30);
  });

  // Scroll Spy to highlight active section in navbar
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "About";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the top of the section is near the middle of the screen
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
      const yOffset = -90; // offset navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (item.label === "Contact") {
      scrollToContact();
    }

    setOpen(false);
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center px-4"
    >
      <div
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/75 border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-white/5 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-tight text-white cursor-pointer select-none"
          >
            Shoeb<span className="text-blue-500 font-semibold">.dev</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative cursor-pointer py-1 px-2 select-none"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active === item.label
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {active === item.label && (
                    <motion.div
                      layoutId="navbar-underline"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleNavClick({ label: "Contact", id: "contact" })}
              className="px-4 py-2 rounded-xl border text-white border-white/10 text-sm font-medium
                         bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                         transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              Hire Me
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden text-gray-300 hover:text-white transition-colors cursor-pointer"
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
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 bg-[#030712]/95 backdrop-blur-2xl rounded-b-2xl">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="flex justify-between items-center py-2 text-base cursor-pointer hover:bg-white/5 rounded-lg px-2 transition-colors"
                  >
                    <span
                      className={
                        active === item.label
                          ? "text-white font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                          : "text-gray-400 hover:text-white"
                      }
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight size={16} className="text-gray-500" />
                  </div>
                ))}

                <button
                  onClick={() => handleNavClick({ label: "Contact", id: "contact" })}
                  className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all text-center shadow-lg cursor-pointer"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
