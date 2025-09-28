import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "austuverse",
    position: "Full Stack Developer",
    company: "AU Stuverse",
    location: "Australia (Remote)",
    startDate: new Date("2024-04-01"),
    endDate: "Present",
    description: [
      "Built a community-driven platform designed for international students and newcomers in Australia.",
      "Implemented authentication, personalized dashboards, and resources to help students settle into university life.",
      "Deployed on Vercel with strong focus on scalability and smooth user experience.",
    ],
    achievements: [
      "Launched AU Stuverse, connecting 500+ international students to resources, events, and peer support.",
      "Enhanced engagement with real-time chat and community features, easing the transition for newcomers.",
      "Optimized performance with Next.js and server-side rendering for seamless access worldwide.",
    ],
    skills: ["Next.js", "React", "Node.js","Supabase", "Typescript"],
    companyUrl: "https://aussie-uni-connect.vercel.app",
    logo: "/AU.png",
  },
  {
    id: "ubs",
    position: "Backend Developer",
    company: "Black Tech Pvt Ltd",
    location: "Pokhara, Nepal ",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-08-10"),
    description: [
      "Developed chat application focusing on performance and maintainability for over 1000 users.",
      "Contributed to deployment of Chat application on AWS, ensuring high availability and scalability.",
      "Implemented real-time features using WebSockets, enhancing user engagement and interaction.",
    ],
    achievements: [
      "Developed and optimized a high-performing chat application, catering to over 1000 users, emphasizing efficiency and maintainability.",
      "Contributed to deployment of Chat application on AWS, ensuring high availability and scalability.",
      "Implemented real-time features using WebSockets, enhancing user engagement and interaction.",
      "Collaborated with cross-functional teams to integrate user feedback, resulting in a 20% increase in user satisfaction scores.",
    ],
    skills: ["Typescript", "React", "Java", "Python"],
    companyUrl: "https://www.ubs.com",
    logo: "/blacktech.png",
  },
  {
    id: "agentprod",
    position: "Backend Developer",
    company: "Skybase Innovations Pvt Ltd",
    location: "Pokhara, Nepal",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "Built backend for ecommerce system.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
      "Created a Next.js dashboard for user analytics.",
    ],
    achievements: [
      "Built backend for ecommerce system, improving function call accuracy by 40%.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Created a Next.js dashboard for user analytics.",
    ],
    skills: ["Next.js", "React", "Node.js", "AWS", "Typescript"],
    companyUrl: "https://agentprod.com",
    logo: "/skybase.png",
  },
  {
    id: "builtdesign",
    position: "Web Developer Intern",
    company: "UrjaLab Pvt Ltd",
    location: "Pokhara, Nepal",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-01-24"),
    description: [
      "Developed websites using React, Nextjs.",
    ],
    achievements: [
      "Developed websites using React, Nextjs; reduced API load time by 30%.",
      "Implemented responsive designs, enhancing user experience across devices.",
    ],
    skills: [
      "React",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/urjalab.png",
  },
];
