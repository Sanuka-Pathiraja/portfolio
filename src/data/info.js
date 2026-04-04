export const PROFILE = {
  name: 'Sanuka Pathiraja',
  role: 'Software Engineer & Project-Focused CS Undergraduate',
  summary:
    'Second-year Computer Science student at the University of Westminster with hands-on full-stack development experience and project coordination exposure. I enjoy shipping reliable features, aligning team execution, and communicating technical progress clearly in real-world internships.',
  email: 'sanukapathiraja@gmail.com',
  phone: '+94 77 178 1721',
  location: 'Western Province, Ja Ela, Sri Lanka',
  github: 'https://github.com/Sanuka-Pathiraja',
  linkedin: 'https://www.linkedin.com/in/sanuka-pathiraja-4539b3330/',
}

export const AVAILABILITY = {
  badge: 'Open to Internship Opportunities',
  internshipWindow: 'May 2026 - Dec 2026',
  roleTypes: ['Software Engineering Intern', 'Full-Stack Intern', 'Backend Intern'],
  timezone: 'GMT+5:30 (Colombo)',
  workPreference: 'Remote / Hybrid / On-site',
}

export const CURRENT_FOCUS = [
  'Shipping USafe Guardian v2 with safer route prediction',
  'Improving backend API latency and cache hit rates',
  'Preparing internship-ready case studies with measurable outcomes',
]

export const TESTIMONIALS = [
  {
    name: 'Shehan Kumar',
    role: 'Chief Growth Officer, Parenthrive',
    quote:
      'Sanuka communicates clearly, takes ownership, and consistently delivers practical engineering output on time.',
  },
  {
    name: 'Baladharshana Sathianathan',
    role: 'Senior Lecturer, London Graduate School',
    quote:
      'He balances technical depth with structured execution, which makes him highly effective in team projects.',
  },
]

export const SKILLS = [
  'React',
  'Python',
  'PostgreSQL',
  'Node.js',
  'Flutter',
  'SQL',
  'Git',
  'REST APIs',
  'Agile Collaboration',
  'Roadmapping',
  'Java',
  'Tailwind CSS',
]

export const PROJECTS = [
  {
    id: 'usafe',
    title: 'USafe',
    role: 'Project Lead, Full Stack Developer / Project Proponent',
    desc: "An Edge AI-powered mobile safety application. Directed a student dev team with clear sprint goals, task delegation, and delivery checkpoints while building a zero-trust ecosystem using on-device ML (YAMNet). Engineered the 'SafePath Guardian' frontend and coordinated TensorFlow Lite inference with Twilio/Vonage webhook workflows.",
    stack: ['Flutter', 'Node.js', 'Express', 'TensorFlow Lite', 'PostgreSQL', 'Twilio/Vonage'],
    type: 'AI Safety Ecosystem',
    timeline: 'Aug 2025 - Present',
    teamSize: '6 contributors',
    metrics: [
      { label: 'Inference', value: '<220ms on-device alerts' },
      { label: 'Availability', value: '99.2% uptime on core API' },
      { label: 'Delivery', value: '8-month milestone plan' },
    ],
    outcomes: [
      'Reduced emergency dispatch flow from 7 taps to 3 taps',
      'Aligned weekly sprint execution with a cross-functional student team',
    ],
    live: 'https://usafe.lk/',
    caseStudy: {
      problem: 'Urban users needed a faster safety workflow with reliable emergency communication and low-latency risk awareness.',
      constraints: [
        'Mobile-first UX with unstable mobile network conditions',
        'Need for on-device inference to keep response times low',
        'Limited student-team development bandwidth and timeline',
      ],
      architecture:
        'Flutter frontend with modular state management, Node/Express API services, PostgreSQL persistence, and on-device YAMNet/TFLite audio inference. External escalation channels integrated through webhook providers.',
      tradeoffs: [
        'Chose on-device ML for speed and privacy over richer cloud models',
        'Prioritized emergency flow reliability over advanced visual customizations',
      ],
      results: [
        'Improved actionability for emergency workflows through reduced interaction steps',
        'Maintained stable API behavior during student testing windows',
      ],
      next: 'Add risk scoring explainability and route confidence bands for safer navigation recommendations.',
    },
  },
  {
    id: 'tabby',
    title: 'Think Board',
    role: 'Full-Stack Developer',
    desc: 'Think Board is a personal productivity and note-taking MERN app for capturing ideas quickly, organizing notes into simple collections, and keeping tasks, drafts, and reminders in one place. It is designed to stay lightweight and easy to use, so ideas can be saved before they get lost. The goal is to give users a simple workspace for planning, writing, and revisiting important notes later.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'MERN App',
    timeline: 'Nov 2025 - Present',
    teamSize: '4 contributors',
    metrics: [
      { label: 'Capture', value: 'Fast note creation flow' },
      { label: 'Organization', value: 'Collections for ideas and tasks' },
      { label: 'Focus', value: 'Simple workspace for daily planning' },
    ],
    outcomes: [
      'Helped turn scattered ideas into organized note collections',
      'Kept drafts, reminders, and tasks easy to revisit later',
    ],
    github: 'https://github.com/Sanuka-Pathiraja/Think-Board.git',
    caseStudy: {
      problem: 'Users needed a lightweight place to capture ideas before they were lost across tabs, chats, and notebooks.',
      constraints: [
        'Fast capture with minimal clicks',
        'Simple organization that stays easy to scan',
        'Clean UX for everyday productivity use',
      ],
      architecture:
        'React frontend with an Express API, MongoDB note storage, and CRUD workflows designed around quick capture, editing, and review.',
      tradeoffs: [
        'Prioritized simplicity and speed over advanced formatting features',
        'Kept the data model lightweight so the app stays easy to extend',
      ],
      results: [
        'Delivered a straightforward flow for creating and organizing notes',
        'Made it easier to keep personal ideas, tasks, and reminders in one place',
      ],
      next: 'Add tags, search, and reminder support for faster retrieval.',
    },
  },
  {
    id: 'air-traffic',
    title: 'Air Traffic Analysis',
    role: 'Data Analysis / Back End Developer',
    desc: 'A powerful data visualization project that processes and analyzes real-world datasets of cross-European airports, featuring an interactive desktop GUI built with Tkinter.',
    stack: ['Data Science', 'Tkinter', 'Visualization', 'Python'],
    type: 'Data Engineering',
    timeline: 'May 2025 - Aug 2025',
    teamSize: '3 contributors',
    metrics: [
      { label: 'Data', value: '1000+ airport route records' },
      { label: 'UX', value: 'Interactive trend exploration dashboard' },
      { label: 'Modularity', value: 'Plug-in chart architecture' },
    ],
    outcomes: [
      'Improved visibility into airport traffic patterns via interactive filtering',
      'Built reusable data transforms for additional scenario analysis',
    ],
    github: 'https://github.com/Sanuka-Pathiraja/airport-traffic-analysis',
    caseStudy: {
      problem: 'Raw aviation datasets were hard to interpret quickly for route and trend insights.',
      constraints: [
        'Dataset cleaning and normalization complexity',
        'Desktop-first delivery requirement with minimal dependencies',
        'Need for easy extension of visual modules',
      ],
      architecture:
        'Python data pipeline with modular transformation utilities and a Tkinter desktop interface for filtering and chart rendering.',
      tradeoffs: [
        'Chose desktop GUI for simpler distribution in course context over web deployment',
        'Prioritized clarity of interaction over high-end chart animation complexity',
      ],
      results: [
        'Enabled faster trend inspection across large route subsets',
        'Established modular structure for future feature expansion',
      ],
      next: 'Add geospatial map layers and scenario comparison presets.',
    },
  },
  {
    id: 'optiflow',
    title: 'Optiflow',
    role: 'Front End Developer',
    desc: 'A collaborative software initiative focused on workflow optimization. Contributed frontend features while supporting planning discussions, requirement breakdowns, and disciplined version control practices.',
    stack: ['Collaboration', 'Optimization', 'Python'],
    type: 'Optimization Tool',
    timeline: '2025',
    teamSize: '5 contributors',
    metrics: [
      { label: 'Planning', value: 'Milestone-based delivery cadence' },
      { label: 'Collaboration', value: 'Cross-role feature alignment' },
      { label: 'Quality', value: 'Version-controlled workflow' },
    ],
    outcomes: [
      'Helped align frontend outputs with optimization workflows',
      'Improved handoff clarity through requirement-focused iterations',
    ],
    github: 'https://github.com/Kithsara360/OptiFlow',
    caseStudy: {
      problem: 'Project teams needed a clearer system to organize and improve recurring workflow bottlenecks.',
      constraints: [
        'Multiple contributors with varying implementation styles',
        'Need for quick iterations based on stakeholder feedback',
        'Limited timeline for integrated testing',
      ],
      architecture:
        'Frontend feature layer integrated with optimization-oriented backend flows, delivered through milestone-driven branch management.',
      tradeoffs: [
        'Prioritized delivery consistency over broad feature experimentation',
        'Focused on maintainable core flows before advanced automations',
      ],
      results: [
        'Improved flow clarity for recurring task operations',
        'Strengthened team delivery rhythm with requirement-first planning',
      ],
      next: 'Introduce workflow analytics and bottleneck scoring in dashboards.',
    },
  },
  {
    id: 'traffic-light',
    title: 'Adaptive Traffic Light',
    role: 'Back End Developer / Project Proponent',
    desc: 'An intelligent traffic management system where waiting durations adjust in real-time based on vehicle density.',
    stack: ['Algorithms', 'Automation', 'Dynamic Logic', 'Python'],
    type: 'Smart Infrastructure',
    timeline: '2025',
    teamSize: '4 contributors',
    metrics: [
      { label: 'Logic', value: 'Dynamic signal duration model' },
      { label: 'Latency', value: 'Real-time cycle recalculation' },
      { label: 'Scenarios', value: 'Multi-lane test simulations' },
    ],
    outcomes: [
      'Balanced wait times across changing traffic volumes',
      'Improved model responsiveness in simulation runs',
    ],
    github: 'https://github.com/YasithMP/AdaptiveTrafficLightSystem',
    caseStudy: {
      problem: 'Static light cycles were inefficient under variable traffic density and caused avoidable delays.',
      constraints: [
        'Need to react quickly to incoming vehicle count changes',
        'Keep control logic understandable for maintenance and extension',
        'Simulation-first validation before real-world deployment',
      ],
      architecture:
        'Python-based control algorithm using dynamic queue heuristics and cycle recalculation against simulated lane input.',
      tradeoffs: [
        'Used deterministic heuristics for predictability over black-box ML control',
        'Focused on fairness and responsiveness before advanced predictive modeling',
      ],
      results: [
        'Reduced simulated congestion peaks across uneven lane loads',
        'Delivered an extendable control baseline for future smart-city experimentation',
      ],
      next: 'Blend live sensor data and predictive flow estimates for pre-emptive cycle tuning.',
    },
  },
  {
    id: 'dragon-repeller',
    title: 'Dragon Repeller',
    role: 'Front End Developer',
    desc: 'A stylized web-based interactive game designed as a foundational exercise. Engineered entirely using vanilla web technologies to map complex game state logic.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web Game Interface',
    timeline: '2024',
    teamSize: 'Solo',
    metrics: [
      { label: 'Architecture', value: 'State-driven game flow' },
      { label: 'UI', value: 'Vanilla JS interaction model' },
      { label: 'Learning', value: 'Core frontend fundamentals' },
    ],
    outcomes: [
      'Strengthened event-driven state transition design skills',
      'Built reusable UI logic patterns without framework dependencies',
    ],
    github: 'https://github.com/Sanuka-Pathiraja/Dragon-repller.git',
    caseStudy: {
      problem: 'Needed a practical way to practice interactive UI logic and state management fundamentals.',
      constraints: [
        'No framework abstractions',
        'Must keep logic easy to reason about and extend',
        'Small scope with clear learning outcomes',
      ],
      architecture:
        'Modular vanilla JavaScript state machine with DOM-rendered view transitions and command-style action handlers.',
      tradeoffs: [
        'Chose explicit state transitions over shortcuts to maximize maintainability',
        'Kept art/style lightweight to focus on interaction reliability',
      ],
      results: [
        'Demonstrated robust game-state transitions and branching behavior',
        'Built a strong baseline for future framework-based frontend work',
      ],
      next: 'Refactor into componentized architecture with persistence and accessibility upgrades.',
    },
  },
]

export const ABOUT_CONTENT = {
  journey: {
    title: 'Personal Journey',
    content:
      'As a Computer Science undergraduate, I am motivated by both strong software craftsmanship and structured project execution. I enjoy bridging elegant front-end design with robust back-end logic while keeping delivery timelines, team coordination, and user outcomes in focus.',
  },
  softSkills: [
    { name: 'Toastmasters', desc: 'Developing public speaking and professional communication.' },
    {
      name: 'Communication',
      desc: 'Translating technical decisions into clear updates for teammates and non-technical stakeholders.',
    },
    { name: 'Leadership', desc: 'Guiding small cross-functional teams through focused, milestone-driven collaboration.' },
  ],
  community: [
    {
      name: 'IEEE',
      desc: 'Active member of the IEEE student branch. Regularly participate in hackathons and workshops organized by the society.',
    },
    { name: 'GitHub Dev Days', desc: 'Active participant in global developer communities.' },
  ],
  interests: ['Football', 'F1', 'Space/History', 'Documentaries'],
}

export const EDUCATION = [
  {
    degree: 'BSc Computer Science',
    institution: 'University of Westminster',
    date: 'Expected 2028 (2nd Year)',
  },
]

export const REFERENCES = [
  {
    name: 'Shehan Kumar',
    role: 'Chief Growth Officer, Parenthrive / Visiting Lecturer, IIT',
    email: 'shehanrk@gmail.com',
    phone: '+94 72 724 9324',
  },
  {
    name: 'Baladharshana Sathianathan',
    role: 'Senior Lecturer, London Graduate School / University Lecturer, IIT',
    email: 'bala.s@iit.ac.lk',
    phone: '+94 77 013 7368',
  },
]
