import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [vidoes, setVidoes] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDrX8kZjlPznZgOwCvSMPTjuE9RoMOz61A",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVidoes(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <div className="App">test</div>;
}

export default App;
