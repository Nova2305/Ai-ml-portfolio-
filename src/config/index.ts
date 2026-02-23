import type { SiteConfig, SiteContent } from "../types";

/* ==============================
   SITE CONFIG
================================ */

export const SITE_CONFIG: SiteConfig = {
  title: "Abhinav Singh — AI Engineer | ML & MLOps",
  author: "Abhinav Singh",
  description:
    "AI Engineer focused on building scalable machine learning systems, production-grade software, and cloud-native applications using modern DevOps and MLOps practices.",
  lang: "en",
  siteLogo: "/profile-small.jpg",
  socialImage: "/zen-og.png",
  canonicalURL: "https://your-domain.vercel.app",

  navLinks: [
    { text: "Skills", href: "#skills" },
    { text: "Blogs", href: "#blogs" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],

  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinav-singh-thakur-276873311",
    },
    {
      text: "GitHub",
      href: "https://github.com/Nova2305",
    },
    {
      text: "X (Twitter)",
      href: "https://x.com/Abhinav15128986",
    },
    {
      text: "YouTube",
      href: "https://youtube.com/@yourchannel",
    },
  ],
};

/* ==============================
   SITE CONTENT
================================ */

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abhinav Singh",
    specialty: "AI Engineer • ML Systems • MLOps Focused",
    summary:
      "I build scalable machine learning systems and production-ready software. My work focuses on bridging ML experimentation with real-world deployment through strong software engineering, DevOps, and cloud-native practices.",
    email: "abhinav@email.com",
  },

  experience: [
    {
      company: "Personal ML & Systems Lab",
      position: "AI / ML Systems Engineer",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Designing and deploying machine learning models with an emphasis on production readiness, scalability, and monitoring.",
        "Building end-to-end ML systems including data pipelines, model training, inference services, and observability.",
        "Implementing CI/CD workflows, Docker-based containerization, and cloud deployments aligned with MLOps best practices.",
        "Working on experiment tracking, model versioning, and performance optimization across the ML lifecycle.",
      ],
    },
    {
      company: "Full-Stack Engineering Projects",
      position: "Software Engineer",
      startDate: "2023",
      endDate: "2024",
      summary: [
        "Developed scalable backend APIs and modern frontend interfaces using full-stack web technologies.",
        "Designed and optimized relational and NoSQL database schemas for data-intensive applications.",
        "Integrated authentication, authorization, and automated deployment pipelines using DevOps principles.",
      ],
    },
  ],

  projects: [
    {
      name: "End-to-End ML Pipeline Platform",
      summary:
        "A production-style ML system covering data preprocessing, model training, evaluation, containerization, deployment, and monitoring.",
      linkPreview: "/",
      linkSource: "https://github.com/yourusername/ml-pipeline-project",
      image: "/ml-project.png",
    },
    {
      name: "Full-Stack AI Web Application",
      summary:
        "A scalable web application integrating a machine learning model into backend APIs with cloud deployment and monitoring.",
      linkPreview: "/",
      linkSource: "https://github.com/yourusername/fullstack-ml-app",
      image: "/fullstack-ml.png",
    },
    {
      name: "DevOps & MLOps Automation Toolkit",
      summary:
        "Infrastructure automation using Docker and CI/CD pipelines to streamline build, test, deployment, and model delivery workflows.",
      linkPreview: "/",
      linkSource: "https://github.com/yourusername/devops-project",
      image: "/devops.png",
    },
  ],

  about: {
    description: `
Hi, I’m Abhinav Singh — an AI Engineer focused on building scalable, production-ready machine learning systems.

My primary interest lies in transforming ML models into reliable, deployable services using modern software engineering, DevOps, and MLOps practices. I enjoy working across the full system lifecycle — from data preprocessing and model development to backend architecture, API design, and cloud deployment.

With a strong foundation in engineering fundamentals, I aim to design AI systems that are not only intelligent, but also maintainable, observable, and resilient in real-world environments.
    `,
    image: "/profile-small.jpg",
  },
};