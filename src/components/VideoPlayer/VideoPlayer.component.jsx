import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import {
  PlayerContainer,
  PlayerFrame,
  PlayerTitle,
  PlayerDescription,
} from './VideoPlayer.styles';
import VideoContext from '../../State/Videos/VideoContext';
import { useAuth } from '../../providers/Auth';

const VideoPlayer = () => {
  const { state, dispatch } = useContext(VideoContext);
  const video = state.currentVideo;
  let favButtonText =
    video.isFavorite === true ? 'Remover de favoritos' : 'Agregar a favoritos';
  const { authenticated } = useAuth();

  return (
    <PlayerContainer>
      <PlayerFrame
        data-testid="iframe"
        title="video"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      />
      <PlayerTitle>
        <h5>{video.snippet.title}</h5>
        {authenticated ? (
          <Button
            variant="contained"
            onClick={() => {
              if (state.currentVideo.isFavorite) {
                dispatch({ type: 'REMOVE_FAVORITE_VIDEO' });
              } else {
                console.log('Agregando a favoritos', state.currentVideo.isFavorite);
                dispatch({ type: 'ADD_FAVORITE_VIDEO', payload: video });
              }

              dispatch({ type: 'SET_CURRENT_VIDEO', payload: state.currentVideo });
              state.currentVideo.isFavorite =
                state.currentVideo.isFavorite === undefined
                  ? true
                  : !state.currentVideo.isFavorite;
              favButtonText =
                video.isFavorite === true
                  ? 'Remover de favoritos'
                  : 'Agregar a favoritos';
              console.log(state);
            }}
          >
            {favButtonText}
          </Button>
        ) : (
          ''
        )}
      </PlayerTitle>
      <PlayerDescription>{video.snippet.description}</PlayerDescription>
    </PlayerContainer>
  );
};

export default VideoPlayer;
