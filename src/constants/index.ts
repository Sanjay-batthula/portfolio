// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Sanjay-batthula/portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI & Automation Specialist",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Chatbot Developer",
    icon: creator,
  },
] as const;


// Technologies

export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    company_name: "EduMe Research Labs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - March 2025",
    points: [
      "Built responsive web portals using Next.js, improving performance and UX.",
      "Integrated AI-powered chatbots for course assistance and LMS navigation.",
      "Streamlined student management and course tracking with backend integrations.",
      "Collaborated with teams to enhance UI/UX and optimize performance."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zidio",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - November 2024",
    points: [
      "Developed a complete e-commerce web app using React+Vite and Tailwind CSS.",
      "Implemented product listings, filtering, cart, and secure checkout modules.",
      "Connected to backend APIs for real-time inventory and order handling.",
      "Focused on mobile-first design and page load performance."
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sanjay proved me wrong.",
    name: "Kavya Sri",
    designation: "CFO",
    company: "Edueme Research Labs",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sanjay does.",
    name: "Christiano Ronaldo",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Sanjay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "P.G Keerthi",
    designation: "Developer",
    company: "Google",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "BizFlow AI",
    description:
      "An AI-powered automation platform that streamlines routine business workflows using smart bots, integrations, and natural language processing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/yourgithub/bizflow-ai",
    live_site_link: "https://bizflow-ai.vercel.app/",
  },
  {
    name: "GenieBot",
    description:
      "A smart chatbot platform that helps automate customer queries, internal FAQs, and business tasks using GPT-based AI, integrated with platforms like WhatsApp and Slack.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "relevanceai",
        color: "green-text-gradient",
      },
      {
        name: "make",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/yourgithub/geniebot",
    live_site_link: "https://geniebot-ai.vercel.app/",
  },
  {
    name: "FinFlux",
    description:
      "A personal finance tracker that enables users to log expenses, analyze spending trends, and generate smart insights with data visualizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/yourgithub/finflux",
    live_site_link: "https://finflux-tracker.vercel.app/",
  },
  {
    name: "Agritech Nexus",
    description:
      "Agritech Nexus is a web application that enables farmers to connect with buyers and sell their products directly to them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/yourgithub/agritech-nexus",
    live_site_link: "https://agritech-nexus.vercel.app/",
  },
  {
    name: "Scrappie",
    description:
      "A scrap material management platform that connects scrap sellers with buyers, allowing listings, price negotiations, and smooth transactions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/yourgithub/scrappie",
    live_site_link: "https://scrappie-marketplace.vercel.app/",
  },
  {
    name: "Chatbot in Streamlit",
    description:
      "An AI chatbot developed using Streamlit that allows real-time question answering and interaction through a simple and clean interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/yourgithub/streamlit-chatbot",
    live_site_link: "https://streamlit-chatbot-app.streamlit.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@SanjayBatthula24",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanjay-batthula-628075261/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanjay-batthula",
  },
] as const;
