export const personalData = {
  name: 'Jatin Verma',
  role: 'Software Engineer · Full Stack & C++',
  status: 'Available for opportunities',
  location: 'Mohali, Punjab, India',
  email: 'jatinverma.cu@gmail.com',
  githubUsername: 'jatinverma04',
  resumeUrl: 'https://drive.google.com/file/d/1yJsDBXzWjQlijwTUmMXR7fzRMI8t3D_5/view?usp=sharing',
  bio: "I'm a Computer Science graduate from Chandigarh University with a focus on Full-Stack Web Development, modern React architectures, and C++. I enjoy building fast, responsive applications that solve tangible problems through thoughtful engineering and clean code.",
  social: {
    github: 'https://github.com/jatinverma04',
    linkedin: 'https://linkedin.com/in/jatinverma04',
    email: 'mailto:jatinverma.cu@gmail.com',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'sql-studio',
    title: 'SQL Studio',
    tagline: 'Interactive SQL Sandbox & AI Tutor',
    year: '2024',
    description:
      'Engineered a Monaco Editor query sandbox connected to live PostgreSQL with SELECT-only safety enforcement, DDL blocking, and query timeout handling. Architected dual-database backend (PostgreSQL + MongoDB Atlas) and an AI tutor powered by Gemini API.',
    bullets: [
      'Monaco Editor query sandbox with live PostgreSQL execution and DDL blocking guards',
      'Dual-database backend (PostgreSQL + MongoDB Atlas) supporting full CRUD REST APIs',
      'Google Gemini API AI hint system with custom prompt engineering for step-by-step guidance',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Gemini API'],
    demo: 'https://sql-studio-omega.vercel.app/',
    github: 'https://github.com/jatinverma04/sql-studio',
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    tagline: 'AI-Powered Resume Generator & Customizer',
    year: '2024',
    description:
      'Built a full-featured resume generator with support for 6+ dynamic sections, real-time live preview, and modular component architecture. Integrated Gemini API for tailored bullet point optimization and ImageKit for asset handling.',
    bullets: [
      'Real-time live document preview with reactive section reordering and formatting',
      'Gemini AI integration for automatic bullet point refinement and job role alignment',
      'ImageKit cloud storage integration for optimized profile asset processing',
    ],
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Gemini API', 'ImageKit'],
    demo: 'https://resume-builder-five-kohl.vercel.app/',
    github: 'https://github.com/jatinverma04/resume-builder',
  },
  {
    id: 'notes-app',
    title: 'Notes App',
    tagline: 'Real-Time Collaborative Workspace',
    year: '2024',
    description:
      'Developed a full-stack collaborative note-taking application using React and Node.js with real-time editing powered by WebSockets, Prisma ORM, PostgreSQL database, and JWT authentication.',
    bullets: [
      'Real-time document synchronization engine via WebSockets for multi-user collaboration',
      'Express.js backend with PostgreSQL via Prisma ORM and granular JWT session auth',
      'Responsive UI with markdown support, hierarchical folders, and instant search',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'WebSockets', 'JWT'],
    demo: 'https://notes-app-dusky-eight.vercel.app/',
    github: 'https://github.com/jatinverma04/NotesApp',
  },
  {
    id: 'sylus-ai',
    title: 'Sylus AI',
    tagline: 'Conversational Chatbot with Multi-Turn Memory',
    year: '2024',
    description:
      'Connected Gemini API (gemini-1.5-flash) to deliver context-aware chatbot responses across multiple user queries per session with responsive React UI, custom animations, and centralized state management.',
    bullets: [
      'Gemini 1.5 Flash integration for context-aware multi-turn conversational chat',
      'Responsive UI with custom CSS micro-animations and seamless mobile experience',
      'Centralized state management with React Context API for query history retention',
    ],
    tech: ['React.js', 'Gemini API', 'Context API', 'JavaScript', 'CSS3'],
    demo: 'https://sylus-ai.vercel.app/',
    github: 'https://github.com/jatinverma04/Sylus-AI',
  },
]

export const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT Authentication'],
  },
  {
    category: 'Databases & ORM',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Prisma ORM', 'Supabase'],
  },
  {
    category: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    category: 'Tools & Ecosystem',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'npm / yarn', 'Figma (Basic)'],
  },
  {
    category: 'Core Computer Science',
    skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOPs', 'Computer Networks'],
  },
]

export const educationData = [
  {
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'Chandigarh University',
    location: 'Mohali, Punjab, India',
    duration: '2021 – 2025',
    grade: '8.13 CGPA',
    description:
      'Studied core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Web Technologies, and Software Engineering principles.',
    tags: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'Full Stack', 'C++'],
  },
]

export const quotes = [
  {
    id: 'quote-1',
    text: 'Simplicity is prerequisite for reliability.',
    author: 'Edsger W. Dijkstra',
    source: 'EWD498',
  },
  {
    id: 'quote-2',
    text: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck',
    source: 'Software Engineering Principles',
  },
  {
    id: 'quote-3',
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
    source: 'Design Thinking',
  },
  {
    id: 'quote-4',
    text: 'Good code is its own best documentation.',
    author: 'Steve McConnell',
    source: 'Code Complete',
  },
]
