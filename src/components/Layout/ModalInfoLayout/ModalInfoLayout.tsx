/* eslint-disable @next/next/no-img-element */
import { Suspense, useEffect, useState } from "react";
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
  mediaVoteAverage,
} from "@/services/utils/media";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ModalInfoLayout = (): JSX.Element => {
  const { mediaData, isMediaMovie, isOpen } = useModal();
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) {
      setIsMuted(true);
    }
  }, [isOpen]);

  return (
    <div className={styles.modal__info}>
      <Suspense fallback={<Skeleton count={5} />}>
        <div className={styles.modal__info_video}>
          <VideoPlayer
            isMuted={isMuted}
            videoUrl={mediaVideoUrl(mediaData)!}
            poster_path={
              mediaData?.poster_path
                ? `${process.env.NEXT_PUBLIC_IMAGE_PATH}${mediaData?.poster_path}`
                : "/images/default-poster.svg"
            }
            isPlaying={isOpen}
          />
          <div className={styles.modal__info_video_controls}>
            <VideoControls
              isMuted={isMuted}
              handleVolume={() => setIsMuted(!isMuted)}
              isVideo={mediaData?.videos.results.length !== 0 ? true : false}
            />
          </div>
        </div>
      </Suspense>
      <div className={styles.modal__info_details}>
        <div className={styles.modal__info_details_left}>
          <div>
            <span>{mediaMovieOrTvDate(mediaData, isMediaMovie)}</span>
            <span>-</span>
            <span>{mediaRuntimeOrSeason(mediaData, isMediaMovie)}</span>
            <span>-</span>
            <div
              className={`${styles.modal__info_details_left_vote} ${
                mediaVoteAverage(mediaData) < 7 &&
                mediaVoteAverage(mediaData) > 5
                  ? styles.medium__rating
                  : mediaVoteAverage(mediaData) < 5
                  ? styles.low__rating
                  : null
              }`}
            >
              <span>{mediaVoteAverage(mediaData)}</span>
            </div>
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

      <p className={styles.modal__info_overview}>
        <span>Overview </span>
        {mediaData?.overview ||
          "We don't have an overview translated in English. Help us expand our database by adding one."}
      </p>
    </div>
  );
};
