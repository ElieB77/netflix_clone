/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";
import { useModal } from "@/contexts";

interface VideoPlayerProps {
  isMuted: boolean;
  videoUrl: string;
  poster_path?: string;
  isPlaying: boolean;
}

export const VideoPlayer = ({
  isMuted,
  videoUrl,
  poster_path,
  isPlaying,
}: VideoPlayerProps): JSX.Element => {
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const { isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      setHasEnded(false);
    }
  }, [isOpen]);

  return videoUrl && !hasEnded ? (
    <ReactPlayer
      onEnded={() => setHasEnded(true)}
      volume={1}
      muted={isMuted}
      playing={isPlaying}
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
  ) : (
    <div className={styles.poster__fallback}>
      <img src={poster_path} alt="Media Poster" />
    </div>
  );
};
