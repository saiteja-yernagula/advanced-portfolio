import type { SkillItem, ExperienceItem, ProjectItem, ImpactStat, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Saiteja Yernagula",
  title: "Python Full Stack Trainer | Developer | Mentor",
  tagline: "From learning on a mobile phone to training 1000+ students — I build developers, not just coders.",
  subTagline: "3+ Years of transforming aspiring learners into industry-ready software engineers through project-driven architecture and real-world problem solving.",
  email: "saiteja.yernagula@gmail.com",
  linkedIn: "https://linkedin.com/in/saiteja-yernagula",
  github: "https://github.com/saiteja-yernagula",
  location: "Hyderabad / India",
  availability: "Open for Mentorship, Full-Stack Training & Tech Consulting",
  experienceYears: "3+ Years",
};

export const STORY_PILLARS = [
  {
    title: "Student-First Perspective",
    description: "Deconstructing complex architectural paradigms into intuitive, relatable mental models based on student empathy.",
    icon: "HeartHandshake",
    badge: "Empathy Driven"
  },
  {
    title: "Real-World Problem Solving",
    description: "Moving far beyond syntax to build production-grade debugging, system design, and algorithmic reasoning skills.",
    icon: "Cpu",
    badge: "Industry Ready"
  },
  {
    title: "100% Project-Based Mastery",
    description: "Every theoretical concept is immediately reinforced by engineering end-to-end full-stack applications.",
    icon: "Layers",
    badge: "Hands-on First"
  },
  {
    title: "Mindset & Career Resilience",
    description: "Training consistency, mental fortitude, code discipline, and interview readiness to thrive in high-demand roles.",
    icon: "Sparkles",
    badge: "Mindset & Growth"
  }
];

export const STORY_TIMELINE = [
  {
    phase: "The Spark & Responsibility",
    period: "B.Tech Era",
    tagline: "Teaching to fund education & discovering the passion",
    narrative: "Coming from a mechanical engineering background, tech wasn't handed to me. During my B.Tech, I started teaching to fund my own education. That early teaching shaped my innate ability to connect with students and break down difficult ideas long before I entered software.",
    badge: "Humble Beginnings",
    icon: "GraduationCap"
  },
  {
    phase: "Mobile-Only Self-Learning",
    period: "3-Month Breakthrough",
    tagline: "Coding HTML, CSS & JavaScript on a 6-inch phone screen",
    narrative: "Without access to a laptop initially, I practiced HTML, CSS, and JavaScript directly on a mobile phone. Curiosity turned into unstoppable passion. Within just 3 months of rigorous self-learning, I secured my first professional trainer role at Anudip Foundation.",
    badge: "Resourcefulness",
    icon: "Smartphone"
  },
  {
    phase: "The Mission & Evolution",
    period: "3+ Years Across 4 Institutions",
    tagline: "Ensuring no student has to struggle through the dark alone",
    narrative: "I faced every barrier students face today: lack of guidance, confusing documentation, and resource constraints. I vowed that my students would never go through that friction. I spent years refining modern pedagogy with top mentors and delivering outcome-based full-stack mastery.",
    badge: "Proven Impact",
    icon: "Flame"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "React.js", level: 95, iconName: "Atom", category: "frontend", highlight: true, tagline: "Hooks, Context, Custom Architectures, Performance" },
  { name: "Redux Toolkit", level: 90, iconName: "Boxes", category: "frontend", highlight: true, tagline: "Global State, RTK Query, Slices, Middleware" },
  { name: "JavaScript (ES6+)", level: 96, iconName: "Code2", category: "frontend", highlight: true, tagline: "Async/Await, Closures, Prototypes, Event Loop" },
  { name: "HTML5 & Semantic UI", level: 98, iconName: "FileCode2", category: "frontend", tagline: "Accessible, SEO-friendly structured markup" },
  { name: "CSS3 & Animations", level: 94, iconName: "Palette", category: "frontend", tagline: "Flexbox, Grid, Custom Keyframes, Transitions" },
  { name: "Bootstrap 5 & Tailwind", level: 92, iconName: "LayoutGrid", category: "frontend", tagline: "Rapid responsive prototyping and design systems" },
  
  // Backend
  { name: "Python", level: 96, iconName: "Terminal", category: "backend", highlight: true, tagline: "OOP, Data Structures, Decorators, Generators" },
  { name: "Django & REST Framework", level: 94, iconName: "Server", category: "backend", highlight: true, tagline: "ORM, Class-based Views, Serializers, JWT Auth" },
  
  // Database
  { name: "MySQL", level: 90, iconName: "Database", category: "database", highlight: true, tagline: "Relational Schemas, Complex Joins, Indexing, Triggers" },
  
  // Tools & Additional
  { name: "Git & GitHub", level: 92, iconName: "GitBranch", category: "tools", highlight: true, tagline: "Version control, Branching strategies, CI/CD basics" },
  { name: "NumPy & Pandas", level: 86, iconName: "BarChart3", category: "tools", tagline: "Data manipulation, analytics, tabular processing" },
  
  // Mentorship
  { name: "Technical Pedagogy", level: 98, iconName: "BookOpenCheck", category: "mentorship", highlight: true, tagline: "Curriculum engineering, project sprints, live code reviews" },
  { name: "Interview & Placement Prep", level: 95, iconName: "Briefcase", category: "mentorship", highlight: true, tagline: "DSA fundamentals, mock interviews, system design walkthroughs" }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "codegnan",
    company: "Codegnan",
    role: "Senior Python Full Stack Trainer & Mentor",
    duration: "1 Year (Current)",
    period: "Present",
    badge: "Current Role",
    type: "current",
    color: "#00f0ff",
    highlights: [
      "Orchestrating end-to-end Full Stack training (Frontend + Backend + Real-world capstones) for large cohort batches.",
      "Mentoring 500+ aspiring software engineers on building enterprise-grade React & Django web systems.",
      "Implementing rigorous code reviews, automated quiz assessments, and performance tracking to boost placement outcomes.",
      "Conducting intensive mock technical interviews, resume engineering, and live debugging sessions."
    ],
    skills: ["Python", "Django", "React.js", "Redux", "MySQL", "REST APIs", "Placement Mentoring"],
    metrics: "500+ Students Mentored • 90%+ Capstone Completion"
  },
  {
    id: "vector-india",
    company: "Vector India",
    role: "Python Full Stack & Backend Trainer",
    duration: "6 Months",
    period: "Previous",
    badge: "Backend & Systems",
    type: "past",
    color: "#8b5cf6",
    highlights: [
      "Spearheaded backend curriculum delivery focusing on Python OOP, Django architecture, and MySQL relational modeling.",
      "Trained engineers to design RESTful API micro-services with secure authentication & relational query optimizations.",
      "Bridged the gap between frontend interfaces and backend databases through live full-stack capstone builds."
    ],
    skills: ["Python", "Django REST Framework", "MySQL", "Database Normalization", "Backend Architecture"],
    metrics: "250+ Engineers Upskilled • 40+ Full Stack Projects Delivered"
  },
  {
    id: "10000-coders",
    company: "10000 Coders",
    role: "Frontend & Full Stack Trainer",
    duration: "14 Months",
    period: "Transformation Phase",
    badge: "Pedagogy Mastery",
    type: "past",
    color: "#10b981",
    highlights: [
      "Key transformation milestone: engineered advanced student outcome tracking and project sprint methodologies.",
      "Delivered high-intensity frontend training across React, JavaScript ES6+, Redux Toolkit, and UI state management.",
      "Instilled code discipline, clean architecture principles, and outcome-based engineering culture in 400+ students."
    ],
    skills: ["React.js", "JavaScript ES6+", "Redux", "State Management", "Student Tracking Systems"],
    metrics: "400+ Students Trained • 600+ Frontend Capstones Built"
  },
  {
    id: "anudip-foundation",
    company: "Anudip Foundation",
    role: "Technical Trainer (Web Fundamentals)",
    duration: "5 Months",
    period: "Foundation Phase",
    badge: "Career Genesis",
    type: "past",
    color: "#f59e0b",
    highlights: [
      "Secured this trainer position within 3 months of self-learning web technologies on a mobile device.",
      "Trained grassroots students in HTML5, CSS3, JavaScript, and digital literacy.",
      "Established foundational pedagogy, classroom management, and empathetic student guidance techniques."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Classroom Pedagogy", "Foundational Training"],
    metrics: "150+ Grassroots Students Upskilled from Scratch"
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "students",
    number: 1000,
    suffix: "+",
    label: "Students Trained",
    description: "Transformed from complete beginners & non-CS backgrounds into confident, job-ready full stack engineers.",
    iconName: "Users",
    color: "#00f0ff"
  },
  {
    id: "projects",
    number: 2000,
    suffix: "+",
    label: "Projects Delivered",
    description: "Built and reviewed across React, Django, REST APIs, state management, and relational database systems.",
    iconName: "FolderGit2",
    color: "#8b5cf6"
  },
  {
    id: "companies",
    number: 100,
    suffix: "+",
    label: "Companies Placed",
    description: "Students successfully placed across top IT services, product startups, and MNC tech firms.",
    iconName: "Building2",
    color: "#10b981"
  },
  {
    id: "crore-projects",
    number: 100,
    suffix: "%",
    label: "High-Value Project Impact",
    description: "Students actively architecting high-scale, crore-level enterprise software systems globally.",
    iconName: "ShieldCheck",
    color: "#f59e0b"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "student-globe-app",
    title: "Student Globe App",
    subtitle: "Interactive 3D Global Showcase of Student Engineering Projects",
    badge: "Featured 3D WebGL Platform",
    techStack: ["React", "JavaScript", "Three.js/WebGL", "Vite", "CSS3", "Framer Motion"],
    description: "An interactive 3D platform that showcases student projects across different locations around the world. Explore projects through an immersive globe interface, filter by category, view project details and media, and navigate through guided presentation tours.",
    keyFeatures: [
      "Interactive 3D WebGL Globe with coordinates mapping student capstone projects globally",
      "Dynamic filtering by full-stack, frontend, and backend engineering categories",
      "Guided presentation tours with cinematic camera flight paths across project hubs",
      "Rich interactive project modals showcasing live architecture specs, media previews, and repo links",
      "Optimized 60 FPS WebGL rendering with responsive touch and mouse orbit controls"
    ],
    roleDescription: [
      "Architected the 3D globe visualization layer in Three.js and integrated with React component state",
      "Designed spatial coordinate mapping and dynamic category filter pipelines",
      "Built immersive presentation flight tours for showcase presentations"
    ],
    liveLink: "https://projectolio.vercel.app/",
    githubLink: "https://github.com/saiteja-yernagula",
    metrics: ["Live 3D Globe Interface", "60 FPS WebGL", "Global Student Project Map"],
    isFeatured: true,
    color: "#00f0ff"
  },
  {
    id: "projectolio",
    title: "Projectolio",
    subtitle: "Enterprise-Grade Online Quiz & Performance Assessment Platform",
    badge: "Featured Full-Stack System",
    techStack: ["React.js", "Django REST", "MySQL", "JWT Auth", "Bootstrap 5", "Chart.js"],
    description: "A production-grade, full-stack assessment platform engineered for real-time examination, timed student evaluations, instant auto-grading, and deep administrative performance analytics.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) separating Admin controllers and Student test-takers",
      "Dynamic timer-based test engine with anti-cheat state preservation and automated submission",
      "Instant auto-evaluation engine with comprehensive question-by-question explanations",
      "Admin Analytics Dashboard visualizing class-wide average scores, pass percentages, and topic weak-spots",
      "Bulk Quiz Generator supporting spreadsheet / Excel imports for rapid test deployment",
      "RESTful API architecture built on Django with JWT token rotation and optimized MySQL queries"
    ],
    roleDescription: [
      "Architected the end-to-end full stack architecture from relational database schema to React state flows",
      "Developed secure Django REST APIs with customized permissions and serializer validations",
      "Crafted an intuitive, high-responsiveness frontend UI with interactive test interfaces and analytics charts",
      "Trained dozens of students to recreate modular components of this system as capstone portfolio builds"
    ],
    liveLink: "https://projectolio.vercel.app/",
    githubLink: "https://github.com/saiteja-yernagula",
    metrics: ["Live Interactive Simulator Built-In", "Sub-100ms API Response", "100% RBAC Secured"],
    isFeatured: true,
    color: "#8b5cf6"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "training-mentorship",
    title: "Python Full Stack Training",
    badge: "Flagship Offering",
    tagline: "Transforming curious minds into high-performing full-stack engineers with zero fluff.",
    deliverables: [
      "Complete Frontend Mastery (React, Redux, ES6+, Responsive Design)",
      "Robust Backend Engineering (Python, Django REST Framework, MVC / MVT)",
      "Database Architecture (MySQL, Normalization, Query Optimization)",
      "100% Project-Based Curriculum with Real Enterprise Capstones"
    ],
    idealFor: "Students, Career Switchers, Bootcamp Cohorts & Corporate Teams",
    iconName: "GraduationCap",
    color: "#00f0ff"
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Web Development",
    badge: "Engineering Services",
    tagline: "Custom web applications engineered for speed, clean architecture, and scalability.",
    deliverables: [
      "Modern React.js SPA & Next-ready frontend user experiences",
      "Django REST API development with secure JWT authentication",
      "Database schema modeling, migration management & relational tuning",
      "Third-party integrations, payment gateways & analytics dashboards"
    ],
    idealFor: "Startups, Businesses & EdTech Platforms",
    iconName: "Code2",
    color: "#8b5cf6"
  },
  {
    id: "career-guidance",
    title: "Career & Interview Mentorship",
    badge: "Placement Accelerator",
    tagline: "Strategic positioning, technical interview simulations, and resume refinement.",
    deliverables: [
      "ATS-Optimized Software Engineer Resume Engineering",
      "1-on-1 Mock Technical Interviews & Live Coding Drills",
      "System Design & Architecture Walkthroughs for Freshers & Juniors",
      "Mindset coaching on overcoming imposter syndrome and interview anxiety"
    ],
    idealFor: "Graduates targeting top IT service & product company placements",
    iconName: "Compass",
    color: "#10b981"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ramesh K.",
    role: "Full Stack Developer at Product Firm",
    batch: "Codegnan Alum",
    text: "Saiteja Sir's method of breaking down Django APIs and React hooks is unmatched. Coming from a non-CS background, his guidance helped me land a 7 LPA role within 4 months!",
    rating: 5
  },
  {
    name: "Pooja V.",
    role: "Frontend Engineer at MNC",
    batch: "10000 Coders Alum",
    text: "He doesn't just teach code; he trains how to think like an engineer. The Projectolio capstone project we built under his guidance was the highlight of every technical interview I gave.",
    rating: 5
  },
  {
    name: "Siddharth M.",
    role: "Python Backend Developer",
    batch: "Vector India Alum",
    text: "His personal journey from learning on a mobile phone inspired all of us. His energy in the classroom is contagious and his real-world debugging tricks are pure gold.",
    rating: 5
  }
];
