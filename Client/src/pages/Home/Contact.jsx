import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MapPin,
  Briefcase,
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
      className="relative py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-gray-400 tracking-wide">
              Let’s Connect
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto">
            Open to freelance projects, internships, and full-stack
            software development opportunities.
          </p>
        </motion.div>

        {/* ===== Main Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ===== Left Contact Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ContactCard
              icon={<Mail className="text-indigo-400" />}
              title="Email"
              value="shoebkhanjmi076@gmail.com"
            />

            <ContactCard
              icon={<Phone className="text-indigo-400" />}
              title="Phone"
              value="+91 9536969183"
            />

            <ContactCard
              icon={<MapPin className="text-indigo-400" />}
              title="Location"
              value="Okhla, New delhi 110025"
            />

            <ContactCard
              icon={<Briefcase className="text-indigo-400" />}
              title="Availability"
              value="Open for opportunities"
            />

            {/* Social Links */}
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

          {/* ===== Contact Form ===== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10
                       rounded-3xl p-8 space-y-6 shadow-2xl"
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
              className="w-full px-4 py-4 rounded-xl bg-black/30
                         border border-white/10 text-gray-200
                         placeholder:text-gray-500
                         focus:border-indigo-400 focus:ring-1
                         focus:ring-indigo-400 outline-none
                         resize-none transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r
                         from-indigo-500 via-purple-500 to-pink-500
                         hover:scale-[1.02] transition duration-300
                         disabled:opacity-60 font-semibold text-white
                         inline-flex items-center justify-center gap-2"
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

/* ===== Reusable Components ===== */

function ContactCard({ icon, title, value }) {
  return (
    <div
      className="flex items-center gap-4 p-5 rounded-2xl
                 bg-white/5 border border-white/10
                 hover:border-white/20 transition"
    >
      <div>{icon}</div>

      <div>
        <p className="text-sm text-gray-500 tracking-wide uppercase">
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
      className="p-3 rounded-xl bg-white/5 border border-white/10
                 text-gray-300 hover:text-white
                 hover:border-white/20 hover:bg-white/10
                 transition"
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
      className="w-full px-4 py-4 rounded-xl bg-black/30
                 border border-white/10 text-gray-200
                 placeholder:text-gray-500
                 focus:border-indigo-400 focus:ring-1
                 focus:ring-indigo-400 outline-none
                 transition"
    />
  );
}