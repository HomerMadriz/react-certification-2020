import React from 'react';
import Button from '@material-ui/core/Button';
import {
  PlayerContainer,
  PlayerFrame,
  PlayerTitle,
  PlayerDescription,
} from './VideoPlayer.styles';

const VideoPlayer = ({ video }) => {
  return (
    <PlayerContainer>
      <PlayerFrame
        title="video"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      />
      <PlayerTitle>
        <h5>{video.snippet.title}</h5>
        <Button variant="contained">Agregar a favoritos</Button>
      </PlayerTitle>
      <PlayerDescription>{video.snippet.description}</PlayerDescription>
    </PlayerContainer>
  );
};

export default VideoPlayer;
