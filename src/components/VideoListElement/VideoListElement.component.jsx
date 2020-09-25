import React from 'react';
import { Element, VideoImage, VideoTitle } from './ListElement.styles';

const VideoListElement = ({ video }) => {
  return (
    <Element>
      <VideoImage src={video.snippet.thumbnails.default.url} />
      <VideoTitle>
        <p>{video.snippet.title}</p>
      </VideoTitle>
    </Element>
  );
};

export default VideoListElement;
