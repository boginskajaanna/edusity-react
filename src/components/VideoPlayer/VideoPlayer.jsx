import React, { useRef } from "react";
import styles from "./VideoPlayer.module.css";
import video from "../../assets/video/video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div className={`${styles.player} ${playState ? "" : styles.hide}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
