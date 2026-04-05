import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Header({ scrollToContact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item) => {
    setActive(item.label);

    if (item.label === "Contact") {
      scrollToContact();
    }

    document
      .getElementById(item.id)
      ?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w mx-auto  ">
        <nav
          className={`rounded-2xl border transition-all duration-300
                      ${
                        scrolled
                          ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl"
                          : "bg-white/5 backdrop-blur-xl border-white/10"
                      }`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            {/* ===== Logo ===== */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
            >
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Shoeb
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  .dev
                </span>
              </h1>
            </motion.div>

            {/* ===== Desktop Nav ===== */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="relative cursor-pointer"
                  >
                    <span
                      className={`text-sm font-medium transition
                        ${
                          active === item.label
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </span>

                    {active === item.label && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute -bottom-2 left-0 right-0 h-[2px]
                                   rounded-full bg-gradient-to-r
                                   from-indigo-400 to-pink-400"
                      />
                    )}
                  </li>
                ))}
              </ul>

              {/* Premium CTA */}
              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-xl
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           hover:scale-105 transition duration-300
                           text-sm font-medium inline-flex items-center gap-2"
              >
                Hire Me
                <ArrowRight size={16} />
              </button>
            </div>

            {/* ===== Mobile Button ===== */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ===== Mobile Menu ===== */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="md:hidden border-t border-white/10"
              >
                <ul className="flex flex-col p-6 gap-5">
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={`cursor-pointer transition
                        ${
                          active === item.label
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </li>
                  ))}

                  <button
                    onClick={scrollToContact}
                    className="mt-2 px-5 py-3 rounded-xl
                               bg-gradient-to-r from-indigo-500
                               via-purple-500 to-pink-500"
                  >
                    Hire Me
                  </button>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}