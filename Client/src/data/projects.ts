// Define project metadata structure
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  images: string[];
  projectsInsight: string;
  github: string;
  live: string;
  features: string[];
}

// Simple path definitions mapping from the public/project directory
export const projects: Record<string, Project> = {
  fasttutors: {
    slug: "fasttutors",
    title: "FastTutors",
    tagline: "Connecting students with the right tutors",
    description: "A tutor–parent matching platform with authentication, roles, dashboards, and real-time enquiries.",
    tech: ["React", "Node.js", "MongoDB", "JSON Web Tokens", "Express.js", "Tailwind CSS"],
    image: "/project/loginPage.png",
    images: [
      "/project/tuitions.png",
      "/project/loginPage.png",
      "/project/DashBoard.png",
      "/project/info.png",
    ],
    projectsInsight: "Developed FastTutors, a full-stack tutor–parent matching platform that connects students and parents with suitable tutors through a streamlined onboarding and enquiry system. Implemented secure JWT-based authentication and role-based access control for tutors and parents, built scalable REST APIs using Express.js and Node.js to manage profiles, enquiries, and dashboard data, and integrated MongoDB for efficient storage of user information and tuition requests. Designed a responsive and user-friendly interface with React and Tailwind CSS, featuring role-based dashboards, profile management, and real-time enquiry workflows to improve usability and platform scalability.",
    github: "https://github.com/Shoeb-code/fasttutors",
    live: "#",
    features: [
      "Tutor & parent onboarding workflows",
      "Secure JWT-based authentication & cookie handling",
      "Role-based dynamic dashboards",
      "Advanced tutor search and filtering algorithms",
      "Subject and class-wise tutor matching engine",
      "Parent enquiry and request management streams",
      "RESTful API integration with error handler middleware",
      "Reusable modular React component architecture",
      "Secure session handling and request interceptors",
      "Scalable backend folder structure and MongoDB schemas"
    ],
  },
  fast_Ai_Interview_platform: {
    slug: "fast_Ai_Interview_platform",
    title: "Fast-AI Interview Platform",
    tagline: "AI-powered mock interview preparation and performance analysis platform",
    description: "A full-stack AI-powered interview preparation platform that helps users practice mock interviews, track performance history, and improve job readiness through role-based interview simulations and analytics dashboards.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "Recharts"
    ],
    image: "/project/Interview-platform/home.png",
    images: [
      "/project/Interview-platform/chart.png",
      "/project/Interview-platform/home.png",
      "/project/Interview-platform/perform-history.png",
      "/project/Interview-platform/prep-list.png",
      "/project/Interview-platform/register.png",
      "/project/Interview-platform/role panel.png"
    ],
    projectsInsight: "Designed a secure JWT-based authentication flow to ensure safe user access and session management, built scalable REST APIs using Express.js for handling interview workflows and user data, and integrated MongoDB to efficiently store interview history, performance analytics, and user progress. Developed a fully responsive user interface using Tailwind CSS, implemented performance charts and score visualizations for better progress tracking, and created reusable React components to maintain a modular, scalable, and maintainable frontend architecture.",
    github: "https://github.com/Shoeb-code/Fast_Ai-Interview-platform",
    live: "https://fast-ai-interview-platform.vercel.app/",
    features: [
      "AI-powered mock interview sessions with score updates",
      "Role-based interview question panels and answer reviews",
      "Performance analytics dashboards tracking progression",
      "Comprehensive interview history log and detailed insights",
      "Interactive data visualizations with metrics graphs",
      "Secure JWT registration and verification flows",
      "User authentication checks on router layers",
      "Progressive visual score tracking and feedback loops"
    ]
  }
};
