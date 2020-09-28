import React from 'react';
import styled from 'styled-components';
import VideoListElement from '../VideoListElement';

const List = styled.div`
  width: 30%;
  height: 900px;
  overflow: scroll;
`;

const VideoPlayerList = ({ videos }) => {
  return (
    <List>
      {videos.map((video, index) => {
        return <VideoListElement key={video.id.videoId} video={video} index={index} />;
      })}
    </List>
  );
};

export default VideoPlayerList;
