/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./styles.module.css";
import { useModal } from "@/contexts";
import { VideoControls } from "@/components/VideoControls";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import {
  mediaCredits,
  mediaGenres,
  mediaMovieOrTvDate,
  mediaRuntimeOrSeason,
  mediaVideoUrl,
} from "@/services/utils/media";

interface ModalInfoLayoutProps {
  isMounted: boolean;
}

export const ModalInfoLayout = (props: ModalInfoLayoutProps): JSX.Element => {
  const { mediaData, isMediaMovie } = useModal();
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <div className={styles.modal__info}>
      <div className={styles.modal__info_video}>
        <VideoPlayer isMuted={isMuted} videoUrl={mediaVideoUrl(mediaData)!} />
        <div className={styles.modal__info_video_controls}>
          <VideoControls
            isMuted={isMuted}
            handleVolume={() => setIsMuted(!isMuted)}
          />
        </div>
      </div>
      <div className={styles.modal__info_details}>
        <div className={styles.modal__info_details_left}>
          <div>
            <span>{mediaMovieOrTvDate(mediaData, isMediaMovie)}</span>
            {mediaRuntimeOrSeason(mediaData, isMediaMovie)}
          </div>
        </div>
        <div className={styles.modal__info_details_right}>
          <div>
            <span>Director: </span>
            {mediaCredits(mediaData)}
          </div>
          <div>
            <span>Genres: </span>
            {mediaGenres(mediaData)}
          </div>
        </div>
      </div>
      <p className={styles.modal__info_overview}>{mediaData?.overview}</p>
    </div>
  );
};
