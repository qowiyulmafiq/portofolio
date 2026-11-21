import type { SiteConfig } from "./types";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/muhammad-qowiyul-mafiq-12134b327/";
const DICODING_URL = "https://www.dicoding.com/users/afiq_qowiyul/academies";

export const site = {
  brand: "QOWIYUL.",
  name: "MUHAMMAD QOWIYUL MAFIQ",
  title: "Afiq Portofolio",
  description:
    "Muhammad Qowiyul Mafiq — Informatics Engineering student, AI enthusiast, and future engineer building web and mobile systems.",
  hero: {
    eyebrow: "HI, I'M",
    name: "MUHAMMAD QOWIYUL MAFIQ",
    intro:
      "I'm an undergraduate Informatics Engineering student, an AI enthusiast, and a future engineer specializing in building web & mobile systems.",
    cta: {
      label: "LET'S CONNECT.",
      href: LINKEDIN_URL,
      external: true,
    },
  },
  about: {
    heading: [
      { segments: [{ text: "ABOUT" }] },
      { segments: [{ text: "THE " }, { text: "ENGINEER", accent: true }] },
    ],
    body: "I am an Informatics Engineering student at Universitas 17 Agustus 1945 Surabaya with a strong passion for problem-solving. My journey in tech began with a curiosity about how complex systems work, which naturally led me into software development.",
    university: "Universitas 17 Agustus 1945 Surabaya",
    vision:
      "Building infrastructures that bridge the gap between human and technical capability.",
    specialization:
      "Full-stack web systems, cross-platform mobile apps, and applied machine learning.",
  },
  tagline: "FULL-STACK & AI ENTHUSIAST",
  photo: "assets/qowiyul.jpeg",
  photoAlt: "Muhammad Qowiyul Mafiq",
  status: [
    { label: "LOCATION", value: "Gresik, Indonesia." },
    { label: "STUDY", value: "Informatics Eng." },
    { label: "AVAILABILITY", value: "OPEN TO INTERNSHIP", emphasis: true },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/qowiyulmafiq",
      icon: "github",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/qowiyul_mafiq/",
      icon: "instagram",
    },
    { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
  ],
  nav: [
    { label: "About Me.", href: "#about-me" },
    { label: "Tech Stack.", href: "#tech-stack" },
    { label: "Projects.", href: "#projects" },
    { label: "Dicoding.", href: DICODING_URL, external: true },
  ],
  copyright: "© 2026 MUHAMMAD QOWIYUL MAFIQ. ALL RIGHTS RESERVED.",
} satisfies SiteConfig;
