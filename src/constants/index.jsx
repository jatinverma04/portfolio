import React from 'react';
import { LinkPreview } from '../components/ui/LinkPreview';

// ─── NAV LINKS ──────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// ─── HERO DATA ──────────────────────────────────────────────
export const heroData = {
  badge: 'Available for opportunities',
  greeting: "Hi, I'm",
  name: 'Jatin Verma',
  role: 'Software Engineer',
  tagline: (
    <>
      Turning ideas into{' '}
      <span style={{ color: 'var(--accent)' }} className="font-medium">clean, interactive</span>{' '}
      web experiences. I build fast, beautiful, and intuitive interfaces that users love.
    </>
  ),
  actions: {
    primary: { label: 'View My Work →', href: '#projects' },
    resume: { label: 'Download Resume', href: 'https://drive.google.com/file/d/1Cet18VUU6qK1f25wRsJX7L_YVuuxxGho/view?usp=sharing' },
    connect: { label: "Let's Connect", href: '#contact' }
  }
};

// ─── ABOUT DATA ──────────────────────────────────────────────
export const aboutData = {
  header: 'Get to know me',
  title: 'About Me',
  paragraphs: [
    <>
      I'm a Computer Science Engineering graduate from <LinkPreview url="https://www.cuchd.in/" className="text-primary-var font-semibold">Chandigarh University</LinkPreview> with a strong passion for Full Stack Development.
    </>,
    <>
      I specialize in <span className="text-violet-400 font-medium">C++</span>, building responsive, user-friendly web interfaces using <span className="text-violet-400 font-medium">React.js</span>, modern CSS tools like <span className="text-violet-400 font-medium">Tailwind CSS</span>, and working with <span className="text-violet-400 font-medium">Databases</span> like SQL, PostgreSQL and MongoDB. I enjoy solving real-world problems through thoughtful design and clean code.
    </>,
    <>
      Beyond the frontend, I have a strong understanding of <span className="text-violet-400 font-medium">Node.js</span> that helps me collaborate effectively with backend teams. I'm actively looking for opportunities where I can grow, contribute, and build things that matter.
    </>
  ]
};

// ─── EDUCATION DATA ─────────────────────────────────────────
export const educationData = {
  header: 'My background',
  title: 'Education',
  degree: 'Bachelor of Engineering',
  major: 'Computer Science Engineering',
  duration: '2025',
  grade: '⭐ 8.13 CGPA',
  institution: 'Chandigarh University',
  location: 'Mohali, Punjab, India',
  description: 'Studied core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Web Technologies, and AI/ML. Developed strong problem-solving skills and hands-on project experience.',
  tags: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'Web Development', 'AI/ML']
};

// ─── SVG ICONS FOR SKILLS & CONTACT ─────────────────────────
export const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#61DAFB">
    <circle cx="12" cy="12" r="2.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
)
export const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <text x="3" y="18" fontSize="11" fontWeight="bold" fill="#000">JS</text>
  </svg>
)
export const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E34F26">
    <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm14.5 5H8l.3 3.5h8.9l-.9 9.5-4.3 1.2-4.3-1.2-.3-3.5h3l.15 1.7 1.45.4 1.45-.4.15-2H7.4L6.8 7H17.5z" />
  </svg>
)
export const TSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <text x="2.5" y="17" fontSize="10" fontWeight="bold" fill="white">TS</text>
  </svg>
)
export const CSSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1572B6">
    <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3zm14.5 5H8l.3 3h9l-.5 5.5-4.8 1.3-4.8-1.3-.3-3h3l.15 1.5 1.95.5 1.95-.5.2-2.5H7.9L7.3 7H17.5z" />
  </svg>
)
export const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#06B6D4">
    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.37 10.8 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.63 7.2 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5-.76-.19-1.31-.74-1.91-1.35C8.37 16.8 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.63 13.2 9.47 12 7 12z" />
  </svg>
)
export const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933">
    <path d="M12 1.85L2 7.3v9.4L12 22.15l10-5.45V7.3L12 1.85zm0 2.3l7.5 4.1v8.2L12 19.85l-7.5-4.1V8.25L12 4.15zm0 3.5a4.35 4.35 0 100 8.7 4.35 4.35 0 000-8.7zm0 1.8a2.55 2.55 0 110 5.1 2.55 2.55 0 010-5.1z" />
  </svg>
)
export const APIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 9l3 3-3 3M13 15h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
export const CppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect width="24" height="24" rx="3" fill="#00599C" />
    <text x="2.5" y="17" fontSize="9" fontWeight="bold" fill="white">C++</text>
  </svg>
)
export const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect width="24" height="24" rx="3" fill="#ED8B00" />
    <text x="2.5" y="17" fontSize="8" fontWeight="bold" fill="white">Java</text>
  </svg>
)
export const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032">
    <path d="M23.13 10.88L13.12.87a2.97 2.97 0 00-4.2 0L6.8 2.98l2.66 2.66a3.52 3.52 0 014.46 4.47l2.57 2.57a3.52 3.52 0 11-.84.84l-2.4-2.4v6.3a3.52 3.52 0 11-1.4-.12V10.2a3.52 3.52 0 01-1.91-4.6L7.3 2.97.87 9.4a2.97 2.97 0 000 4.2l10.01 10.01a2.97 2.97 0 004.2 0l8.05-8.05a2.97 2.97 0 000-4.18z" />
  </svg>
)
export const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#007ACC">
    <path d="M17 1.5L8.5 9.5 4 6 1.5 7.5l4.5 4.5-4.5 4.5L4 18l4.5-3.5L17 22.5l5.5-2.5v-16L17 1.5zm0 5.7v9.6L10.5 12 17 7.2z" />
  </svg>
)
export const NpmIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#CB3837">
    <path d="M0 7.3v9.4h6.7v1.6H12v-1.6h12V7.3H0zm6.7 8v-6.6H4v6.6H1.3V8.7h5.4V15.3zm6.6 1.6h-2.6v-1.6H9.3V8.7h4v5.3h-2.7v.9h2.7v2zm8-1.6h-2.6V8.7h2.6v6.6h-2.7v-6.6h2.7v6.6z" />
  </svg>
)
export const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83" />
    <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF" />
    <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8C5.79 8 4 6.21 4 4z" fill="#F24E1E" />
    <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262" />
    <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="#1ABCFE" />
  </svg>
)
export const SQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect width="24" height="24" rx="3" fill="#336791" />
    <text x="2" y="16.5" fontSize="8.5" fontWeight="bold" fill="white">SQL</text>
  </svg>
)
export const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#336791">
    <path d="M17.13 2.45c-.88-.24-1.83-.28-2.73-.15A9.03 9.03 0 0012 2a9 9 0 00-9 9c0 3.39 1.87 6.33 4.63 7.91-.07.58-.1 1.17-.06 1.75.09 1.23.44 2.08.96 2.08.19 0 .41-.08.67-.3.64-.53 1.28-1.78 1.56-3.18A9 9 0 1017.13 2.45zm-3.4 15.8c-.26 1.13-.73 2.08-1.16 2.44a.3.3 0 01-.09.05c-.1-.16-.33-.79-.39-1.7-.04-.54-.01-1.1.06-1.65.33.08.67.13 1.01.15.53.03 1.06 0 1.58-.1-.27.29-.63.58-1.01.81zm2.22-1.93c-.67.19-1.37.26-2.07.22a7.14 7.14 0 01-1.27-.21 7.07 7.07 0 01-.84 3.1 7.5 7.5 0 01-5.98-7.34A7.5 7.5 0 0112 4.5c.72 0 1.42.1 2.07.29a4.07 4.07 0 00-.67 2.13c0 .71.19 1.37.52 1.95a3.47 3.47 0 001.34 1.27 3.43 3.43 0 001.94.38c.4-.04.79-.14 1.16-.3a7.48 7.48 0 01-2.41 8.1zM17 9.86a2 2 0 01-1.04-.23 2 2 0 01-.77-.73 2.02 2.02 0 01-.29-1.08c0-.74.37-1.39.94-1.77.18.05.36.12.53.2.73.35 1.3.97 1.58 1.75a2 2 0 01.05.5 2 2 0 01-.07.52A2.02 2.02 0 0117 9.86z" />
  </svg>
)
export const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248">
    <path d="M17.19 10.87C16.53 5.8 13.56 4.22 13.0 3.27c-.6-1.03-.63-1.96-.63-2.02v-.01c0-.01 0-.01 0 0-.01 0-.01 0-.01.01 0 .06-.03.99-.63 2.02C11.17 4.22 8.2 5.8 7.54 10.87a8.6 8.6 0 003.24 7.66c.18.14.38.24.59.32v.06l.09 2.87c0 .1.08.17.18.17h.72c.1 0 .18-.08.18-.17l.09-2.87v-.06c.21-.08.41-.18.59-.32a8.6 8.6 0 003.97-7.66z" />
  </svg>
)
export const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3ECF8E">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.101 12.978.734 14.29 1.9 14.29h9.596a.9.9 0 01.9.9L12.1 22.964c.015.986 1.26 1.41 1.874.637l9.262-11.653c.663-.928.03-2.24-1.136-2.24h-9.596a.9.9 0 01-.9-.9l.296-7.772z" />
  </svg>
)
export const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7952B3">
    <path d="M6.375 2A2.375 2.375 0 004 4.375v15.25A2.375 2.375 0 006.375 22h7.5c2.9 0 4.95-1.55 4.95-4.125 0-1.8-1.05-3.175-2.7-3.675 1.2-.5 2.025-1.7 2.025-3.075C18.15 8.6 16.3 7 13.5 7H6.375zM8 9.5h4.875c1.2 0 2.025.75 2.025 1.875S14.075 13.25 12.875 13.25H8V9.5zm0 5.75h5.25c1.425 0 2.325.825 2.325 2.1S14.675 19.5 13.25 19.5H8v-4.25z" />
  </svg>
)
export const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF6C37">
    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.855.855 0 00-1.209-1.209L8.794 10.13l-.348-.348a.63.63 0 00-.882 0 .63.63 0 000 .882l.348.348-1.382 1.382a2.1 2.1 0 000 2.963l.293.293-1.27 1.27a.63.63 0 00.882.882l1.27-1.27.293.293a2.1 2.1 0 002.963 0l1.382-1.382.348.348a.63.63 0 00.882 0 .63.63 0 000-.882l-.348-.348 4.453-4.453a.855.855 0 00-.607-1.46z" />
  </svg>
)

export const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
export const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
export const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

// ─── SKILLS DATA ────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-violet-900/30 to-purple-900/20 border-violet-800/30',
    headerColor: 'text-violet-400',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    skills: [
      { name: 'React.js', icon: <ReactIcon />, level: 85 },
      { name: 'JavaScript', icon: <JSIcon />, level: 80 },
      { name: 'TypeScript', icon: <TSIcon />, level: 70 },
      { name: 'HTML5', icon: <HTMLIcon />, level: 90 },
      { name: 'CSS3', icon: <CSSIcon />, level: 85 },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'Bootstrap', icon: <BootstrapIcon /> },
    ],
  },
  {
    title: 'Backend',
    color: 'from-violet-900/30 to-purple-900/20 border-violet-800/30',
    headerColor: 'text-violet-400',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>,
    skills: [
      { name: 'Node.js', icon: <NodeIcon />, level: 70 },
      { name: 'REST APIs', icon: <APIIcon />, level: 75 },
    ],
  },
  {
    title: 'Databases',
    color: 'from-pink-900/30 to-fuchsia-900/20 border-pink-800/30',
    headerColor: 'text-pink-400',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" /></svg>,
    skills: [
      { name: 'SQL', icon: <SQLIcon />, level: 78 },
      { name: 'PostgreSQL', icon: <PostgresIcon />, level: 75 },
      { name: 'MongoDB', icon: <MongoIcon />, level: 72 },
      { name: 'Supabase', icon: <SupabaseIcon />, level: 72 },
    ],
  },
  {
    title: 'Tools',
    color: 'from-stone-800/40 to-zinc-800/30 border-stone-700/30',
    headerColor: 'text-stone-300',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    skills: [
      { name: 'Git & GitHub', icon: <GitIcon /> },
      { name: 'VS Code', icon: <VSCodeIcon /> },
      { name: 'npm / yarn', icon: <NpmIcon /> },
      { name: 'Postman', icon: <PostmanIcon /> },
      { name: 'Figma (Basic)', icon: <FigmaIcon /> },
    ],
  },
  {
    title: 'Languages',
    color: 'from-violet-800/25 to-purple-900/25 border-violet-700/30',
    headerColor: 'text-violet-300',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    skills: [
      { name: 'JavaScript', icon: <JSIcon /> },
      { name: 'TypeScript', icon: <TSIcon /> },
      { name: 'C++', icon: <CppIcon /> },
      { name: 'Java', icon: <JavaIcon /> },
    ],
  },
  {
    title: 'Concepts',
    color: 'from-violet-950/40 to-purple-950/30 border-violet-900/30',
    headerColor: 'text-violet-400',
    headerIcon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1M7.05 7.05A7 7 0 1016.95 16.95 7 7 0 007.05 7.05z" /></svg>,
    skills: [
      {
        name: 'Data Structures & Algorithms',
        icon: <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" /></svg>,
      },
      {
        name: 'Operating Systems',
        icon: <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" /></svg>,
      },
      {
        name: 'DBMS',
        icon: <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><ellipse cx="12" cy="5" rx="9" ry="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" /></svg>,
      },
      {
        name: 'OOPs',
        icon: <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      },
    ],
  },
];

// ─── PROJECTS DATA ──────────────────────────────────────────
export const projects = [
  {
    id: 1,
    name: 'SQL Studio',
    tagline: 'Full-Stack SQL Learning Platform',
    bullets: [
      'Engineered a Monaco Editor-based query sandbox connected to live PostgreSQL with SELECT-only enforcement, DDL blocking, and query timeout handling.',
      'Architected a dual-database system (PostgreSQL + MongoDB Atlas) with a RESTful API backend supporting full CRUD, CORS, and environment-based deployment.',
      'Developed an AI hint system using Google Gemini API with custom prompt engineering to deliver contextual SQL guidance without exposing direct solutions.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Gemini API'],
    emoji: '🗄️',
    color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20',
    gradient: 'from-indigo-500 to-violet-500',
    demo: 'https://sql-studio-omega.vercel.app/',
    github: 'https://github.com/jatinverma04/sql-studio',
  },
  {
    id: 2,
    name: 'Resume Builder',
    tagline: 'AI-Powered Resume Generator',
    bullets: [
      'Built using React.js and Node.js with support for 6+ resume sections, real-time preview, and a reusable component architecture.',
      'Architected a Node.js backend leveraging the Gemini API for AI content generation, achieving a 35% reduction in API latency for content suggestions.',
      'Integrated ImageKit for optimized image uploads and asset handling across user profiles and resume templates.',
    ],
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Gemini API', 'ImageKit'],
    emoji: '📄',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
    gradient: 'from-emerald-400 to-teal-500',
    demo: 'https://resume-builder-five-kohl.vercel.app/',
    github: 'https://github.com/jatinverma04/resume-builder',
  },
  {
    id: 3,
    name: 'Notes App',
    tagline: 'Real-Time Collaborative Notes',
    bullets: [
      'Developed a full-stack collaborative app using React and Node.js with a responsive UI styled with TailwindCSS and robust state management.',
      'Engineered a real-time collaboration engine using WebSockets, enabling simultaneous editing with instant sync and granular permission controls.',
      'Designed a secure backend with Express.js and PostgreSQL via Prisma ORM, implementing JWT auth and efficient data modeling for folder hierarchies.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'WebSockets', 'JWT'],
    emoji: '📝',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    gradient: 'from-blue-400 to-cyan-500',
    demo: 'https://notes-app-dusky-eight.vercel.app/',
    github: 'https://github.com/jatinverma04/NotesApp',
  },
  {
    id: 4,
    name: 'Sylus AI',
    tagline: 'AI Chatbot with Gemini',
    bullets: [
      'Connected Gemini API (gemini-1.5-flash) to deliver context-aware chatbot responses across multiple user queries per session.',
      'Crafted a responsive interface using React.js and custom CSS animations, supporting desktop and mobile with consistent UI behavior.',
      'Orchestrated centralized state with Context API and built chatbot workflows in JavaScript to support 3+ conversation states for multi-turn interactions.',
    ],
    tech: ['React.js', 'Gemini API', 'Context API', 'JavaScript'],
    emoji: '🤖',
    color: 'from-orange-500/10 to-pink-500/10 border-orange-500/20',
    gradient: 'from-orange-400 to-pink-500',
    demo: 'https://sylus-ai.vercel.app/',
    github: 'https://github.com/jatinverma04/Sylus-AI',
  },
];

// ─── CONTACT DATA ───────────────────────────────────────────
export const contactData = {
  header: 'Get in touch',
  title: 'Contact Me',
  description: "I'm always open to new opportunities, collaborations, or just a good tech conversation. Feel free to reach out!"
};

export const socialLinks = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'jatinverma.cu@gmail.com',
    href: 'mailto:jatinverma.cu@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jatinverma04',
    href: 'https://linkedin.com/in/jatinverma04',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/jatinverma04',
    href: 'https://github.com/jatinverma04',
  },
];
