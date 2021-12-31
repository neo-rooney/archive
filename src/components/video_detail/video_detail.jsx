import styles from "./video_detail.module.css";

import React from "react";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
      title={video.id}
    ></iframe>
    <h2>{snippet.title}</h2>
    <h2>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
