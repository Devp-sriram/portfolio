// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Sriram | Software Engineer",
  description:
    "Software engineer building full-stack applications and reliable AI-assisted developer tools.",
};

// Keep portfolio copy in one place so it can be refreshed without touching UI code.
export const PROFILE = {
  name: "Sriram",
  role: "Software Engineer",
  heroGreeting: "Hello 👋🏻",
  about: [
    "I am a software engineer who builds scalable full-stack applications and developer tools. ",
    "I enjoy solving product problems with reliable backend systems, thoughtful frontend experiences, and practical AI automation.",
  ],
  projectsIntro:
    "I build scalable full-stack products, from sales-engagement workflows to high-performance APIs.",
  skillsIntro:
    "My toolkit spans modern frontend development, backend systems, cloud-ready tooling, and AI-assisted engineering.",
  quote: "I care deeply about building reliable systems with attention to detail.",
  collaboration: {
    prompt: "Interested in Collaboration",
    left: "  turning ideas into products  ",
    right: "  full stack development  ",
  },
  footer: "Connect with me on social media.",
  credit: "Designed and developed with ❤️ by Sriram",
  resumeUrl: "/Sriram_resume.pdf",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build scalable full-stack applications",
  "I develop reliable backend systems",
  "I build AI-assisted developer tools",
  "I turn product ideas into software",
];

export const EMAIL = "sriramraman@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/devp-sriram/",
  github: "https://github.com/Devp-sriram/",
  instagram: "https://www.instagram.com/devp_sriram/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Sales Engagement Platform",
    image: "/projects/klenty.png",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description:
      "Scalable sales engagement platform with CRM integrations and AI-powered workflow automation.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.klenty.com/feature/multi-channel-outreach/",
    tech: ["react", "javascript"],
  },
  {
    name: "Siddhivinayak Sports",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description:
      "High-performance sports platform with optimized APIs, MongoDB aggregation, and Amazon S3 image storage.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/Devp-sriram/",
    tech: ["next", "javascript"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "gsap",
    "tailwind",
    "html",
    "css",
  ],
  userInterface: ["figma"],
  other: ["git", "docker", "postman", "sql"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "May 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Computer Science",
    size: ItemSize.SMALL,
    subtitle:
      "Graduated from Periyar Arts College, Annamalai University (CGPA: 7.2).",
    slideImage:
      "https://plus.unsplash.com/premium_photo-1713229182244-d617b76349d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Jan 2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer Intern · Klenty",
    size: ItemSize.SMALL,
    subtitle:
      "Built a sales engagement platform, microservices with RabbitMQ, CRM integrations, and AI automation.",
    slideImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Jun 2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Engineer · Bizdom",
    size: ItemSize.SMALL,
    slideImage:
      "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle:
      "Building secure internal coding agents and autonomous spec-to-code pipelines for enterprise software delivery.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
