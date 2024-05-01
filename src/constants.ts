/* eslint-disable react-refresh/only-export-components */
import {
  EnvelopeIcon,
  LinkIcon,
  LocationIcon,
  PhoneIcon,
} from "./assets/icons";

export const CONTACTS = [
  { detail: "(234) 814-172-6099", icon: PhoneIcon },
  {
    detail: "johnadibe450@gmail.com",
    // detail: "john.adibe.ebube@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    detail: "https://johnadibe.vercel.app",
    icon: LinkIcon,
  },
  {
    detail: "Lagos, Nigeria.",
    icon: LocationIcon,
  },
];

export const EDUCATIONS = [
  {
    certificate: "B.Sc / Mathematics Education",
    school: "University of Nigeria, Nsukka",
    duration: "Jul 2017",
    grade: "Second Class Honours (Upper Division)",
    project: "",
    // project:
    //   "Accessing the usability of questioning skills in teaching and learning of Mathematics in senior secondary schools at Onitsha South L.G.A Anambra State.",
  },
  // {
  //   certificate: "West African Examinations Council (WAEC)",
  //   school: "Tansi International College, Awka",
  //   duration: "Jun 2013",
  // },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Product Studio Limited",
    location: "Lagos, Nigeria (Remote).",
    start: "Nov 2023",
    end: "till date",
    description: [
      "Spearheading 3+ projects from conception to deployment, focusing on user-centric design and code reusability.",
      // "Researched 3rd party libraries before usage to avoid technical debt, and refactoring codes to the best practices.",
      "Working closely with a diverse and agile team members, sharing ideas that can lead to company's growth",
    ],
  },
  {
    title: "Software Developer",
    company: "Clinify INC",
    location: "Alberta, Canada (Remote).",
    start: "Apr 2022",
    end: "Sep 2023",
    description: [
      "Worked closely with the backend developers to integrate GraphQL APIs, ensuring seamless communication between the frontend and backend systems.",
      "Collaborated with UI/UX design team members to improve existing applications and implement new feature developments.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Outcess LTD",
    location: "Opebi, Lagos.",
    start: "Sep 2020",
    end: "May 2022",
    description: [
      "Developed new React components for the staff management web application, increasing the HR team's work efficiency.",
      "Created a UI and UX-friendly web application to manage customer relationships and records, achieving over 80% customer satisfaction and improving contact agent's recovery rate.",
    ],
  },
];

export const SKILLS = [
  {
    label: "Languages",
    list: ["TypeScript", "JavaScript", "HTML/CSS", "Python", "GLSL"],
  },
  {
    label: "Libraries",
    list: [
      "React.JS",
      "Next.JS",
      "Tailwind CSS",
      "React Native",
      "GraphQL",
      "Three.js",
      "Jest/Vitest",
    ],
  },
  {
    label: "Tools",
    list: ["VSCode", "Figma", "Blender", "Android Studio", "PyCharm"],
  },
];
