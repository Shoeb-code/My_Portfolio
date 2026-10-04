import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  Github, 
  Linkedin, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  innerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Contact({ innerRef }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message details are required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFocus = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocusedFields(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error when editing
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
          message: formData.message,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFocusedFields({});
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
      className="relative py-28 px-6 bg-[#030712] overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[125px]" />
        <div className="absolute bottom-[20%] right-[5%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[125px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Sparkles size={13} className="text-blue-400" />
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
              Let's Connect
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Start A Project
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Got an idea, software spec, or a freelance opening? Send a message and let's coordinate.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <ContactMethodCard
              icon={<Mail className="text-blue-400" size={18} />}
              title="Email Address"
              value="shoebkhanjmi076@gmail.com"
              href="mailto:shoebkhanjmi076@gmail.com"
            />
            
            <ContactMethodCard
              icon={<MessageSquare className="text-green-400" size={18} />}
              title="WhatsApp Chat"
              value="+91 9536969183"
              href="https://wa.me/919536969183"
            />

            <ContactMethodCard
              icon={<MapPin className="text-purple-400" size={18} />}
              title="Location"
              value="Okhla, New Delhi, India"
            />

            <ContactMethodCard
              icon={<Clock className="text-cyan-400" size={18} />}
              title="Availability Status"
              value="Open for opportunities &amp; freelance gigs"
            />

            {/* Quick Links Row */}
            <div className="pt-4 flex gap-3.5">
              <a
                href="https://github.com/Shoeb-code"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer"
                aria-label="GitHub Profile Link"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/shoeb-khan-480b58259"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn Profile Link"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form with float actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-[2rem] p-8 border border-white/5 shadow-2xl relative space-y-6 glow-border overflow-hidden"
            >
              {/* Form Input fields */}
              
              {/* Name Field */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="form_name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className="block py-4 px-4 w-full text-sm text-white bg-white/[0.02] rounded-2xl border border-white/5 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="form_name"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0c101d] px-2 rounded-md left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 pointer-events-none ${
                    focusedFields.name || formData.name ? "top-2 -translate-y-4 scale-75 text-blue-500" : "top-1/2 -translate-y-1/2 scale-100 text-gray-500"
                  }`}
                >
                  Your Name
                </label>
                {errors.name && (
                  <p className="text-[10px] text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="form_email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  className="block py-4 px-4 w-full text-sm text-white bg-white/[0.02] rounded-2xl border border-white/5 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 transition-all duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="form_email"
                  className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0c101d] px-2 rounded-md left-3 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 pointer-events-none ${
                    focusedFields.email || formData.email ? "top-2 -translate-y-4 scale-75 text-blue-500" : "top-1/2 -translate-y-1/2 scale-100 text-gray-500"
                  }`}
                >
                  Your Email
                </label>
                {errors.email && (
                  <p className="text-[10px] text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Details */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="form_message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                  className="block py-4 px-4 w-full text-sm text-white bg-white/[0.02] rounded-2xl border border-white/5 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 resize-none transition-all duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="form_message"
                  className={`absolute text-sm text-gray-500 duration-300 transform top-4 z-10 origin-[0] bg-[#0c101d] px-2 rounded-md left-3 pointer-events-none ${
                    focusedFields.message || formData.message ? "-translate-y-6 scale-75 text-blue-500" : "scale-100 text-gray-500"
                  }`}
                >
                  Project Details
                </label>
                {errors.message && (
                  <p className="text-[10px] text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={15} />}
              </button>

              {/* Status Feedbacks */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl text-xs"
                  >
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Message sent successfully! I will respond within 24 hours. 🚀</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 bg-red-500/5 border border-red-500/10 p-4 rounded-xl text-xs"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>Failed to submit. Please email me directly or retry. ❌</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

interface ContactMethodCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

function ContactMethodCard({ icon, title, value, href }: ContactMethodCardProps) {
  const content = (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-blue-500/25 transition-all duration-300 select-none cursor-pointer">
      <div className="p-3 rounded-xl bg-white/[0.02] w-fit shrink-0">
        {icon}
      </div>
      <div>
        <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-medium mb-0.5">{title}</span>
        <span className="text-xs sm:text-sm font-semibold text-gray-200">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block select-none">
        {content}
      </a>
    );
  }

  return content;
}
