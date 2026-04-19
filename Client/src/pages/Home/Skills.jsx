import { useEffect, useRef, useState } from "react";

const icons = {
  Frontend: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <rect x="2" y="3" width="16" height="13" rx="2" stroke="currentColor" />
      <path d="M7 9L4 10.5 7 12M13 9l3 1.5L13 12M11 7l-2 6" stroke="currentColor" />
    </svg>
  ),
  Backend: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <rect x="2" y="4" width="16" height="5" rx="1.5" stroke="currentColor" />
      <rect x="2" y="11" width="16" height="5" rx="1.5" stroke="currentColor" />
      <circle cx="15.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="13.5" r="1" fill="currentColor" />
    </svg>
  ),
  Database: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <ellipse cx="10" cy="5.5" rx="7" ry="2.5" stroke="currentColor" />
      <path d="M3 5.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" stroke="currentColor" />
      <path d="M3 9.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" stroke="currentColor" />
    </svg>
  ),
  Mobile: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <rect x="5.5" y="2" width="9" height="16" rx="2.5" stroke="currentColor" />
      <circle cx="10" cy="15" r="0.8" fill="currentColor" />
      <path d="M8 4.5h4" stroke="currentColor" />
    </svg>
  ),
  DevOps: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" />
      <path d="M2.5 10h15M10 2.5c-3 2.5-3 12.5 0 15M10 2.5c3 2.5 3 12.5 0 15" stroke="currentColor" />
    </svg>
  ),
  "Core CS": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 2v16M2 10h16" stroke="currentColor" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  Security: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2l8 3.5V11c0 4.5-3.5 6.5-8 8-4.5-1.5-8-3.5-8-8V5.5L10 2z" stroke="currentColor" />
      <path d="M7 10l2.5 2.5L14 8" stroke="currentColor" />
    </svg>
  ),
  Tools: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <path d="M13 3a4.5 4.5 0 010 6.5L5 17a1.5 1.5 0 01-2-2l7.5-8A4.5 4.5 0 0113 3z" stroke="currentColor" />
      <circle cx="6.5" cy="13.5" r="0.8" fill="currentColor" />
    </svg>
  ),
};

const skillsData = [
  {
    title: "Frontend",
    level: 95,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "JavaScript", "React Native"],
    hero: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    level: 94,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.IO", "Firebase"],
    hero: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    level: 92,
    skills: ["MongoDB", "Mongoose", "MySQL", "SQL", "Aggregation", "Indexing"],
    hero: ["MongoDB", "MySQL"],
  },
  {
    title: "Mobile",
    level: 90,
    skills: ["React Native", "Expo", "Navigation", "Push Notifications"],
    hero: ["React Native", "Expo"],
  },
  {
    title: "DevOps",
    level: 92,
    skills: ["Docker", "CI/CD", "Vercel", "Render", "GitHub Actions"],
    hero: ["Docker", "CI/CD"],
  },
  {
    title: "Core CS",
    level: 95,
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
    hero: ["DSA", "OOP"],
  },
  {
    title: "Security",
    level: 98,
    skills: ["JWT", "OAuth", "Protected Routes", "Role-based Access"],
    hero: ["JWT", "OAuth"],
  },
  {
    title: "Tools",
    level: 92,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    hero: ["Git", "Figma"],
  },
];

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(ref.current);
      }
    }, { threshold: 0.08, ...options });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function SkillRow({ data, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setFillWidth(data.level), index * 70 + 250);
      return () => clearTimeout(t);
    }
  }, [inView]);

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    padding: "1.6rem 1.8rem",
    background: hovered ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.03)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    gap: "1.4rem",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${index * 70}ms, transform 0.65s cubic-bezier(.22,1,.36,1) ${index * 70}ms, background 0.3s ease`,
    cursor: "default",
    position: "relative",
    overflow: "hidden",
  };

  const iconStyle = {
    width: 44, height: 44,
    borderRadius: 12,
    background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
    border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
    color: hovered ? "#fff" : "rgba(255,255,255,0.7)",
    transition: "all 0.3s ease",
  };

  return (
    <div
      ref={ref}
      style={rowStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={iconStyle}>{icons[data.title]}</div>

      <div style={{ flex: "0 0 130px" }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.01em", marginBottom: 3 }}>
          {data.title}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          {data.skills.length} technologies
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {data.skills.map((skill, pi) => {
          const isHero = data.hero.includes(skill);
          const delay = index * 80 + pi * 40 + 200;
          return (
            <span
              key={skill}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "5px 13px",
                borderRadius: 999,
                background: hovered
                  ? isHero ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)"
                  : isHero ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${hovered
                  ? isHero ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.15)"
                  : isHero ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                color: hovered
                  ? isHero ? "#fff" : "rgba(255,255,255,0.7)"
                  : isHero ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1) translateY(0)" : "scale(0.88) translateY(4px)",
                transition: `opacity 0.4s cubic-bezier(.34,1.56,.64,1) ${delay}ms, transform 0.4s cubic-bezier(.34,1.56,.64,1) ${delay}ms, background 0.25s, color 0.25s, border-color 0.25s`,
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>

      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, minWidth: 64 }}>
        <span style={{
          fontSize: 22,
          fontWeight: 600,
          color: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.15)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          transition: "color 0.3s",
        }}>
          {data.level}%
        </span>
        <div style={{ width: 52, height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
            borderRadius: 2,
            width: `${fillWidth}%`,
            transition: "width 1s cubic-bezier(.22,1,.36,1), background 0.3s",
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef);
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef);

  return (
    <section
      id="skills"
      style={{
        background: "#000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
        color: "#f5f5f7",
        padding: "5rem 2.5rem 4rem",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s cubic-bezier(.22,1,.36,1) 0.1s, transform 0.9s cubic-bezier(.22,1,.36,1) 0.1s",
        }}
      >
        <p style={{
          fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "1rem",
        }}>
          Technical Stack · 2025
        </p>

        <h2 style={{
          fontSize: "clamp(2.6rem, 6vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginBottom: "1.1rem",
          background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Skills &amp; Technologies
        </h2>

        <p style={{
          fontSize: 17, fontWeight: 400,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.6, maxWidth: 480, margin: "0 auto 1.5rem",
        }}>
          A production-ready stack built for scale, speed, and clean architecture across every layer.
        </p>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999, padding: "7px 18px",
          fontSize: 13, fontWeight: 500,
          color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#34d058",
            boxShadow: "0 0 6px #34d058",
            animation: "pulse 2.5s infinite",
            display: "inline-block",
          }} />
          Available for new projects
        </div>
      </div>

      {/* Rows */}
      <div style={{
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        {skillsData.map((item, i) => (
          <SkillRow key={item.title} data={item} index={i} />
        ))}
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        style={{
          textAlign: "center",
          marginTop: "3rem",
          opacity: footerInView ? 1 : 0,
          transform: footerInView ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s cubic-bezier(.22,1,.36,1) 0.2s, transform 0.7s cubic-bezier(.22,1,.36,1) 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          {[["8", "Domains"], ["44", "Technologies"], ["3+", "Years Experience"]].map(([num, label], i) => (
            <>
              {i > 0 && <div key={`div-${i}`} style={{ width: 1, height: 36, background: "rgba(255,255,255,0.1)" }} />}
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.04em", lineHeight: 1 }}>{num}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>{label}</span>
              </div>
            </>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {["Remote", "Contract", "Full-time"].map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 13, fontWeight: 500,
                padding: "7px 18px", borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.04)",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}