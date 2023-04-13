import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import { Card } from "../Card";

interface CarouselProps {
  data?: any;
  heading: string;
}

export const Carousel = (props: CarouselProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  const handleNextSlide = () => {
    if (index >= 3) {
      setIndex(0);
      setValue(value + 300);
    } else {
      setIndex(index + 1);
      setValue(value + -100);
    }
  };

  const handlePrevSlide = () => {
    index > 0 ? setIndex(index - 1) : setIndex(0);
    setValue(value + 100);
  };

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.header__title}>{props.heading}</h2>
        <div className={styles.header__progress}>
          {Array(4)
            .fill(null)
            .map((_, i: number) => {
              return (
                <div
                  key={i}
                  className={`${styles.header__progress_index} ${
                    index === i ? styles.active__index : ""
                  }`}
                ></div>
              );
            })}
        </div>
      </div>
      <div className={styles.carousel}>
        {index > 0 && (
          <button
            className={`${styles.carousel__button} ${styles.carousel__button_left}`}
            onClick={handlePrevSlide}
          >
            <Image
              className={styles.carousel__button_icon}
              src={"/images/chevron-left-solid.svg"}
              alt={"Left button"}
              width={30}
              height={30}
            />
          </button>
        )}
        <button
          className={`${styles.carousel__button} ${styles.carousel__button_right}`}
          onClick={handleNextSlide}
        >
          <Image
            className={styles.carousel__button_icon}
            src={"/images/chevron-right-solid.svg"}
            alt={"Right button"}
            width={30}
            height={30}
          />
        </button>
        <div className={styles.carousel__scroller}>
          <div
            className={styles.movie}
            style={{ transform: `translateX(${String(value)}%` }}
          >
            {props.data.map((movie: any) => {
              return (
                <Card
                  key={movie.id}
                  poster_path={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
