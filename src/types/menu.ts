export interface LinkType {
  content: string;
  href: string;
  id: string;
}

export interface LogoType {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}

export interface IconType {
  src: string;
  width: number;
  height: number;
  alt: string;
  id: string;
}

export interface MenuType {
  links: LinkType[];
  logo: LogoType;
  icons: IconType[];
}
