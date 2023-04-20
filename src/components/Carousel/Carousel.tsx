import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import { Card } from "../Card";
import { useModal } from "@/contexts";
import { MovieResponseType } from "@/types/media";

interface CarouselProps {
  data?: any;
  heading: string;
}

export const Carousel = (props: CarouselProps): JSX.Element => {
  const { openModal } = useModal();
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
      <div className={styles.carousel}>
        <div className={styles.carousel__header}>
          <h2 className={styles.carousel__header_title}>{props.heading}</h2>
          <div className={styles.carousel__header_progress}>
            {Array(4)
              .fill(null)
              .map((_, i: number) => {
                return (
                  <div
                    key={i}
                    className={`${styles.carousel__header_progress_index} ${
                      index === i ? styles.active__index : ""
                    }`}
                  ></div>
                );
              })}
          </div>
        </div>
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
            {props.data.map((media: any) => {
              return (
                <Card
                  onClick={() => {
                    openModal(
                      media.id,
                      media.hasOwnProperty("first_air_date") ? false : true
                    );
                  }}
                  key={media.id}
                  poster_path={
                    media.poster_path
                      ? `${process.env.NEXT_PUBLIC_IMAGE_PATH}${media.poster_path}`
                      : "/images/default-poster.svg"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
