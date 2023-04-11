/* eslint-disable @next/next/no-img-element */
import { ButtonPlusIcon } from "../Button";
import styles from "./styles.module.css";

export interface CoverProps {
  poster_path: string;
  title: string;
  overview: string;
}

export const Cover = (props: CoverProps): JSX.Element => {
  const { poster_path, title, overview } = props;
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img
          className={styles.cover__image}
          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${poster_path}`}
          alt="Cover Image"
        />
      </div>
      <div className={styles.cover__details}>
        <h1 className={styles.cover__details_title}>{title}</h1>
        <p className={"large__paragraph"}>{overview}</p>
        <div className={styles.cover__details_buttons}>
          <ButtonPlusIcon
            content="Play"
            iconSrc="/images/play-solid.svg"
            iconWidth={25}
            iconHeight={25}
            iconAlt="Play icon"
          />
          <ButtonPlusIcon
            content="More info"
            iconSrc="/images/circle-info-solid.svg"
            isTransparent
            iconWidth={25}
            iconHeight={25}
            iconAlt="Get more info icon"
          />
        </div>
      </div>
    </div>
  );
};
