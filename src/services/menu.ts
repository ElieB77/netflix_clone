import { MenuType } from "@/types/menu";

export const menu: MenuType = {
  links: [
    {
      content: "Home",
      href: "/",
      id: "0",
    },
    {
      content: "My List",
      href: "/my-list",
      id: "4",
    },
  ],
  logo: {
    src: "/images/netflix-logo.png",
    width: 100,
    height: 30,
    alt: "Logo",
    href: "/",
  },
  icons: [
    {
      src: "/images/magnifying-glass.svg",
      width: 20,
      height: 20,
      alt: "Search Icon",
      id: "0",
    },
    {
      src: "/images/bell.svg",
      width: 20,
      height: 20,
      alt: "Notification Icon",
      id: "1",
    },
  ],
};
