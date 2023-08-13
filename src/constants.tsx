/* eslint-disable react-refresh/only-export-components */
import { EnvelopeIcon, LocationIcon, PhoneIcon } from "./assets/icons";

const ICON_SIZE = 10;

export const CONTACTS = [
  { detail: "+234-814-172-6099", icon: <PhoneIcon size={ICON_SIZE} /> },
  {
    detail: "johnadibe450@gmail.com",
    icon: <EnvelopeIcon size={ICON_SIZE} />,
  },
  // {
  //   detail: "https://www.linkedin.com/in/johnadibe/",
  //   icon: <LinkIcon size={ICON_SIZE} />,
  // },
  {
    detail: "Ikeja, Lagos State, Nigeria.",
    icon: <LocationIcon size={ICON_SIZE} />,
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Clinify INC",
    start: "Feb 2022",
    end: "Present",
    description: [
      "Implemented websites, mobile applications, and landing pages from concept through deployment.",
      "Standardized all output with a new, responsive, mobile-first approach and strategy.",
      "Assessed UX and UI designs for technical feasibility.",
      "Developed standard and ad hoc reports in graph format as required.",
      "Collaborated with product team members to implement new feature developments.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Clinify INC",
    start: "Feb 2022",
    end: "Present",
    description: [
      "Implemented websites, mobile applications, and landing pages from concept through deployment.",
      "Standardized all output with a new, responsive, mobile-first approach and strategy.",
      "Assessed UX and UI designs for technical feasibility.",
      "Developed standard and ad hoc reports in graph format as required.",
      "Collaborated with product team members to implement new feature developments.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Clinify INC",
    start: "Feb 2022",
    end: "Present",
    description: [
      "Implemented websites, mobile applications, and landing pages from concept through deployment.",
      "Standardized all output with a new, responsive, mobile-first approach and strategy.",
      "Assessed UX and UI designs for technical feasibility.",
      "Developed standard and ad hoc reports in graph format as required.",
      "Collaborated with product team members to implement new feature developments.",
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
  "Three.JS",
  "GIT (Version Control)",
  "Jest (Unit Testing)",
];
