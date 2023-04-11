import { menu } from "@/services/menu";
import { IconType, LinkType } from "@/types/menu";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link href={menu.logo.href}>
          <Image
            src={menu.logo.src}
            width={menu.logo.width}
            height={menu.logo.height}
            alt={menu.logo.alt}
          />
        </Link>
        <ul className={styles.navbar__links}>
          {menu.links.map((link: LinkType) => {
            const { content, href, id } = link;
            return (
              <Link className={styles.navbar__link} key={id} href={href}>
                <li>{content}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.navbar__icons}>
        {menu.icons.map((icon: IconType) => {
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
