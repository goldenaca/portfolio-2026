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
    role: 'Frontend Engineer · Bowery',
    year: '2022',
    blurb: 'Led the redesign of a dental platform used by 60,000+ people across LATAM.',
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
    blurb: 'Real-time operations dashboard used by US airspace authorities to manage drone flights.',
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
    blurb: 'Shopify widget that turns refund requests into personalized discounts to retain customers.',
    metrics: [
      { v: '+ret.', l: 'customer retention' },
      { v: 'Shopify', l: 'Polaris · Storefront' },
    ],
    stack: ['React', 'Shopify Polaris', 'TypeScript'],
  },
  {
    name: 'MyElixa',
    tag: 'Mobile · IoT',
    role: 'Frontend Engineer · Bowery',
    year: '2021',
    blurb: "React Native app tracking seniors' water intake via a bottle-mounted band.",
    metrics: [
      { v: 'CES', l: '2021 showcase' },
      { v: 'IoT', l: 'bottle band' },
    ],
    stack: ['React Native', 'TypeScript', 'Redux'],
  },
  {
    name: 'Online Procesamientos',
    tag: 'Platform',
    role: 'Software Engineer',
    year: '2024',
    blurb: 'Sole architect of a platform for condominium administrators: PDF statements, email and WhatsApp notifications.',
    metrics: [
      { v: '−40%', l: 'op. load time' },
      { v: 'E2E', l: 'front + back' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Firebase'],
  },
  {
    name: 'Aerolab clients',
    tag: 'Product work',
    role: 'Software Engineer · Aerolab',
    year: '2025',
    blurb: 'End-to-end features and LLM-powered search for a New York–based product.',
    metrics: [
      { v: '+30%', l: 'component perf' },
      { v: '50K+', l: 'users, LLM search' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Perplexity API'],
  },
];
