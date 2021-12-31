import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideo] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideo(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideo(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
