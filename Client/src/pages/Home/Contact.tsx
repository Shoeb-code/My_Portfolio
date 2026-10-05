import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Terminal
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  innerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Contact({ innerRef }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Full-Stack Web App",
    "Frontend Engineering",
    "Backend & APIs",
    "Technical Consultation"
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief summary of your project or inquiry";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Message should be at least 8 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) return;
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ 
        name: "", 
        email: "", 
        projectType: "Full-Stack Web App", 
        message: "" 
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      ref={innerRef} 
      id="contact" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-12 bg-[#000000] overflow-hidden"
    >
      {/* Apple Pro Subtle Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[450px] bg-gradient-to-b from-[#2997FF]/10 via-[#BF5AF2]/5 to-transparent blur-[160px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-[#30D158]/5 to-transparent blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header: Swiss Minimalist & High Contrast */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] text-[15px] sm:text-lg leading-relaxed"
          >
            Have a project in mind, a technical opening, or an architectural challenge? Reach out directly.
          </motion.p>
        </div>

        {/* Contact Layout Grid (5 cols + 7 cols on desktop) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels & Hub */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Primary Channel: Email with Quick Copy */}
            <div className="p-6 rounded-3xl bg-[#0A0A0C]/90 border border-white/[0.08] hover:border-white/[0.18] backdrop-blur-2xl shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#2997FF]/10 border border-[#2997FF]/20 flex items-center justify-center text-[#2997FF] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#86868B] block">Email Channel</span>
                    <a 
                      href="mailto:shoebkhanjmi076@gmail.com" 
                      className="text-base sm:text-lg font-bold text-[#F5F5F7] hover:text-[#2997FF] transition-colors break-all"
                    >
                      shoebkhanjmi076@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("shoebkhanjmi076@gmail.com")}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#86868B] hover:text-white hover:border-white/20 transition-all cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check size={16} className="text-[#30D158]" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#86868B]">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[#30D158]" />
                  Response time: &lt; 24h
                </span>
                <span className="text-[#2997FF] flex items-center gap-1">
                  Click to launch <ArrowUpRight size={12} />
                </span>
              </div>
            </div>

            {/* Secondary Channel: WhatsApp Direct */}
            <a
              href="https://wa.me/919536969183"
              target="_blank"
              rel="noreferrer"
              className="block p-6 rounded-3xl bg-[#0A0A0C]/90 border border-white/[0.08] hover:border-white/[0.18] backdrop-blur-2xl shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center text-[#30D158] shrink-0">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#86868B] block">Instant Messaging</span>
                    <span className="text-base sm:text-lg font-bold text-[#F5F5F7] group-hover:text-[#30D158] transition-colors">
                      +91 9536969183
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#86868B] group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#86868B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#30D158]" />
                  Available for technical inquiries
                </span>
                <span>WhatsApp</span>
              </div>
            </a>

            {/* Location & Timezone Hub */}
            <div className="p-6 rounded-3xl bg-[#0A0A0C]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#BF5AF2]/10 border border-[#BF5AF2]/20 flex items-center justify-center text-[#BF5AF2] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#86868B] block">Current Base & Timezone</span>
                  <div className="text-base sm:text-lg font-bold text-[#F5F5F7]">
                    New Delhi, India
                  </div>
                  <span className="text-xs font-mono text-[#86868B]">
                    IST (UTC +5:30) • Open to Global Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels Pill Hub */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://github.com/Shoeb-code"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl border border-white/[0.08] bg-[#0A0A0C]/90 hover:bg-white/[0.04] text-[#86868B] hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-medium shadow-md group"
              >
                <Github size={17} className="text-[#F5F5F7] group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="opacity-60" />
              </a>

              <a
                href="https://linkedin.com/in/shoeb-khan-480b58259"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl border border-white/[0.08] bg-[#0A0A0C]/90 hover:bg-white/[0.04] text-[#86868B] hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-medium shadow-md group"
              >
                <Linkedin size={17} className="text-[#2997FF] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="opacity-60" />
              </a>
            </div>

            {/* Quality Commitment Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3 text-xs text-[#86868B]">
              <ShieldCheck size={18} className="text-[#30D158] shrink-0" />
              <span>Full confidentiality & professional code standards guaranteed on all inquiries.</span>
            </div>

          </motion.div>

          {/* Right Column: Apple-Style Communication Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0A0A0C]/90 rounded-3xl p-6 sm:p-10 border border-white/[0.09] hover:border-white/[0.18] shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300">
              
              {/* Form Terminal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#86868B]">
                  <Terminal size={14} className="text-[#2997FF]" />
                  <span>DISPATCH_MESSAGE.REQUEST</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2997FF]/60" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Project Focus Selection Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                    Project Domain / Requirement
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          formData.projectType === type
                            ? "bg-[#2997FF]/15 border-[#2997FF] text-[#F5F5F7] shadow-[0_0_12px_rgba(41,151,255,0.3)]"
                            : "bg-white/[0.02] border-white/[0.08] text-[#86868B] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email 2-Column Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="form_name" className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                      Your Name <span className="text-[#FF453A]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="form_name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full py-3.5 px-4 text-[15px] text-[#F5F5F7] bg-white/[0.03] rounded-2xl border border-white/[0.09] focus:outline-none focus:border-[#2997FF] focus:ring-1 focus:ring-[#2997FF]/30 transition-all placeholder:text-[#55555A]"
                      placeholder="e.g. Sarah Jenkins"
                    />
                    {errors.name && (
                      <p className="text-xs text-[#FF453A] flex items-center gap-1 font-mono">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="form_email" className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                      Your Email <span className="text-[#FF453A]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="form_email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-3.5 px-4 text-[15px] text-[#F5F5F7] bg-white/[0.03] rounded-2xl border border-white/[0.09] focus:outline-none focus:border-[#2997FF] focus:ring-1 focus:ring-[#2997FF]/30 transition-all placeholder:text-[#55555A]"
                      placeholder="sarah@company.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#FF453A] flex items-center gap-1 font-mono">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="form_message" className="text-xs font-mono uppercase tracking-wider text-[#86868B]">
                    Project Scope / Details <span className="text-[#FF453A]">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="form_message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-3.5 px-4 text-[15px] text-[#F5F5F7] bg-white/[0.03] rounded-2xl border border-white/[0.09] focus:outline-none focus:border-[#2997FF] focus:ring-1 focus:ring-[#2997FF]/30 resize-none transition-all placeholder:text-[#55555A]"
                    placeholder="Tell me about your product requirements, architectural goals, or timeframe..."
                  />
                  {errors.message && (
                    <p className="text-xs text-[#FF453A] flex items-center gap-1 font-mono">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-[#F5F5F7] hover:bg-white text-black font-bold text-base disabled:opacity-60 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Transmitting Message...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 text-[#30D158] bg-[#30D158]/10 border border-[#30D158]/30 p-4 rounded-2xl text-[14px] leading-relaxed"
                    >
                      <CheckCircle2 size={18} className="shrink-0 text-[#30D158]" />
                      <span>Message received successfully. I will review your inquiry and reply within 24 hours.</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 text-[#FF453A] bg-[#FF453A]/10 border border-[#FF453A]/30 p-4 rounded-2xl text-[14px] leading-relaxed"
                    >
                      <AlertCircle size={18} className="shrink-0 text-[#FF453A]" />
                      <span>Transmission failed. Please reach out directly at <strong className="underline">shoebkhanjmi076@gmail.com</strong></span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
