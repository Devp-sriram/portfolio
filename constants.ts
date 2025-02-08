// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | sriram",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  
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
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
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
    name: "Employee management site",
    image: "/projects/employee.png",
    blurImage: "/projects/blur/employee.png",
    description: "A site to manage employee deatails",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://employee-mgmt-app.vercel.app/",
    tech: ["typescript", "react.js","next.js","tailwind"],
  },
  {
    name: "imdb-hub",
    image: "/projects/imdb.png",
    blurImage: "/projects/blur/imdb.png",
    description: "A clone of IMDB site",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://imdb-hub.netlify.app/",
    tech: ["react","tailwind",],
  },
  {
    name: "AI Image generator",
    image: "/projects/atg.png",
    blurImage: "/projects/blur/atg.png",
    description: "a side that can generate ai image using prompts",
    gradient: ["#245B57", "#004741"],
    url: "https://ai-gen-images.netlify.app/",
    tech: ["figma", "tailwind"],
  },
  {
    name: "hobby cue",
    image: "/projects/atg.png",
    blurImage: "/projects/blur/atg.png",
    description: "a website that monitize the hobby of people",
    gradient: ["#003052", "#167187"],
    url: "https://responsive-next-mocha.vercel.app/",
    tech: ["tailwind","gsap", "figma"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next.js",
    "gsap",
    "tailwind",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma"],
  other: ["git", "docker", "postman", "SQL"],
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
    title: "Jun 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Accenture Nordics Virtual Internship",
    size: ItemSize.SMALL,
    subtitle:
      "a virtual internship from forage.com , it gave me a understanding about how the software development cycle works and the key responsibilities of a software engineer",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Oct 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Microsoft Learn student ambasitor",
    size: ItemSize.SMALL,
    subtitle:
      "Thought out this program I meet Industrial Experts and they shared their experience with me",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: " Dec 2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Postman API Fundamentals Student Expert",
    size: ItemSize.SMALL,
    subtitle:
      "Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Feb 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "APAC hackathon",
    size: ItemSize.SMALL,
    subtitle:
      "A hackthon to showcase my figma skills ",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "May 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "completed my bachelor's degree",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Jun 2024",
    size: ItemSize.SMALL,
    subtitle:
      "First internship! 🥳 at ingage technologies a company that focuses on AR and VR technology",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Nov 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "frontend-developer itern",
    size: ItemSize.SMALL,
    subtitle:
    "got a oportunity to work with codeXintern a edu-tech compamy , Where i learned a lot about SLDC",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }
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
