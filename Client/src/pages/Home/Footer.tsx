import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#030712] py-12 px-6 relative z-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold text-white cursor-pointer select-none"
        >
          Shoeb<span className="text-blue-500">.dev</span>
        </div>

        {/* Navigation Anchors */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-medium">
          <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors cursor-pointer">About</button>
          <button onClick={() => handleNavClick("skills")} className="hover:text-white transition-colors cursor-pointer">Skills</button>
          <button onClick={() => handleNavClick("dsa")} className="hover:text-white transition-colors cursor-pointer">DSA</button>
          <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">Services</button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-white transition-colors cursor-pointer">Projects</button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-white transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Social / Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex gap-4">
            <a 
              href="https://github.com/Shoeb-code" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub Redirect"
            >
              <Github size={15} />
            </a>
            <a 
              href="https://linkedin.com/in/shoeb-khan-480b58259" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn Redirect"
            >
              <Linkedin size={15} />
            </a>
            <a 
              href="mailto:shoebkhanjmi076@gmail.com" 
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Email Redirect"
            >
              <Mail size={15} />
            </a>
          </div>
          
          <p className="text-[10px] text-gray-600 font-mono">
            &copy; {currentYear} Shoeb Khan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
