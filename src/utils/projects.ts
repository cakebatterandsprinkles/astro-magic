import breakoutImage from "../../public/portfolio/breakout.png";
import smartMonke from "../../public/portfolio/luke-stackpoole-unsplash.jpg";
import innerMonke from "../../public/portfolio/innermonkelogo.png";
import type { ImageMetadata } from "astro";

export type ProjectInfo = {
  name: string;
  demoLink: string;
  demoText?: string;
  summary: string;
  gitLink?: string;
  gitText?: string;
  technologies: string[];
  imageSrc: ImageMetadata;
  altText: string;
};

export const projectList: ProjectInfo[] = [
  {
    name: "breakout",
    demoLink: "https://cakebatterandsprinkles.github.io/breakout/",
    demoText: "breakout ★",
    summary: "Atari Breakout game remade with HTML5 Canvas API.",
    gitLink: "https://github.com/cakebatterandsprinkles/breakout",
    gitText: "cakebatterandsprinkles/breakout",
    technologies: ["HTML5 Canvas API"],
    imageSrc: breakoutImage,
    altText: "Screenshot of Breakout game",
  },
  {
    name: "SmartMonke",
    demoLink: "https://smart.innermonke.com",
    summary:
      "A simple calculator to compare buying vs. leasing a car or renting vs. buying a home.",
    gitLink: "https://github.com/cakebatterandsprinkles/smart-monke",
    gitText: "cakebatterandsprinkles/smart-monke",
    technologies: ["React", "TypeScript"],
    imageSrc: smartMonke,
    altText: "image of an open road for the SmartMonke project",
  },
  {
    name: "InnerMonke",
    demoLink: "https://innermonke.com/",
    summary:
      "The website of a company that does web development and software consulting.",
    technologies: ["Vite.js", "Tailwind CSS"],
    imageSrc: innerMonke,
    altText:
      "logo of innerMonke LLC, a web development and software consulting company",
  },
];
