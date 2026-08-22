// ============================================================
// PERSONAL INFORMATION
// ============================================================
export const personalInfo = {
  name: "Sadia Ferdous",
  title: "Computer Science Student @ NYIT",
  headline: "Backend & AI Engineering | Python · Java · LLMs",
  email: "sadiaferdous003@gmail.com",
  phone: "(516) 800-9127",
  location: "New York",
  github: "https://github.com/Sadia-F",
  linkedin: "https://www.linkedin.com/in/sadiaaferdous",
  resume: "/resume.pdf",
  valueProposition: "I build technology that turns everyday friction into flow.",
  about: "I'm a Computer Science student at NYIT with an AI concentration. I build backend systems and AI-powered tools that make everyday life easier. I believe in solving real problems through code, leadership, and creativity.",
  photographyIntro: "Photography taught me to see the world differently. It's not just about taking pictures — it's about patience, timing, and finding beauty in everyday moments. Just like coding, it's about attention to detail and creating something meaningful.",
  funFacts: [
    "📸 I love photography — especially sunsets",
    "🧩 I'm always looking for problems to solve",
    "🌅 I believe in finding beauty in doing things I love"
  ]
};

// ============================================================
// VISUAL STATS
// ============================================================
export const stats = {
  projects: 4,
  leadershipRoles: "5+",
  technologies: "10+",
  studentsReached: "600+"
};

// ============================================================
// "NOW" SECTION — More specific
// ============================================================
export const now = {
  title: "Currently",
  items: [
    "🚀 Building a RAG-powered chatbot for my portfolio",
    "💼 Learning to deploy ML models with FastAPI",
    "📸 Automating my sunset photography workflow",
    "🔍 Actively seeking Summer 2027 internships"
  ]
};

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    school: "New York Institute of Technology",
    location: "Old Westbury, NY",
    degree: "Bachelor of Computer Science",
    concentration: "Artificial Intelligence",
    expectedGraduation: "May 2027",
    honors: [
      "Dean's Honor List (Spring 2024 & Spring 2025)",
      "Presidential Honor List (Spring 2026)"
    ],
    activities: [
      "Vice President, Bengali Student Association",
      "Treasurer, Society of Women Engineers",
      "Peer Advisor",
      "Peer Health Educator",
      "Web Developer, Campus Slate",
      "Co-Founder, Badminton Team"
    ],
    coursework: [
      "Data Structures",
      "Design & Analysis of Algorithms",
      "Operating Systems",
      "Theory of Computation",
      "Computer Networks",
      "Database Management",
      "Artificial Intelligence",
      "Software Engineering"
    ]
  }
];

// ============================================================
// EXPERIENCE — Using XYZ format
// ============================================================
export const experience = [
  {
    role: "Backend / AI Engineer Intern",
    company: "NutriScan",
    duration: "July 2026 - Present",
    isHighlighted: true,
    achievements: [
      "Accomplished **real-time health data sync**, as measured by **integrating Apple HealthKit, Dexcom, and FreeStyle Libre APIs**, by developing backend REST APIs with Python and MongoDB.",
      "Accomplished **AI-powered food recognition**, as measured by **integrating Google Gemini Flash**, by building scalable REST APIs."
    ],
    technologies: ["Python", "MongoDB", "Google Gemini", "REST APIs", "Git"]
  },
  {
    role: "Software Sales Intern",
    company: "IQVentory",
    duration: "July 2026 - Present",
    isHighlighted: true,
    achievements: [
      "Accomplished **16+ qualified prospects**, as measured by **lead pipeline growth**, by conducting targeted outbound outreach using proprietary CRM."
    ],
    technologies: ["CRM", "Sales", "Lead Management"]
  },
  {
    role: "Tech Coach",
    company: "New York Institute of Technology",
    duration: "July 2026",
    isHighlighted: true,
    achievements: [
      "Accomplished **40 mentored students**, as measured by **successful project completion**, by leading 3 teams per week through full project lifecycles."
    ],
    technologies: ["Arduino", "3D Printing", "Soldering", "Circuit Debugging"]
  },
  {
    role: "Web Developer & Digital Content Manager",
    company: "The Campus Slate, NYIT",
    duration: "September 2024 - Present",
    isHighlighted: true,
    isFavorite: true,
    favoriteReason: "Accomplished **$200+ annual savings**, as measured by **reduced hosting costs**, by building a custom Flask CMS to replace Wix.",
    achievements: [
      "Accomplished **$200+ annual savings**, as measured by **reduced hosting costs**, by building a custom Flask CMS with Supabase and Vercel.",
      "Accomplished **publishing time cut from days to minutes**, as measured by **admin dashboard adoption**, by creating a password-protected self-publishing system."
    ],
    technologies: ["Python", "Flask", "Supabase", "PostgreSQL", "Vercel", "GitHub"]
  }
];

// ============================================================
// PROJECTS — With Live Demos
// ============================================================
export const projects = [
  {
    title: "Campus Slate CMS",
    description: "Custom CMS replacing Wix for student publication",
    problem: "The Campus Slate was paying $200+ annually for a Wix website that limited content control and made publishing slow and difficult.",
    solution: "Built a custom Flask web app with Supabase and Vercel, giving the team full content control.",
    metrics: [
      "💰 Saved $200+ annually by replacing Wix",
      "⚡ Cut publishing time from days to minutes",
      "📈 100% team adoption rate"
    ],
    technologies: ["Python", "Flask", "Supabase", "PostgreSQL", "Vercel"],
    github: "https://github.com/Sadia-F/The-Campus-Slate",
    liveDemo: null,
    date: "September 2024 - Present",
    highlights: [
      "Built Flask web app with Supabase and Vercel, replacing Wix to save $200+ annually",
      "Created password-protected admin dashboard, cutting publishing time from days to minutes"
    ]
  },
  {
    title: "Online Store Management System",
    description: "Full-stack desktop application with three-tier role-based access control",
    problem: "Small businesses needed a simple, affordable way to manage inventory, users, orders, and coupons without expensive SaaS solutions.",
    solution: "Built a Java desktop application with MySQL backend and role-based access control.",
    metrics: [
      "👥 3 role tiers: Customer, Employee, Admin",
      "🔄 Real-time inventory management",
      "💳 Integrated coupon system"
    ],
    technologies: ["Java", "MySQL", "Swing", "JDBC"],
    github: "https://github.com/Sadia-F/OnlineStore",
    liveDemo: "/videos/online-store-demo.mp4",
    date: "May 2026",
    highlights: [
      "Three-tier role-based access control",
      "Real-time inventory management",
      "Order processing with coupon system"
    ]
  },
  {
    title: "Restaurant Reservation System",
    description: "Reservation management system with 5 data structures",
    problem: "Restaurants struggled with booking conflicts, waitlist fairness, and slow customer lookup.",
    solution: "Built a Java application using 5 different data structures to solve scheduling challenges.",
    metrics: [
      "📊 5 data structures implemented",
      "⏱️ Fast customer phone lookup",
      "✅ Fair waitlist system"
    ],
    technologies: ["Java", "LinkedList", "TreeMap", "Queue", "HashSet", "BST"],
    github: "https://github.com/Sadia-F/Restaurant-Reservation-system",
    liveDemo: null,
    date: "December 2024",
    highlights: [
      "Implemented 5 data structures for scheduling logic",
      "Waitlist fairness system",
      "Fast customer phone lookup"
    ]
  }
];

// ============================================================
// SKILLS & TECH STACK — Merged with icons
// ============================================================
export const techStack = {
  languages: {
    icon: "💻",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "TypeScript", icon: "🟦" },
      { name: "SQL", icon: "🗄️" }
    ]
  },
  backend: {
    icon: "⚙️",
    skills: [
      { name: "REST APIs", icon: "🔗" },
      { name: "Flask", icon: "🌶️" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Data Pipelines", icon: "📊" }
    ]
  },
  databases: {
    icon: "🗄️",
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Supabase", icon: "🔥" }
    ]
  },
  tools: {
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Vercel", icon: "⚡" }
    ]
  },
  aiMl: {
    icon: "🤖",
    skills: [
      { name: "LLMs", icon: "🧠" },
      { name: "Prompt Engineering", icon: "✍️" },
      { name: "Google Gemini", icon: "🔮" },
      { name: "Computer Vision", icon: "👁️" }
    ]
  }
};

// ============================================================
// LEADERSHIP — Using XYZ format
// ============================================================
export const leadership = [
  {
    role: "Treasurer",
    organization: "Society of Women Engineers, NYIT",
    duration: "January 2026 - Present",
    achievements: [
      "Accomplished **5+ engineering career events**, as measured by **event attendance**, by managing a $500/event budget and coordinating procurement for 40+ members."
    ]
  },
  {
    role: "Vice President",
    organization: "Bengali Student Association, NYIT",
    duration: "September 2024 - Present",
    achievements: [
      "Accomplished **50+ active members**, as measured by **event attendance**, by reviving a dormant organization and executing 20+ events per semester."
    ]
  },
  {
    role: "Peer Health Educator",
    organization: "Counseling & Wellness Office, NYIT",
    duration: "June 2024 - Present",
    achievements: [
      "Accomplished **600+ students reached**, as measured by **workshop attendance**, by facilitating 20+ wellness workshops after completing 12-hour NASPA training."
    ]
  },
  {
    role: "Co-Founder & Manager",
    organization: "Badminton Team, NYIT",
    duration: "September 2024 - Present",
    achievements: [
      "Accomplished **consistent team engagement**, as measured by **weekly practice attendance**, by founding the club and managing operations, scheduling, and equipment procurement."
    ]
  }
];

// ============================================================
// AWARDS
// ============================================================
export const awards = [
  {
    title: "Presidential Honor List",
    organization: "New York Institute of Technology",
    year: "Spring 2026",
    icon: "🏆"
  },
  {
    title: "Zennabelle Sewell Heart Award",
    organization: "New York Institute of Technology",
    year: "2026",
    icon: "❤️"
  },
  {
    title: "Dean's Honor List",
    organization: "New York Institute of Technology",
    year: "Spring 2024 & Spring 2025",
    icon: "📚"
  },
  {
    title: "Office of Student Engagement Award",
    organization: "New York Institute of Technology",
    year: "2026",
    icon: "⭐"
  }
];

// ============================================================
// TIMELINE
// ============================================================
export const timelineEvents = [
  {
    year: "2021",
    title: "First Coding Workshop",
    description: "Volunteered as a student teacher, facilitating beginner-level programming lessons for elementary, middle, and high school students.",
    icon: "💻"
  },
  {
    year: "2023",
    title: "Started at NYIT",
    description: "Began Computer Science degree with a concentration in Artificial Intelligence.",
    icon: "🎓"
  },
  {
    year: "2024",
    title: "First Major Project",
    description: "Built Restaurant Reservation System using 5 different data structures in Java.",
    icon: "📊"
  },
  {
    year: "2025",
    title: "Dean's Honor List",
    description: "Recognized for academic excellence in Spring 2025.",
    icon: "📚"
  },
  {
    year: "2026",
    title: "First Internship",
    description: "Started as Backend/AI Engineer at NutriScan and Software Sales at IQVentory.",
    icon: "💼"
  },
  {
    year: "2026",
    title: "Presidential Honor List & Award",
    description: "Received Presidential Honor List and Zennabelle Sewell Heart Award.",
    icon: "🏆"
  },
  {
    year: "2027",
    title: "Graduation",
    description: "B.S. in Computer Science with AI concentration.",
    icon: "🚀"
  }
];

// ============================================================
// CHATBOT DATA — 29 Questions
// ============================================================
export const chatbotData = {
  welcomeMessage: "Hey there! 👋 I'm Sadia's AI assistant. I know everything about her — work, projects, skills, hobbies, and what she's like as a person. Ask me anything, and I'll point you to the right part of her portfolio to learn more!",
  suggestedQuestions: [
    "Who are you and what do you do?",
    "Where are you from?",
    "What internships have you done?",
    "Tell me about your internship at NutriScan",
    "What did you do at IQVentory?",
    "What was your role as a Tech Coach?",
    "What's the most rewarding project you've worked on?",
    "What projects have you built?",
    "Tell me about Campus Slate CMS",
    "Tell me about the Online Store project",
    "Tell me about the Restaurant Reservation System",
    "Where do you go to school?",
    "What are you studying?",
    "What programming languages do you know?",
    "What frameworks do you use?",
    "What databases have you worked with?",
    "What are your strongest skills?",
    "What leadership roles have you had?",
    "What organizations are you part of?",
    "What's your role in the Bengali Student Association?",
    "What are your career goals?",
    "Do you want to work in AI?",
    "How can I contact you?",
    "Do you have a resume?",
    "Are you looking for internships?",
    "What kind of roles are you looking for?",
    "What's your approach to debugging?",
    "What's your approach to testing?",
    "What advice would you give to other CS students?"
  ],
  answers: {
    // ABOUT YOU
    who: {
      keywords: ["who are you", "what do you do", "introduce yourself", "tell me about yourself"],
      answer: "I'm Sadia Ferdous, a Computer Science student at NYIT with an AI concentration. I build backend systems and AI-powered tools that make everyday life easier. I'm passionate about solving real problems through code, leadership, and creativity."
    },
    from: {
      keywords: ["where are you from", "born", "location", "hometown"],
      answer: "I was born in Bangladesh and raised on Long Island, New York. I love the mix of cultures and perspectives it's given me — it's shaped how I approach problems and work with people from all backgrounds."
    },

    // EXPERIENCE
    internships: {
      keywords: ["internships", "intern", "what internships", "internship experience", "worked as"],
      answer: "I've had some amazing experiences! 🚀 I'm currently a Backend/AI Engineer Intern at NutriScan working with Python, MongoDB, and Google Gemini Flash. I'm also a Software Sales Intern at IQVentory. I've worked as a Tech Coach at NYIT, mentoring 40 high school students. And I'm the Web Developer for The Campus Slate, where I built a Flask CMS. Scroll down to the Experience section to learn more about each role!"
    },
    nutriclean: {
      keywords: ["nutriscan", "nutri scan", "backend ai engineer"],
      answer: "At NutriScan, I'm a Backend/AI Engineer Intern working on an AI-powered food recognition platform. I develop REST APIs using Python and MongoDB, integrate Google Gemini Flash, and sync real-time health data through Apple HealthKit, Dexcom, and FreeStyle Libre APIs. It's been incredible to see how AI can impact health and wellness."
    },
    iqventory: {
      keywords: ["iqventory", "iq ventory", "software sales"],
      answer: "At IQVentory, I work as a Software Sales Intern where I qualified 16+ business prospects and manage the lead pipeline through targeted outreach using their proprietary CRM. It's been a great experience learning the business side of software and how to communicate technical value to clients."
    },
    techcoach: {
      keywords: ["tech coach", "coach", "mentor", "maker academy"],
      answer: "I was a Tech Coach at NYIT's Summer Maker Academy, where I mentored 40 high school students across two intensive one-week programs. I led 3 teams per week through full project lifecycles — from concept to final presentation. I taught Arduino, 3D printing, soldering, and circuit debugging. It was rewarding to see students go from idea to working prototype in just a week!"
    },
    rewarding: {
      keywords: ["rewarding", "most rewarding", "best project", "favorite work"],
      answer: "The most rewarding project I've worked on is Campus Slate CMS. I saw a real problem — my team was paying $200+ annually for a Wix website that limited our control and made publishing slow. I built a custom Flask web app with Supabase and Vercel, replacing Wix entirely. Now we save $200+ a year and publishing time went from days to minutes. Knowing I solved a real problem that made people's work easier is incredibly satisfying."
    },

    // PROJECTS
    projectList: {
      keywords: ["projects", "built", "made", "created", "developed", "portfolio projects"],
      answer: "I've built 4 main projects! 🚀 My favorite is Campus Slate CMS because I solved a real problem — saving my team $200+ annually and cutting publishing time from days to minutes. I've also built an Online Store Management System (Java, MySQL), a Restaurant Reservation System (Java, Data Structures), and mishti-website (Python). Check out the Projects section below to see all the details and GitHub links!"
    },
    campuseslate: {
      keywords: ["campus slate", "campus slate cms", "cms", "student publication"],
      answer: "Campus Slate CMS is my favorite project! 📰 The Campus Slate was paying $200+ annually for a Wix website that limited content control and made publishing slow. I built a custom Flask web app with Supabase and Vercel, replacing Wix entirely. I created a password-protected admin dashboard so staff can self-upload articles and PDFs. The result? $200+ annual savings and publishing time cut from days to minutes. I'm really proud of this one."
    },
    onlinestore: {
      keywords: ["online store", "store management", "inventory", "ecommerce"],
      answer: "Online Store Management System is a full-stack desktop application I built with Java, MySQL, Swing, and JDBC. It has three-tier role-based access control — Customer, Employee, and Admin — so different users have different permissions. It manages inventory, user accounts, orders, and coupons in real-time. I built it to help small businesses manage their operations without expensive SaaS solutions."
    },
    restaurant: {
      keywords: ["restaurant reservation", "reservation system", "booking", "waitlist"],
      answer: "Restaurant Reservation System is a Java application I built to solve real scheduling challenges. I implemented 5 different data structures: LinkedList, TreeMap, Queue, HashSet, and a custom BST. It handles waitlist fairness, prevents duplicate bookings, and enables fast customer phone lookup. It was a great exercise in applying data structures to real-world problems."
    },

    // EDUCATION
    school: {
      keywords: ["where do you go", "school", "university", "college", "nyit"],
      answer: "I'm a Computer Science student at New York Institute of Technology (NYIT) with a concentration in Artificial Intelligence. I'm graduating in May 2027. I've made the Dean's Honor List (Spring 2024 & 2025) and the Presidential Honor List (Spring 2026). I'm also very active on campus — Vice President of BSA, Treasurer of SWE, Peer Advisor, and more. Scroll to the Education section for all the details!"
    },
    studying: {
      keywords: ["what are you studying", "major", "degree", "concentration", "ai", "artificial intelligence"],
      answer: "I'm pursuing a Bachelor's in Computer Science with a concentration in Artificial Intelligence. My coursework includes Data Structures, Algorithms, Operating Systems, Theory of Computation, Computer Networks, Database Management, AI, and Software Engineering. I love how AI is transforming every industry, and I want to be part of building that future."
    },

    // SKILLS
    languages: {
      keywords: ["programming languages", "languages", "what languages", "code in"],
      answer: "I work with Python, Java, TypeScript, HTML, CSS, and SQL. My strongest languages are Python and Java — I've built production-grade applications with both. I'm also actively improving my TypeScript and JavaScript skills as I build more web applications."
    },
    frameworks: {
      keywords: ["frameworks", "libraries", "what frameworks", "tools"],
      answer: "I use Flask and FastAPI for backend development in Python. I've also worked with REST APIs extensively, building and integrating them for various projects. I'm currently learning more about modern frontend frameworks like React and Next.js."
    },
    databases: {
      keywords: ["databases", "db", "sql", "nosql", "what databases"],
      answer: "I've worked with MySQL, MongoDB, PostgreSQL, and Supabase. MySQL and PostgreSQL for relational data, MongoDB for document-based storage, and Supabase for real-time applications. Each has its strengths, and I enjoy learning when to use which."
    },
    strongest: {
      keywords: ["strongest skills", "best at", "what are you good at", "strengths"],
      answer: "My strongest skills are backend development, REST API design, AI integration, and system design. I'm great at taking complex problems and breaking them down into manageable pieces. I also have strong communication and leadership skills from my campus involvement, which helps me work effectively in teams."
    },

    // LEADERSHIP
    leadership: {
      keywords: ["leadership roles", "leader", "lead", "president", "vice president", "treasurer"],
      answer: "I love leadership! 🌟 I'm currently Treasurer of SWE, Vice President of BSA, and Co-Founder of the Badminton Team at NYIT. I'm also a Peer Advisor and Peer Health Educator. In high school, I was President of Key Club, Lieutenant Governor overseeing 12 schools, and Founder of the Culture Club. Check out the Leadership section to see all my roles!"
    },
    organizations: {
      keywords: ["organizations", "clubs", "groups", "involved", "campus", "activities"],
      answer: "I'm involved in several organizations at NYIT: Vice President of the Bengali Student Association, Treasurer of the Society of Women Engineers, Co-Founder and Manager of the Badminton Team, a Peer Advisor, and a Peer Health Educator. I'm also the Web Developer for Campus Slate, our student publication. In high school, I was involved in Key Club, Culture Club, National Honor Society, and more."
    },
    bsa: {
      keywords: ["bsa", "bengali student association", "bengali", "vice president"],
      answer: "As Vice President of the Bengali Student Association, I lead a 10-member executive board to plan and execute 20+ cultural, social, and academic events per semester. I revived the organization from dormancy and now we have 50+ members actively participating. I manage logistics, food planning, and activity curation to create a vibrant community on campus."
    },

    // CAREER GOALS
    goals: {
      keywords: ["career goals", "future", "aspire", "plan", "dream job"],
      answer: "My goal is to become a backend or AI engineer building systems that make a real difference in people's lives. I'm particularly interested in how AI can improve healthcare, education, and everyday workflows. I'm looking for Summer 2027 internships to gain more experience and grow as an engineer. Long-term, I want to lead teams that build meaningful, impactful technology."
    },
    aiCareer: {
      keywords: ["work in ai", "ai career", "artificial intelligence", "do you want to work in ai"],
      answer: "Yes! I'm deeply interested in AI and its potential to solve real-world problems. I'm pursuing a concentration in AI and have hands-on experience with LLMs, prompt engineering, and Google Gemini through my work at NutriScan. I believe AI will transform every industry, and I want to be part of building that future — ethically and responsibly."
    },

    // CONTACT
    contact: {
      keywords: ["contact", "email", "reach", "message", "connect", "linkedin"],
      answer: "I'd love to connect! 📬 You can reach me at sadiaferdous003@gmail.com or connect with me on LinkedIn at linkedin.com/in/sadiaaferdous. You can also check out my code on GitHub at github.com/Sadia-F. Scroll to the bottom of the page for my Contact section with all my links!"
    },
    resume: {
      keywords: ["resume", "cv", "download resume", "see resume"],
      answer: "Yes! You can download my resume by clicking the 'Resume' button in the hero section at the top of this page. It's a PDF with all my experience, projects, education, and skills. If you have any questions about it, feel free to ask!"
    },
    roles: {
      keywords: ["what roles", "what kind of roles", "job titles", "positions"],
      answer: "I'm looking for roles in backend engineering, AI engineering, and software engineering. I'm particularly interested in positions where I can work on AI-powered applications, build scalable systems, and solve real-world problems. I'm open to both startups and established companies. If you have a role in mind, let's chat!"
    },

    // TECHNICAL DEEP DIVE
    debugging: {
      keywords: ["debugging", "debug", "approach to debugging", "how do you debug"],
      answer: "I take a systematic approach to debugging: 1) Reproduce the bug consistently, 2) Read the error message carefully, 3) Use print statements or a debugger to trace the issue, 4) Isolate the problem area, 5) Fix and test thoroughly. I also believe in writing clean, readable code so bugs are easier to spot and prevent in the first place."
    },
    testing: {
      keywords: ["testing", "test", "approach to testing", "how do you test"],
      answer: "I believe testing is essential for building reliable software. I typically write unit tests for individual components, integration tests for how components work together, and end-to-end tests for user flows. I also practice test-driven development (TDD) when appropriate. Good testing gives you confidence to refactor and add new features without breaking existing functionality."
    },
    advice: {
      keywords: ["advice", "tips", "other cs students", "what advice", "recommend"],
      answer: "My advice to other CS students: 1) Build projects outside of class — that's where you really learn, 2) Get involved in campus organizations — leadership skills matter just as much as technical skills, 3) Don't be afraid to ask questions — everyone starts somewhere, 4) Find what you're passionate about and pursue it, 5) Network and connect with others — your network is your net worth. And most importantly, be kind to yourself — learning takes time!"
    }
  }
};