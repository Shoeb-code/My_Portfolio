import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#000000] py-12 px-6 relative z-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-bold text-[#F5F5F7] cursor-pointer select-none flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF]" />
          <span>Shoeb Khan • Software Engineer</span>
        </div>

        {/* Navigation Anchors */}
        <div className="flex flex-wrap justify-center gap-5 text-xs text-[#86868B] font-mono">
          <button onClick={() => handleNavClick("about")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">About</button>
          <button onClick={() => handleNavClick("skills")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">Skills</button>
          <button onClick={() => handleNavClick("dsa")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">DSA</button>
          <button onClick={() => handleNavClick("services")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">Services</button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">Projects</button>
          <button onClick={() => handleNavClick("experience")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">Experience</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-[#F5F5F7] transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Social / Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex gap-3">
            <a 
              href="https://github.com/Shoeb-code" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#86868B] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a 
              href="https://linkedin.com/in/shoeb-khan-480b58259" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#86868B] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a 
              href="mailto:shoebkhanjmi076@gmail.com" 
              className="text-[#86868B] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
          
          <p className="text-[10px] text-[#86868B] font-mono">
            &copy; {currentYear} Shoeb Khan. Designed with Apple &amp; Swiss aesthetics.
          </p>
        </div>

      </div>
    </footer>
  );
}
