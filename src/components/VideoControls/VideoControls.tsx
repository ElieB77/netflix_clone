import Image from "next/image";
import styles from "./styles.module.css";

interface VideoControlsProps {
  isMuted: boolean;
  handleVolume: React.MouseEventHandler;
  isVideo: boolean;
}

export const VideoControls = (props: VideoControlsProps): JSX.Element => {
  const { isMuted, handleVolume, isVideo } = props;
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
            alt="Thumbs up icon"
          />
        </button>
      </div>
      {isVideo && (
        <button
          className={`${styles.container__button} ${styles.container__button_volume}`}
          onClick={handleVolume}
        >
          <Image
            src={
              isMuted
                ? "/images/volume-mute-solid.svg"
                : "/images/volume-high-solid.svg"
            }
            alt="Volume button"
            width={25}
            height={25}
          />
        </button>
      )}
    </div>
  );
};
