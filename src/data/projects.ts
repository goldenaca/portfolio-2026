export type Metric = { v: string; l: string };

export type Project = {
  name: string;
  tag: string;
  role: string;
  year: string;
  blurb: string;
  metrics: Metric[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: 'KeepSmiling',
    tag: 'Legacy rebuild',
    role: 'Front-End Engineer · Bowery',
    year: '2022',
    blurb: 'Complete redesign of a dental-network platform used by 60,000+ operators across LATAM.',
    metrics: [
      { v: '60K+', l: 'LATAM users' },
      { v: '10×', l: 'faster search' },
    ],
    stack: ['React', 'React Native', 'Redux', 'TypeScript'],
  },
  {
    name: 'DroneUp',
    tag: 'Dashboard',
    role: 'Software Engineer · GM2',
    year: '2023',
    blurb: 'Real-time dashboard for aeronautical authorities managing drone operations.',
    metrics: [
      { v: 'real-time', l: 'ops mgmt' },
      { v: 'B2G', l: 'regulator tool' },
    ],
    stack: ['React', 'TypeScript', 'Next.js'],
  },
  {
    name: 'ReKeepit',
    tag: 'Shopify widget',
    role: 'Software Engineer · GM2',
    year: '2023',
    blurb: 'Shopify retention widget using personalized discounts to recover churning customers.',
    metrics: [
      { v: '+ret.', l: 'customer retention' },
      { v: 'Shopify', l: 'Polaris · Storefront' },
    ],
    stack: ['React', 'Shopify Polaris', 'TypeScript'],
  },
  {
    name: 'Znest',
    tag: 'Search UX',
    role: 'Software Engineer · GM2',
    year: '2023',
    blurb: 'Search-flow improvements that measurably optimized the end-user experience.',
    metrics: [
      { v: 'UX', l: 'search flow' },
      { v: 'perf', l: 'front-end' },
    ],
    stack: ['React', 'TypeScript', 'Next.js'],
  },
  {
    name: 'Online Procesamientos',
    tag: 'Platform',
    role: 'Software Engineer',
    year: '2024',
    blurb: 'End-to-end property admin platform: auth, PDFs, emails, notifications, reporting.',
    metrics: [
      { v: '−40%', l: 'op. load time' },
      { v: 'E2E', l: 'front + back' },
    ],
    stack: ['React', 'Firebase', 'TypeScript', 'TailwindCSS'],
  },
  {
    name: 'Aerolab clients',
    tag: 'Product work',
    role: 'Software Engineer · Aerolab',
    year: '2025',
    blurb: 'Modular product work for international clients in a scalable component ecosystem.',
    metrics: [
      { v: '+30%', l: 'render perf' },
      { v: 'intl.', l: 'clients' },
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Shadcn/ui'],
  },
];
