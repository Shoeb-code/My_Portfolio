import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "DSA",  id: "dsa" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Header({ scrollToContact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  // 🔹 Navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Scroll Spy (auto active link update)
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "About";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item.label;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 🔥 Smooth scroll with offset (fixes hidden section issue)
  const handleNavClick = (item) => {
    setActive(item.label);

    const section = document.getElementById(item.id);

    if (section) {
      const yOffset = -90; // adjust based on navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (item.label === "Contact") scrollToContact();

    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center px-4"
    >
      <div
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300
        ${
          scrolled
            ? "bg-[#0a0a0a]/80 border-white/10 backdrop-blur-xl"
            : "bg-[#0a0a0a]/40 border-white/5 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="text-lg font-semibold tracking-tight text-gray-100">
            Shoeb<span className="text-gray-400">.dev</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative cursor-pointer"
                >
                  <span
                    className={`transition ${
                      active === item.label
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {active === item.label && (
                    <motion.div
                      layoutId="nav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-white/80 rounded-full"
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleNavClick({ label: "Contact", id: "contact" })}
              className="px-4 py-2 rounded-lg border text-gray-300 border-white/10 text-sm
                         hover:bg-white/10 transition flex items-center gap-2"
            >
              Hire Me
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="p-6 space-y-6">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="flex justify-between items-center text-lg cursor-pointer"
                  >
                    <span
                      className={
                        active === item.label
                          ? "text-white"
                          : "text-gray-400"
                      }
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight size={16} />
                  </div>
                ))}

                <button
                  onClick={() =>
                    handleNavClick({ label: "Contact", id: "contact" })
                  }
                  className="w-full mt-4 py-3 rounded-lg bg-gray-950  text-gray-300 font-medium"
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