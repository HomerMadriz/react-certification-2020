import React from 'react';
import styled from 'styled-components';
import VideoListElement from '../VideoListElement';

const List = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

const VideoPlayerList = ({ videos }) => {
  return (
    <List>
      {videos.map((video) => {
        return <VideoListElement video={video} />;
      })}
    </List>
  );
};

export default VideoPlayerList;
