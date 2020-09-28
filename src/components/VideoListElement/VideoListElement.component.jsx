import { Divider, Link } from '@material-ui/core';
import React, { useContext } from 'react';
import { Element, VideoImage, VideoTitle } from './ListElement.styles';
import VideoContext from '../../State/Videos/VideoContext';

const VideoListElement = ({ video, index }) => {

  const { dispatch } = useContext(VideoContext);

  return (
    <>
    <Element>
      <Link key={index} to={`/${video.id.videoId}`} onClick={() => dispatch({ type: "SET_CURRENT_VIDEO", payload: video })}>
        <VideoImage src={video.snippet.thumbnails.default.url} />
        <VideoTitle>
          <p>{video.snippet.title}</p>
        </VideoTitle>
      </Link>
    </Element>
    <Divider />
    </>
  );
};

export default VideoListElement;
