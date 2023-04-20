/* eslint-disable @next/next/no-img-element */
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

interface VideoPlayerProps {
  isMuted: boolean;
  videoUrl: string;
  poster_path?: string;
}

export const VideoPlayer = ({
  isMuted,
  videoUrl,
  poster_path,
}: VideoPlayerProps): JSX.Element => {
  return videoUrl ? (
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
  ) : (
    <div className={styles.poster__fallback}>
      <img src={poster_path} alt="Media Poster" />
    </div>
  );
};
