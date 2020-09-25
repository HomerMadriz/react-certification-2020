import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoPlayerList from '../VideoPlayerList/VideoPlayerList.component';
import videos from '../../assets/results';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const VideoPlayerContainer = () => {
  return (
    <Grid>
      <VideoPlayer video={videos[0]} />
      <VideoPlayerList videos={videos} />
    </Grid>
  );
};

export default VideoPlayerContainer;
