import React, {useRef} from "react";
import ReactPlayer from "react-player";

export default function PlayMovie({url}) {
  const playerRef = useRef(null);

  const handlePlay = () => {
    const player = playerRef.current.getInternalPlayer();
    player.requestFullscreen();
  };

  return (
    <ReactPlayer
    ref={playerRef}
    url={url}
    controls
    width="96%"
    config={{
      youtube: {
        playerVars: { modestbranding: 1 },
        origin: {url},
      },
    }}
    onPlay={handlePlay}
    />
  );
}
