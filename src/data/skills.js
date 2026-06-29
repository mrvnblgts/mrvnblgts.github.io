import {
  Code2,
  Server,
  Database,
  Globe,
  Blocks,
  Palette,
  Terminal,
  GitBranch,
} from "lucide-react";

export const skillCategories = [
  {
    label: "Frontend",
    icon: Code2,
    skills: [
      { name: "Vue.js", level: 90, icon: "Vue" },
      { name: "Quasar", level: 85, icon: "Quasar" },
      { name: "JavaScript", level: 88, icon: "JS" },
      { name: "HTML & CSS", level: 92, icon: "HTML" },
      { name: "Tailwind CSS", level: 90, icon: "TW" },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", level: 85, icon: "PHP" },
      { name: "MySQL", level: 82, icon: "SQL" },
      { name: "REST APIs", level: 78, icon: "API" },
    ],
  },
  {
    label: "Web3 & Blockchain",
    icon: Blocks,
    skills: [
      { name: "Web3.js", level: 75, icon: "W3" },
      { name: "WalletConnect", level: 80, icon: "WC" },
      { name: "Smart Contracts", level: 65, icon: "SC" },
      { name: "BCH Integration", level: 78, icon: "BCH" },
    ],
  },
  {
    label: "Tools & Workflow",
    icon: Terminal,
    skills: [
      { name: "Git", level: 85, icon: "Git" },
      { name: "VS Code", level: 92, icon: "VS" },
      { name: "Pinia", level: 84, icon: "Pn" },
      { name: "WebSocket", level: 78, icon: "WS" },
    ],
  },
];

export const allTechnologies = [
  "Vue.js",
  "Quasar",
  "React",
  "JavaScript",
  "TypeScript",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Web3",
  "Pinia",
  "WebSocket",
  "Git",
  "REST APIs",
  "HTML5",
  "CSS3",
];
