import Image from "next/image";
import styles from "./styles.module.css";

interface VideoControlsProps {
  isMuted: boolean;
  handleVolume: any;
}

export const VideoControls = (props: VideoControlsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__grouped_buttons}>
        <button className={styles.container__button}>
          <Image
            src="/images/plus-solid.svg"
            width={25}
            height={25}
            alt="Add to list icon"
          />
        </button>
        <button className={styles.container__button}>
          <Image
            src="/images/thumbs-up-regular.svg"
            width={25}
            height={25}
            alt="Add to list icon"
          />
        </button>
      </div>
      <button
        className={`${styles.container__button} ${styles.container__button_volume}`}
        onClick={props.handleVolume}
      >
        <Image
          src={`${
            props.isMuted
              ? "/images/volume-mute-solid.svg"
              : "/images/volume-high-solid.svg"
          }`}
          alt="Volume button"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};
