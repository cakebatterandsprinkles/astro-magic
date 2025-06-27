import type { NavItem } from "./mainNavData";

const galleryNavData: NavItem[] = [
  {
    to: "/gallery",
    title: "Digital",
    navClass: "nav-link",
    id: "about-icon",
    ariaLabel: "Link to the gallery of digital arts page",
  },
  {
    to: "/gallery/clay",
    title: "Clay",
    navClass: "nav-link",
    id: "journal-icon",
    ariaLabel: "Link to the gallery of clay arts page",
  },
  {
    to: "/gallery/ink",
    title: "Ink",
    navClass: "nav-link",
    id: "gallery-icon",
    ariaLabel: "Link to the gallery of ink arts page",
  },
  {
    to: "/gallery/linocut",
    title: "Linocut",
    navClass: "nav-link",
    id: "tidbit-icon",
    ariaLabel: "Link to the gallery of linocut arts page",
  },
  {
    to: "/gallery/intaglio",
    title: "Intaglio",
    navClass: "nav-link",
    id: "portfolio-icon",
    ariaLabel: "Link to the gallery of intaglio arts page",
  },
] as const;
export default galleryNavData;
