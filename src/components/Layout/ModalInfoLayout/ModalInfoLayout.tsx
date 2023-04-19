/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";
import { useModal } from "@/contexts";
import Image from "next/image";

interface ModalInfoLayoutProps {
  isMounted: boolean;
}

export const ModalInfoLayout = (props: ModalInfoLayoutProps): JSX.Element => {
  const { mediaData, isMovie } = useModal();
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const credits = mediaData?.credits.crew.find(
    (member: any) =>
      member.job === "Director" ||
      member.job === "Producer" ||
      member.job === "Executive Producer"
  );
  const directorName = credits?.name || "";

  const videoUrl =
    mediaData?.videos.results.find((video: any) => video.type === "Trailer")
      ?.key ||
    mediaData?.videos.results.find((video: any) => video.type === "Teaser")
      ?.key ||
    undefined;

  const runtimeOrSeason = isMovie ? (
    <span>{mediaData?.runtime} min</span>
  ) : (
    <span>{mediaData?.number_of_seasons} Seasons</span>
  );

  const mediaGenres = mediaData?.genres
    .map((genre: any) => {
      return genre.name.split(" ").join(", ");
    })
    .join(", ");

  const mediaOverview = mediaData?.overview;

  const movieOrTVDate = isMovie ? (
    <span>{mediaData?.release_date?.substring(0, 4)}</span>
  ) : (
    <span>{mediaData?.first_air_date?.substring(0, 4)}</span>
  );

  return (
    <div className={styles.modal__info}>
      <div className={styles.modal__info_video}>
        <ReactPlayer
          volume={1}
          muted={isMuted}
          playing={true}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
          style={{
            minWidth: "100%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            overflow: "hidden",
          }}
          url={`https://www.youtube.com/watch?v=${videoUrl}`}
        />
        <button
          className={styles.modal__info_video_volume}
          onClick={() => setIsMuted(!isMuted)}
        >
          <Image
            src={`${
              isMuted
                ? "/images/volume-mute-solid.svg"
                : "/images/volume-high-solid.svg"
            }`}
            alt="Volume button"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={styles.modal__info_details}>
        <div className={styles.modal__info_details_left}>
          <div>
            {movieOrTVDate}
            {runtimeOrSeason}
          </div>
        </div>
        <div className={styles.modal__info_details_right}>
          <div>
            <span>Director: </span>
            {directorName}
          </div>
          <div>
            <span>Genres: </span>
            {mediaGenres}
          </div>
        </div>
      </div>
      <p className={styles.modal__info_overview}>{mediaOverview}</p>
    </div>
  );
};
