import styles from "./styles.module.css";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const SearchBar = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const target = useRef<any>();
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (target?.current && !target.current.contains(e.target)) {
        setIsActive(false);
      }
    });

    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (target?.current && !target.current.contains(e.target)) {
          setIsActive(false);
        }
      });
    };
  }, [target, inputValue]);

  useEffect(() => {
    if (Boolean(inputValue)) {
      router.push({
        query: {
          query: inputValue.toLowerCase(),
        },
      });
    } else {
      router.replace("/", undefined, { shallow: true });
    }
  }, [inputValue]);

  return (
    <div className={styles.search__bar} ref={target}>
      <div
        className={`${styles.search__bar_input} ${
          isActive ? styles.active : ""
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          type="text"
          placeholder="Search for a movie, tv show, person..."
          autoFocus={true}
        />
        <Image
          className={styles.search__bar_icon}
          src={"/images/close-icon.svg"}
          width={20}
          height={20}
          alt={"Delete icon"}
        />
      </div>
      <Image
        onClick={() => setIsActive(true)}
        className={`${styles.search__bar_icon} ${isActive ? styles.hide : ""}`}
        src={"/images/magnifying-glass.svg"}
        width={20}
        height={20}
        alt={"Search icon"}
      />
    </div>
  );
};
