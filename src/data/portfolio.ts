export const profile = {
  name: 'Adedeji John Abolaji',
  firstName: 'Adedeji',
  role: 'MERN Stack Developer',
  tagline: 'I craft end-to-end web experiences with',
  typewriterWords: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  bio: "I'm a passionate MERN stack developer who loves turning ideas into fast, scalable and delightful web products. From pixel-perfect interfaces to robust APIs, I enjoy owning the full journey of an application — designing, building, and shipping it end to end.",
  email: 'adedejiabolaji656@gmail.com',
  github: 'https://github.com/adedejiabolaji656-creator',
  githubHandle: 'github.com/adedejiabolaji656-creator',
  linkedin: 'https://linkedin.com/in/adedeji-abolaji',
  linkedinHandle: 'linkedin.com/in/adedeji-abolaji',
  location: 'Remote · Open to opportunities worldwide',
  availability: 'Available for new opportunities',
}

export const aboutParagraphs = [
  "I'm a fresh graduate and full-stack developer specializing in the MERN stack — MongoDB, Express.js, React, and Node.js. I love building products that live on the web: clean, responsive interfaces backed by well-architected APIs and databases.",
   'My toolkit extends beyond the core stack with TypeScript, GraphQL, and modern UI libraries like Tailwind CSS. I care deeply about code quality, performance, and thoughtful user experiences — and I ship personal projects constantly to keep sharpening my craft.',
  "Right now I'm looking for my first full-time role where I can contribute to real products, learn from experienced engineers, and grow into a well-rounded software craftsman.",
]

export const education = [
  {
    degree: 'B.Tech — Electronics and Computer Engineering',
    institution: 'Lagos State University',
    period: '2016 — 2022',
    detail:
      'Graduated with a solid foundation in electronics and computer engineering. Coursework included embedded systems, signal processing, computer networks, and software development.',
    icon: 'graduation',
  },
  {
    degree: 'Full-Stack Web Development (MERN) Certification',
    institution: 'Babtech School of Technology',
    period: '2026',
    detail:
      'Intensive project-based program covering React, Node.js, Express, MongoDB, authentication, testing, and deployment. Built production-grade projects and gained hands-on experience in modern web development.',
    icon: 'award',
  },
]

export const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '1200+', label: 'Hours of Code' },
  { value: '5★', label: 'Open-Source Spirit' },
]

export type Skill = { name: string; level: number }
export type SkillCategory = {
  title: string
  blurb: string
  icon: 'palette' | 'server' | 'database'
  accent: string
  bar: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    blurb: 'Interfaces that feel instant and look sharp',
    icon: 'palette',
    accent: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
    bar: 'from-cyan-400 to-sky-500',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    blurb: 'APIs and services built to scale',
    icon: 'server',
    accent: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
    bar: 'from-emerald-400 to-teal-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    blurb: 'Data modeling and a smooth workflow',
    icon: 'database',
    accent: 'text-violet-300 bg-violet-400/10 border-violet-400/20',
    bar: 'from-violet-400 to-fuchsia-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Mongoose', level: 88 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Redux Toolkit', level: 82 },
    ],
  },
]

export const marqueeSkills = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'TypeScript',
  'GraphQL',
  'Tailwind CSS',
  'Redux',
  'JWT',
  'Mongoose',
  'REST APIs',
]

export type Service = {
  title: string
  description: string
  icon: 'layers' | 'pen' | 'plug'
  accent: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description:
      'End-to-end web applications built with the MERN stack — from database schema to deployed product.',
    icon: 'layers',
    accent: 'text-emerald-300 bg-emerald-400/10 group-hover:bg-emerald-400/20',
    points: [
      'Single-page apps & dashboards with React',
      'Node.js + Express backends with clean architecture',
      'MongoDB schema design & performance tuning',
      'Auth, roles, payments & third-party integrations',
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'Interfaces that are beautiful, accessible, and effortless to use — designed with intent, not decoration.',
    icon: 'pen',
    accent: 'text-cyan-300 bg-cyan-400/10 group-hover:bg-cyan-400/20',
    points: [
      'Wireframes to polished, responsive screens',
      'Design systems & reusable component libraries',
      'Micro-interactions and smooth motion design',
      'Mobile-first, accessibility-minded layouts',
    ],
  },
  {
    title: 'REST API Design & Integration',
    description:
      'Well-documented, secure APIs that frontends love to consume — plus seamless third-party integrations.',
    icon: 'plug',
    accent: 'text-violet-300 bg-violet-400/10 group-hover:bg-violet-400/20',
    points: [
      'RESTful & GraphQL API design and documentation',
      'JWT / OAuth authentication & authorization',
      'Payment gateways, email, storage & maps',
      'Rate limiting, validation & error handling',
    ],
  },
]

export type Project = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  cover: 'kanban' | 'shop' | 'chat'
  accent: string
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'Telemedicine',
    subtitle: 'Healthcare Platform',
    description:
      'A telemedicine platform connecting patients with healthcare providers virtually. Features appointment scheduling, video consultations, medical records management, and prescription handling.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC'],
    cover: 'chat',
    accent: 'from-emerald-400/20 to-teal-500/5',
    github: 'https://github.com/adedejiabolaji656-creator/telemedicine',
    demo: 'https://telemedicine-rouge.vercel.app',
  },
  {
    title: 'SwiftDispatch',
    subtitle: 'Logistics & Delivery Platform',
    description:
      'A logistics and delivery management system for optimizing dispatch operations. Includes real-time tracking, route optimization, order management, and driver allocation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    cover: 'kanban',
    accent: 'from-cyan-400/20 to-sky-500/5',
    github: 'https://github.com/adedejiabolaji656-creator/swiftdispatch',
    demo: 'https://swiftdispatch-nine.vercel.app',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
