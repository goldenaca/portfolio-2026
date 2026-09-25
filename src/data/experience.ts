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
    period: "Jan 2025 — Jun 2026",
    location: "Remote",
    summary:
      "Digital product agency with offices in Buenos Aires and New York, building apps and websites for startups and large companies.",
    bullets: [
      "Shipped features end to end with Next.js, React and TypeScript for a New York–based product in a multicultural team.",
      "Led LLM integrations for search and profile enrichment over a 50,000+ user database.",
      "Built internal AI tools that streamlined cross-team workflows and powered client upselling features.",
      "Wrote unit and integration tests with Vitest and React Testing Library.",
    ],
    results: [
      "+30% performance on critical components.",
      "More accurate search results and significantly faster queries.",
      "Unified UI with a reusable shadcn/ui component system.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python (FastAPI)",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Perplexity API",
      "Salesforce",
    ],
  },
  {
    company: "Online Procesamientos",
    role: "Software Engineer",
    period: "Mar 2024 — Jan 2025",
    location: "Remote",
    summary:
      "Argentine company providing payroll processing and management software to condominium administrators.",
    bullets: [
      "Sole architect and developer of the company's software, owning frontend, backend, data model, testing and deployment.",
      "Built a React and TypeScript web app for administrators, backed by Node.js and Firebase.",
      "Generated PDF statements and automated email and WhatsApp notifications.",
    ],
    results: [
      "−40% operational load time via automated expense and salary statements.",
      "Fewer reporting errors through automated statement generation.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase",
      "Render",
      "Tailwind CSS",
      "shadcn/ui",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    company: "GM2",
    role: "Software Engineer",
    period: "Aug 2022 — Mar 2024",
    location: "Remote",
    summary:
      "Digital product company with teams in the US, Mexico and Argentina serving startups and corporations.",
    bullets: [
      "Built web and mobile apps for healthcare, e-commerce and aeronautics clients with React, Next.js and React Native.",
      "Wrote unit and integration tests with Vitest and React Testing Library.",
      "Ran code reviews and helped define internal dev standards.",
    ],
    results: [
      "DroneUp — real-time operations dashboard used by US airspace authorities to manage drone flights.",
      "ReKeepit — Shopify widget turning refund requests into personalized discounts, increasing retention.",
    ],
    stack: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux",
      "Shopify Polaris",
      "Material UI",
      "Chakra UI",
      "Vue.js",
      "Contentful",
    ],
  },
  {
    company: "Bowery Creative Studio",
    role: "Frontend Engineer",
    period: "May 2021 — Aug 2022",
    location: "Buenos Aires",
    summary:
      "Product studio providing on-demand engineering teams embedded in client product teams.",
    bullets: [
      "Led the KeepSmiling redesign, a dental platform used by 60,000+ people across LATAM.",
      "Built MyElixa, a React Native app tracking seniors' water intake via a bottle-mounted band.",
      "Rebuilt legacy systems with modern component architectures alongside UX/UI designers and backend developers.",
    ],
    results: [
      "KeepSmiling — 10× faster search for 60K+ LATAM users.",
      "MyElixa — showcased at CES 2021.",
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
