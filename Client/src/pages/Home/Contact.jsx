import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ innerRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={innerRef}
      id="contact"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-xl">
            <Sparkles size={14} className="text-purple-300" />
            <span className="text-sm text-gray-400 tracking-wide">
              Let’s Connect
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto">
            Open to freelance projects, internships, and
            full-stack software development opportunities.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <ContactCard
              icon={<Mail className="text-indigo-300" />}
              title="Email"
              value="shoebkhanjmi076@gmail.com"
            />

            <ContactCard
              icon={<Phone className="text-purple-300" />}
              title="Phone"
              value="+91 9536969183"
            />

            <ContactCard
              icon={<MapPin className="text-pink-300" />}
              title="Location"
              value="Okhla, New Delhi"
            />

            <ContactCard
              icon={<Briefcase className="text-cyan-300" />}
              title="Availability"
              value="Open for opportunities"
            />

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <SocialIcon
                href="https://github.com/Shoeb-code"
                icon={<Github size={20} />}
              />

              <SocialIcon
                href="https://linkedin.com/in/shoeb-khan-480b58259"
                icon={<Linkedin size={20} />}
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 space-y-6 hover:border-purple-400/20 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] transition-all duration-500"
          >
            <InputField
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none resize-none transition-all duration-300"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 hover:border-indigo-300 font-semibold text-white inline-flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(168,85,247,0.35)]"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={18} />}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully 🚀
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Failed to send message ❌
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)] transition-all duration-300">
      <div>{icon}</div>

      <div>
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {title}
        </p>
        <p className="text-gray-200 font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white hover:border-indigo-400/30 hover:shadow-[0_8px_20px_rgba(99,102,241,0.15)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function InputField({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className="w-full px-4 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none transition-all duration-300"
    />
  );
}