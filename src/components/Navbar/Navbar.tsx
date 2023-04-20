import { menu } from "@/services/menu";
import { IconType, LinkType } from "@/types/menu";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Navbar = (): JSX.Element => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { logo, links, icons } = menu;

  const onScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        scrollPosition < 100 ? styles.navbar__on_scroll : ""
      }`}
    >
      <div className={styles.navbar__left}>
        <Link href={logo.href}>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        </Link>
        <ul className={styles.navbar__links}>
          {links.map((link: LinkType) => {
            const { content, href, id } = link;
            return (
              <Link
                className={`${styles.navbar__link} ${
                  router.pathname === href ? styles.active__link : ""
                }`}
                key={id}
                href={href}
              >
                <li>{content}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.navbar__icons}>
        {icons.map((icon: IconType) => {
          const { src, width, height, alt, id } = icon;
          return (
            <Image
              className={styles.navbar__icon}
              key={id}
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          );
        })}
      </div>
    </nav>
  );
};
