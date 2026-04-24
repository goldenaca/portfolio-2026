export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  results: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Aerolab",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    location: "Remote",
    summary:
      "Digital products for international clients inside a scalable modular ecosystem.",
    bullets: [
      "Built and maintained products for international clients with React, Next.js and TypeScript.",
      "Drove code reviews and architectural practices that improved maintainability.",
      "Shipped UI flows with TailwindCSS and Shadcn/ui focused on performance and UX.",
    ],
    results: [
      "+30% render & load performance on critical components.",
      "Unified reusable component system across products.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "Salesforce",
    ],
  },
  {
    company: "Online Procesamientos",
    role: "Software Engineer",
    period: "May 2024 — Present",
    location: "Remote",
    summary:
      "End-to-end platform for property administrators, replacing manual processes with automated flows.",
    bullets: [
      "Designed the full frontend + backend architecture on React, TypeScript and Firebase.",
      "Integrated auth, PDF generation, automated emails and notifications.",
      "Built reporting & operational controls to improve data traceability.",
    ],
    results: [
      "−40% operational load time for end users.",
      "Fewer human errors in report generation via internal automations.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Firebase",
      "TailwindCSS",
      "Shadcn/ui",
      "GitHub Actions",
    ],
  },
  {
    company: "GM2",
    role: "Software Engineer",
    period: "Jul 2022 — May 2024",
    location: "Remote",
    summary:
      "Web and mobile products across healthcare, e-commerce and aeronautics.",
    bullets: [
      "Built web & mobile apps with React, React Native, Next.js and TypeScript.",
      "Owned data flows, performance and scalable component maintenance.",
      "Pair programming, documentation and definition of internal dev standards.",
    ],
    results: [
      "Znest — improved search flow and end-user experience.",
      "DroneUp — real-time dashboard for aeronautical authorities.",
    ],
    stack: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Redux",
      "Chakra",
      "Vue",
      "Contentful",
    ],
  },
  {
    company: "Bowery Creative Studio",
    role: "Front-End Engineer",
    period: "Mar 2021 — Jul 2022",
    location: "Buenos Aires",
    summary: "Scalable, responsive interfaces with React and React Native.",
    bullets: [
      "Collaborated with UX/UI and backend to improve navigation and accessibility.",
      "Rebuilt legacy systems with modern component architectures.",
    ],
    results: [
      "KeepSmiling redesign (60K+ LATAM users) — 10× faster search.",
      "Simpler internal flows → higher operator efficiency.",
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "Bootstrap",
      "REST APIs",
    ],
  },
];
