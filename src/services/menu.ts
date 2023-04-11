import { MenuType } from "@/types/menu";

export const menu: MenuType = {
  links: [
    {
      content: "Home",
      href: "/home",
      id: "0",
    },
    {
      content: "Shows",
      href: "/shows",
      id: "1",
    },
    {
      content: "Movies",
      href: "/movies",
      id: "2",
    },
    {
      content: "Latest",
      href: "/latest",
      id: "3",
    },
    {
      content: "My List",
      href: "/mylist",
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