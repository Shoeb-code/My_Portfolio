import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

const outputPath = path.resolve("public/resume.pdf");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 32, bottom: 32, left: 36, right: 36 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Helper for horizontal rule
function drawLine() {
  doc.strokeColor("#222222").lineWidth(0.75).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.25);
}

// Section Title
function sectionTitle(title) {
  doc.moveDown(0.35);
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#111111").text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.1);
  drawLine();
}

// Header
doc.font("Helvetica-Bold").fontSize(16).fillColor("#111111").text("SHOEB KHAN", { align: "center", characterSpacing: 1 });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.5).fillColor("#333333").text("+91 9536969183  |  shoebkhanjmi076@gmail.com  |  Linkedin  |  Github  |  Leetcode @ 470 problems", { align: "center" });

// Summary
sectionTitle("Summary");
doc.font("Helvetica").fontSize(8.5).fillColor("#222222").text(
  "Full-stack engineer (MERN + TypeScript) with production experience across Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Prisma. Experienced in REST API design, JWT/RBAC auth, real-time notifications, and end-to-end feature delivery. Strong in DSA (450+ LeetCode). Seeking a Backend, Full-Stack, or Software Developer role.",
  { lineGap: 1.5 }
);

// Technical Skills
sectionTitle("Technical Skills");
const skills = [
  { label: "Languages:", text: "JavaScript (ES6+), TypeScript, Java, HTML5, CSS3" },
  { label: "Backend:", text: "Node.js, Express.js, REST APIs, JWT, RBAC, Middleware, Socket.io, Microservices Architecture" },
  { label: "Frontend:", text: "React.js, Tailwind CSS, Bootstrap, Axios" },
  { label: "Databases & ORM:", text: "PostgreSQL, Prisma, MongoDB, MongoDB Atlas, MySQL" },
  { label: "Tools & DevOps:", text: "Git, GitHub, Docker, Postman, Vercel, Render, Cloudinary, Firebase Cloud Messaging (FCM), VS Code, Jest, Mocha, Vitest" },
  { label: "Practices:", text: "Agile/Scrum, Code Review, Unit Testing, DSA" }
];

skills.forEach(s => {
  doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text(s.label + " ", { continued: true })
     .font("Helvetica").fillColor("#222222").text(s.text, { lineGap: 1 });
});

// Work Experience
sectionTitle("Work Experience");

function addJob(role, company, period, bullets) {
  doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text(`${role} - ${company}`, { continued: true });
  doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text(period, { align: "right" });
  doc.moveDown(0.1);
  bullets.forEach(b => {
    doc.font("Helvetica").fontSize(8.2).fillColor("#222222").text("•  " + b, { indent: 8, lineGap: 1.2 });
  });
  doc.moveDown(0.3);
}

addJob(
  "Software Development Intern",
  "JetQuins (Remote)",
  "Jul 2026 – Present",
  [
    "Contributing to a production E-Sign platform, building backend and frontend features in a remote Agile team.",
    "Implemented real-time push notifications using Firebase Cloud Messaging (FCM), improving user engagement and delivery of time-sensitive document actions.",
    "Built a universal search feature that runs parallel queries across backend services, reducing search response time and improving relevancy across data sources.",
    "Designed and implemented a role-based user management and permissions system, controlling access across multiple user types.",
    "Wrote unit tests using Vitest to improve code reliability and catch regressions before deployment; created an 8-step interactive product tour guide to improve onboarding.",
    "Worked with TypeScript, Prisma ORM, and PostgreSQL to build type-safe, maintainable backend services."
  ]
);

addJob(
  "Backend Developer",
  "OnNextWeb (MERN Stack)",
  "Dec 2025 – Apr 2026",
  [
    "Built RESTful APIs using Node.js and Express.js serving 3+ user roles, handling authentication, user management, and core business workflows.",
    "Implemented JWT-based authentication and RBAC middleware, eliminating unauthorized API access across all protected endpoints.",
    "Optimized MongoDB queries and integrated Cloudinary for media storage, reducing average API response time by ~25% and achieving near-100% upload reliability.",
    "Shipped features iteratively in a 4-person Agile team on weekly release cycles."
  ]
);

addJob(
  "Frontend Developer",
  "Codefast Platform",
  "Mar 2025 – Aug 2025",
  [
    "Built a reusable React component library (cards, modals, forms, dashboards) that cut UI development time by ~30% across the product.",
    "Integrated React frontend with REST APIs, adding loading states, error boundaries, and user feedback for a smooth UX.",
    "Collaborated with backend engineers and designers to deliver full-stack features on weekly release schedules."
  ]
);

// Projects
sectionTitle("Projects");
doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text("Fast-AI - AI Mock Interview Platform - MERN, OpenAI/Groq API, JWT", { continued: true });
doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text("Jan 2026 – Mar 2026", { align: "right" });
doc.moveDown(0.1);
const projectBullets = [
  "Built and deployed a full-stack AI-powered interview platform with real-time LLM-generated questions, automated scoring, and feedback; live in production with 100+ test sessions.",
  "Designed secure JWT auth, modular REST APIs, and analytics dashboards with score trend and radar charts.",
  "Deployed on Vercel + Render + MongoDB Atlas with API response times under 300ms and a horizontally scalable architecture."
];
projectBullets.forEach(b => {
  doc.font("Helvetica").fontSize(8.2).fillColor("#222222").text("•  " + b, { indent: 8, lineGap: 1.2 });
});
doc.moveDown(0.3);

// Education
sectionTitle("Education");
doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text("B.Tech - Jamia Millia Islamia, New Delhi", { continued: true });
doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#111111").text("sept 2022 – June 2026", { align: "right" });
doc.moveDown(0.3);

// Certifications
sectionTitle("Certifications");
const certs = [
  "The Complete Web Developer Bootcamp - Udemy | HTML, CSS, JavaScript, Node.js, React, MongoDB",
  "Data Structures and Algorithms - Coding Blocks | Java, Data Structures & Algorithms, Problem Solving"
];
certs.forEach(c => {
  doc.font("Helvetica").fontSize(8.2).fillColor("#222222").text("•  " + c, { indent: 8, lineGap: 1.2 });
});

doc.end();

writeStream.on("finish", () => {
  console.log("Resume generated successfully at " + outputPath);
});
