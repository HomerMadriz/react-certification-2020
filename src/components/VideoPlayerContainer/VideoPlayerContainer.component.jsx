import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoContext from '../../State/Videos/VideoContext';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoPlayerList from '../VideoPlayerList/VideoPlayerList.component';
//import videos from '../../assets/results';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const VideoPlayerContainer = () => {

  const { state } = useContext(VideoContext);
  //console.log(state);
  return (
      <Grid>
        <VideoPlayer video={state.currentVideo} />
        <VideoPlayerList videos={state.videos} />
      </Grid>

  );
};

export default VideoPlayerContainer;
