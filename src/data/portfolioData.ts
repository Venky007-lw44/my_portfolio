import { SkillCategory, ProjectItem, RoadmapMilestone, SocialLinks } from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/Venky007-lw44',
  linkedin: 'https://www.linkedin.com/in/venkat-reddy-vaddi-706b49431?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  email: 'venkatvaddi1329@gmail.com',
};

export const PROFILE_INFO = {
  name: 'Venkat Reddy',
  initials: 'VR',
  tagline: 'Aspiring AI Engineer | Deep Tech Enthusiast & Absolute Learner',
  degree: 'B.Tech in Computer Science & Engineering',
  university: 'Joy University',
  year: '1st Year',
  coreFocus: 'Deep Tech, Foundation Models, and Software Development',
  shortBio:
    'First-year CSE undergraduate on an uncompromising quest to master computer science fundamentals, deep tech paradigms, and generative AI architectures to engineer next-generation intelligent systems.',
  aboutBio: [
    'I am a first-year Computer Science and Engineering student at Joy University with a deep obsession for how intelligent systems tick from the ground up.',
    'Operating under the mindset of an "Absolute Learner", I refuse to treat AI as a black box. Instead, I continually bridge the gap between clean low-level software engineering fundamentals (logic building, data structures, and CLI tools) and modern high-level foundation models.',
    'My overarching goal is to architect resilient, impactful intelligent applications that solve high-stakes problems with mathematical rigor and clean design.',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    iconName: 'Code2',
    accentColor: 'emerald',
    skills: [
      {
        name: 'Python',
        level: 'Primary Language',
        description: 'Core fundamentals, modular architecture, algorithmic logic building, and robust CLI tooling.',
      },
      {
        name: 'Logic & Problem Solving',
        level: 'Core Strength',
        description: 'Translating complex real-world conditions into deterministic, edge-case-safe logic trees.',
      },
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    iconName: 'Globe',
    accentColor: 'indigo',
    skills: [
      {
        name: 'HTML5 & Semantic Web',
        level: 'Proficient',
        description: 'Accessible DOM structuring, meta tagging, and clean semantic page layouts.',
      },
      {
        name: 'CSS3 & Modern Styling',
        level: 'Proficient',
        description: 'Responsive styling, Flexbox, Grid, utility frameworks (Tailwind CSS), and dark-mode designs.',
      },
      {
        name: 'JavaScript Basics',
        level: 'Fundamentals',
        description: 'DOM interaction, asynchronous event handling, and clean modular scripting.',
      },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    iconName: 'Cpu',
    accentColor: 'violet',
    skills: [
      {
        name: 'Generative AI Fundamentals',
        level: 'Active Study',
        description: 'Understanding LLM architectures, transformer tokenization, and temperature tuning.',
      },
      {
        name: 'Prompt Engineering',
        level: 'Practitioner',
        description: 'Zero-shot, few-shot, and chain-of-thought prompt optimization for structured outputs.',
      },
      {
        name: 'LLM Exploration & APIs',
        level: 'Exploration',
        description: 'Interfacing with foundation model APIs, context window management, and RAG concepts.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    iconName: 'Terminal',
    accentColor: 'cyan',
    skills: [
      {
        name: 'Git & Version Control',
        level: 'Daily Use',
        description: 'Branching workflows, semantic commits, merging, and collaborative code maintenance.',
      },
      {
        name: 'GitHub',
        level: 'Active Hub',
        description: 'Repository management, open-source tracking, and documentation.',
      },
      {
        name: 'VS Code & CLI Tools',
        level: 'Environment',
        description: 'Productivity extensions, debuggers, integrated terminal workflows, and bash navigation.',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'voting-validator',
    title: 'Voting Eligibility Calculator & Validator',
    techStack: ['Python', 'CLI', 'Logic Building', 'Edge-Case Handling'],
    status: 'Completed',
    description:
      'A Python-based logic verification tool designed to validate age criteria, evaluate voter registration inputs, and handle edge-case validations cleanly via standard input/output.',
    highlights: [
      'Strict age calculation and threshold boundary check (18+ statutory requirements)',
      'Defensive input sanitization protecting against negative values and non-numeric inputs',
      'Citizenship and residency status conditional decision matrix',
      'Informative CLI feedback messages with actionable guidance for unregistered citizens',
    ],
    githubUrl: 'https://github.com/Venky007-lw44',
    liveDemoAvailable: true,
  },
  {
    id: 'genai-prompt-playground',
    title: 'GenAI Prompt Playground',
    techStack: ['Python', 'LLM APIs', 'Prompt Benchmarking'],
    status: 'In Progress',
    description:
      'An experimental test environment for systematic prompt engineering, comparing zero-shot vs few-shot chain-of-thought outputs across foundation models.',
    highlights: [
      'Structured response formatting tests (JSON schema enforcement)',
      'Context compression and system instruction tuning',
      'Evaluating reasoning tokens on math and logic puzzle benchmarks',
    ],
    githubUrl: 'https://github.com/Venky007-lw44',
    liveDemoAvailable: false,
  },
  {
    id: 'knowledge-assistant',
    title: 'Personal Knowledge Assistant',
    techStack: ['Python', 'Vector Search', 'RAG Concepts'],
    status: 'In Progress',
    description:
      'A personal study companion concept designed to ingest academic course notes, generate conceptual flashcards, and run semantic queries over CSE curriculum materials.',
    highlights: [
      'Chunking and indexing course syllabi and lecture slides',
      'Synthesized summaries of algorithmic time complexity',
      'Interactive quiz generation from syllabus topics',
    ],
    githubUrl: 'https://github.com/Venky007-lw44',
    liveDemoAvailable: false,
  },
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'milestone-1',
    phase: 'Phase 01',
    title: 'Data Structures & Algorithms in Python',
    status: 'Active Focus',
    description:
      'Building an unshakeable mathematical and algorithmic foundation. Mastering memory management, asymptotic complexity analysis (Big-O), and foundational data structures.',
    topics: [
      'Arrays, Hash Maps, Linked Lists & Stacks',
      'Trees, Binary Search Trees & Graph Traversals',
      'Dynamic Programming & Greedy Strategies',
      'Clean idiomatic Python implementations on LeetCode',
    ],
    progressPercent: 75,
  },
  {
    id: 'milestone-2',
    phase: 'Phase 02',
    title: 'Neural Networks & GenAI API Integrations',
    status: 'In Progress',
    description:
      'Demystifying how deep learning models learn. Diving deeper into artificial neurons, loss backpropagation, transformer attention mechanisms, and building production-grade API integrations.',
    topics: [
      'Matrix calculus and linear algebra for neural networks',
      'Multi-layer perceptrons from scratch in Python/NumPy',
      'Self-attention mechanisms & Transformer architecture',
      'Building agentic workflows with Gemini API & LangChain/LlamaIndex',
    ],
    progressPercent: 45,
  },
  {
    id: 'milestone-3',
    phase: 'Phase 03',
    title: 'Modern Frontend Frameworks & AI Interfaces',
    status: 'Upcoming',
    description:
      'Bridging back-end machine learning models with responsive, elegant web experiences so real users can interact seamlessly with intelligent systems.',
    topics: [
      'Advanced React 19, TypeScript, and state synchronization',
      'Streaming responses, token generation animations, and latency UX',
      'Full-stack interfaces with FastAPI/Express backend orchestration',
      'High-performance data visualization for model metrics',
    ],
    progressPercent: 30,
  },
];
