import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";

/* ─── tiny hook ─────────────────────────────────────────────── */
function useHover() {
  const [hovered, setHovered] = useState(false);
  return [hovered, { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) }];
}

/* ─── Project Row ────────────────────────────────────────────── */
function ProjectRow({ project, index }) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [imgHov, imgHovProps] = useHover();
  const [ghHov, ghHovProps] = useHover();
  const [liveHov, liveHovProps] = useHover();
  const [caseHov, caseHovProps] = useHover();
  const flip = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
        marginBottom: "8rem",
      }}
    >
      {/* ── Info ── */}
      <div style={{ order: flip ? 2 : 1 }}>
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "0.75rem",
          }}
        >
          Featured Project · {String(index + 1).padStart(2, "0")}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "-apple-system, 'SF Pro Display', sans-serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#f5f5f7",
            marginBottom: "1.25rem",
          }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
            fontSize: 17,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.38, duration: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.25rem" }}
        >
          {project.tech.map((t, i) => (
            <span
              key={t}
              style={{
                fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                padding: "5px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.01em",
                transition: "all 0.25s",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            {...ghHovProps}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "10px 20px",
              borderRadius: 14,
              border: `1px solid ${ghHov ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)"}`,
              background: ghHov ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
              color: ghHov ? "#f5f5f7" : "rgba(255,255,255,0.6)",
              fontSize: 14, fontWeight: 500,
              fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(.22,1,.36,1)",
              cursor: "pointer",
            }}
          >
            <Github size={16} />
            Source Code
          </a>

          {/* Live */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              {...liveHovProps}
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "10px 20px",
                borderRadius: 14,
                border: `1px solid ${liveHov ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)"}`,
                background: liveHov ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
                color: liveHov ? "#f5f5f7" : "rgba(255,255,255,0.6)",
                fontSize: 14, fontWeight: 500,
                fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(.22,1,.36,1)",
                cursor: "pointer",
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          {/* Case Study */}
          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            {...caseHovProps}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "10px 22px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.18)",
              background: caseHov ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
              color: caseHov ? "#fff" : "rgba(255,255,255,0.85)",
              fontSize: 14, fontWeight: 600,
              fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(.22,1,.36,1)",
              transform: caseHov ? "scale(1.02)" : "scale(1)",
            }}
          >
            View Case Study
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* ── Image ── */}
      <motion.div
        {...imgHovProps}
        style={{
          order: flip ? 1 : 2,
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          border: `1px solid ${imgHov ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)"}`,
          background: "rgba(255,255,255,0.03)",
          transform: imgHov ? "translateY(-6px) scale(1.015)" : "translateY(0) scale(1)",
          transition: "transform 0.5s cubic-bezier(.22,1,.36,1), border-color 0.4s, box-shadow 0.4s",
          boxShadow: imgHov
            ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Shimmer overlay on hover */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
            opacity: imgHov ? 1 : 0,
            transition: "opacity 0.4s",
            pointerEvents: "none",
            borderRadius: 24,
          }}
        />

        <img
          src={project.image}
          alt={project.title}
          style={{
            display: "block",
            width: "100%",
            height: 420,
            objectFit: "cover",
            transform: imgHov ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
          }}
        />

        {/* Number badge */}
        <div
          style={{
            position: "absolute", top: 18, right: 18, zIndex: 3,
            fontFamily: "-apple-system, 'SF Pro Display', sans-serif",
            fontSize: 12, fontWeight: 600,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            padding: "4px 12px",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {Object.values(projects).length.toString().padStart(2, "0")}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function Projects() {
  const projectList = Object.values(projects);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      style={{
        background: "#000",
        color: "#f5f5f7",
        padding: "6rem 0 4rem",
        fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        overflowX: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div
        ref={headerRef}
        style={{ textAlign: "center", marginBottom: "5.5rem", padding: "0 1.5rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 18px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#fff",
            opacity: 0.7,
            display: "inline-block",
          }} />
          <span style={{
            fontSize: 13, fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em",
            fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
          }}>
            Featured Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
            marginBottom: "1.25rem",
            background: "linear-gradient(160deg, #fff 40%, rgba(255,255,255,0.4))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects That<br />Create Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.22, duration: 0.8 }}
          style={{
            fontSize: 17,
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            maxWidth: 520,
            margin: "0 auto",
            fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
          }}
        >
          Real-world applications built with scalable architecture,
          modern UI, and production-ready engineering.
        </motion.p>
      </div>

      {/* ── Divider ── */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto 5rem",
        padding: "0 2.5rem",
      }}>
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* ── Project Rows ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {projectList.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>

    
    </section>
  );
}

/* ─── Footer CTA ─────────────────────────────────────────────── */
