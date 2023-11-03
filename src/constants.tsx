/* eslint-disable react-refresh/only-export-components */
import {
  EnvelopeIcon,
  // LinkIcon,
  LocationIcon,
  PhoneIcon,
} from "./assets/icons";

const ICON_SIZE = 10;

export const CONTACTS = [
  { detail: "(234) 814-172-6099", icon: <PhoneIcon size={ICON_SIZE} /> },
  {
    detail: "johnadibe450@gmail.com",
    icon: <EnvelopeIcon size={ICON_SIZE} />,
  },
  // {
  //   detail: "https://www.linkedin.com/in/johnadibe/",
  //   icon: <LinkIcon size={ICON_SIZE} />,
  // },
  {
    detail: "Lagos, Nigeria.",
    icon: <LocationIcon size={ICON_SIZE} />,
  },
];

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Clinify INC",
    location: "Alberta, Canada (Remote).",
    start: "Apr 2022",
    end: "Sept 2023",
    description: [
      "Worked closely with the backend developers to integrate GraphQL APIs, ensuring seamless communication between the frontend and backend systems.",
      "Collaborated with UI/UX design team members to improve existing applications and implement new feature developments.",
      "Built extensive test coverage with Jest for new features.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Outcess LTD",
    location: "Opebi, Lagos.",
    start: "Sep 2020",
    end: "May 2022",
    description: [
      "Updated the company's website with responsive layouts and page optimization resulting in a faster load time.",
      "Developed new React components for the staff management web application, increasing the HR team's work efficiency.",
      "Created a UI and UX-friendly web application to manage customer relationships and records, achieving over 80% customer satisfaction and improving contact agent's recovery rate.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    location: "Ikeja, Lagos.",
    start: "Mar 2020",
    end: "Jan 2023",
    description: [
      "Successfully completed 8+ projects, showcasing diverse software solutions for clients across various industries.",
      "Maintained 80% satisfaction rate by delivering high-quality, customized applications on time and within budget.",
      "Established effective remote collaboration practices, enabling smooth communication and seamless project execution with clients.",
    ],
  },
];

export const SKILLS = [
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "TypeScript",
  "React.JS",
  "Next.JS",
  "Redux",
  "React Native",
  "GraphQL",
  "Three.JS",
  "GIT (Version Control)",
  "Jest (Unit Testing)",
];
