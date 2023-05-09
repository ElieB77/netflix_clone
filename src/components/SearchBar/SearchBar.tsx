import styles from "./styles.module.css";
import Image from "next/image";
import { ChangeEvent, RefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const SearchBar = (): JSX.Element => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const target = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const clearSearchValue = () => {
    return setSearchQuery("");
  };

  const handleClickOutside = (
    e: MouseEvent,
    target: RefObject<HTMLDivElement>
  ) => {
    if (target.current && !target.current.contains(e.target as Node)) {
      setIsSearchActive(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => handleClickOutside(e, target);

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [target]);

  useEffect(() => {
    if (searchQuery) {
      router.replace({
        pathname: "/",
        query: {
          query: searchQuery.toLowerCase(),
        },
      });
    } else {
      router.replace("/", undefined, { shallow: true });
    }
  }, [searchQuery]);

  return (
    <div className={styles.search__bar} ref={target}>
      <div
        className={`${styles.search__bar_input} ${
          isSearchActive ? styles.active : ""
        }`}
      >
        <Image
          className={styles.search__bar_icon}
          src={"/images/magnifying-glass.svg"}
          width={20}
          height={20}
          alt={"Search icon"}
        />
        <input
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          type="text"
          placeholder="Search for a movie, tv show..."
          autoFocus={true}
        />
        <Image
          className={styles.search__bar_icon}
          src={"/images/close-icon.svg"}
          width={20}
          height={20}
          alt={"Delete icon"}
          onClick={clearSearchValue}
        />
      </div>
      <Image
        onClick={() => setIsSearchActive(true)}
        className={`${styles.search__bar_icon} ${
          isSearchActive ? styles.hide : ""
        }`}
        src={"/images/magnifying-glass.svg"}
        width={20}
        height={20}
        alt={"Search icon"}
      />
    </div>
  );
};
