import React from 'react';
import YouTube from 'react-youtube';
import "../Total.css"

const VideoPlay = (props) => {
  const videoId = props.videoid||'1lzSHgB021E'; 
  const opts = {
    width: '125%', 
    height: '600',
  };
  return (
    <div >
      <YouTube videoId={videoId} opts={opts}  />
    </div>
  );
};

export default VideoPlay;
