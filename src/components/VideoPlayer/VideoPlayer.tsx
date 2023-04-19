import ReactPlayer from "react-player";

interface VideoPlayerProps {
  isMuted: boolean;
  videoUrl: string;
}

export const VideoPlayer = (props: VideoPlayerProps): JSX.Element => {
  const { isMuted, videoUrl } = props;
  return (
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
  );
};
