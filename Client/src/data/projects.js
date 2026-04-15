
import { interviewAssets } from "../../public/project/Interview-platform/assets";

export const projects = {
  fasttutors: {
    slug: "fasttutors",
    title: "FastTutors",
    tagline: "Connecting students with the right tutors",
    description:
      "A tutor–parent matching platform with authentication, profiles, and real-time enquiries.",
    tech: ["React", "Node.js", "MongoDB", "JasonWebTokens" ,"Express js","Tailwind css"],
    image: "/project/loginPage.png",
    images: [
      "/project/tuitions.png",
      "/project/loginPage.png",
      "/project/DashBoard.png",
      "/project/info.png",
    ],

    projectsInsight:'Developed FastTutors, a full-stack tutor–parent matching platform that connects students and parents with suitable tutors through a streamlined onboarding and enquiry system. Implemented secure JWT-based authentication and role-based access control for tutors and parents, built scalable REST APIs using Express.js and Node.js to manage profiles, enquiries, and dashboard data, and integrated MongoDB for efficient storage of user information and tuition requests. Designed a responsive and user-friendly interface with React and Tailwind CSS, featuring role-based dashboards, profile management, and real-time enquiry workflows to improve usability and platform scalability.',

    github: "https://github.com/Shoeb-code/fasttutors",
    live: "#",
    features: [
  "Tutor & parent onboarding",
  "Secure JWT-based authentication",
  "Role-based dashboards",
  "Advanced tutor search and filtering",
  "Subject and class-wise tutor matching",
  "Parent enquiry and request management",
  "RESTful API integration",
  "Reusable React components",
  "Secure session handling",
  "Scalable backend architecture"
],
  },

  fast_Ai_Interview_platform : {
    slug: "fast_Ai_Interview_platform",
    title: "Fast-AI Interview Platform",
    tagline: "AI-powered mock interview preparation and performance analysis platform",
    
    description:
      "A full-stack AI-powered interview preparation platform that helps users practice mock interviews, track performance history, and improve job readiness through role-based interview simulations and analytics dashboards.",
  
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication"
    ],
  
    image: interviewAssets.home,
  
    images:[   
      interviewAssets.chart,
      interviewAssets.home,
      interviewAssets.performhistory,
      interviewAssets.preplist,
      interviewAssets.register,
      interviewAssets.rolepanel
    ],
    projectsInsight:'Designed a secure JWT-based authentication flow to ensure safe user access and session management, built scalable REST APIs using Express.js for handling interview workflows and user data, and integrated MongoDB to efficiently store interview history, performance analytics, and user progress. Developed a fully responsive user interface using Tailwind CSS, implemented performance charts and score visualizations for better progress tracking, and created reusable React components to maintain a modular, scalable, and maintainable frontend architecture.' ,
  
    github: "https://github.com/Shoeb-code/Fast_Ai-Interview-platform",
    live: "https://fast-ai-interview-platform.vercel.app/",
  
    features: [
      "AI-powered mock interview sessions",
      "Role-based interview question panels",
      "Performance analytics dashboard",
      "Interview history tracking",
      'Enabled users to track historical performance trends',
      "JWT-based secure authentication",
      "User registration and login system",
      "Progress charts and score visualization"
    ]
  }
};
