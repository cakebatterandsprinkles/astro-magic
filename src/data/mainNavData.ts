export type NavItem = {
  to: string;
  title: string;
  navClass: string;
  icon?: string;
  iconClass?: string;
  id: string;
  ariaLabel: string;
};

const mainNavData: NavItem[] = [
  {
    to: "/about",
    title: "About me",
    navClass: "nav-link",
    icon: "wi:moon-alt-new",
    iconClass: "icon",
    id: "about-icon",
    ariaLabel: "Link to the about me page",
  },
  {
    to: "/",
    title: "Journal",
    navClass: "nav-link",
    icon: "wi:moon-alt-new",
    iconClass: "icon",
    id: "journal-icon",
    ariaLabel: "Link to the list of journal entries",
  },
  {
    to: "/gallery",
    title: "Gallery",
    navClass: "nav-link",
    icon: "wi:moon-alt-new",
    iconClass: "icon",
    id: "gallery-icon",
    ariaLabel: "Link to gallery",
  },
  {
    to: "/tidbits",
    title: "Tidbits",
    navClass: "nav-link",
    icon: "wi:moon-alt-new",
    iconClass: "icon",
    id: "tidbit-icon",
    ariaLabel: "Link to tidbits",
  },
  {
    to: "/playground",
    title: "Playground",
    navClass: "nav-link",
    icon: "wi:moon-alt-new",
    iconClass: "icon",
    id: "portfolio-icon",
    ariaLabel: "Link to projects",
  },
] as const;
export default mainNavData;
