import React from "react";
import ReactPlayer from "react-player";

export const Video = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=MVPTGNGiI-4"
      playing={false}
      volume={0.1}
    />
  );
};
