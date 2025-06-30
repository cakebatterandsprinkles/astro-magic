import type { NavItem } from "./mainNavData";

const galleryNavData: NavItem[] = [
  {
    to: "/gallery/digital",
    title: "Digital",
    navClass: "nav-link",
    id: "digital-icon",
    icon: "meteor-icons:angles-right",
    iconClass: "icon",
    ariaLabel: "Link to the gallery of digital arts page",
  },
  {
    to: "/gallery/clay",
    title: "Clay",
    navClass: "nav-link",
    id: "clay-icon",
    icon: "meteor-icons:angles-right",
    iconClass: "icon",
    ariaLabel: "Link to the gallery of clay arts page",
  },
  {
    to: "/gallery/ink",
    title: "Ink",
    navClass: "nav-link",
    id: "ink-icon",
    icon: "meteor-icons:angles-right",
    iconClass: "icon",
    ariaLabel: "Link to the gallery of ink arts page",
  },
  {
    to: "/gallery/linocut",
    title: "Linocut",
    navClass: "nav-link",
    id: "linocut-icon",
    icon: "meteor-icons:angles-right",
    iconClass: "icon",
    ariaLabel: "Link to the gallery of linocut arts page",
  },
  {
    to: "/gallery/intaglio",
    title: "Intaglio",
    navClass: "nav-link",
    id: "intaglio-icon",
    icon: "meteor-icons:angles-right",
    iconClass: "icon",
    ariaLabel: "Link to the gallery of intaglio arts page",
  },
] as const;
export default galleryNavData;
