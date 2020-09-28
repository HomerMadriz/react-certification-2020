import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import {
  PlayerContainer,
  PlayerFrame,
  PlayerTitle,
  PlayerDescription,
} from './VideoPlayer.styles';
import VideoContext from '../../State/Videos/VideoContext';

const VideoPlayer = () => {
  const { state, dispatch } = useContext(VideoContext);
  let video = state.currentVideo;
  let favButtonText = video.isFavorite === true ? "Remover de favoritos" : "Agregar a favoritos";;

  return (
    <PlayerContainer>
      <PlayerFrame
        title="video"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      />
      <PlayerTitle>
        <h5>{video.snippet.title}</h5>
          <Button variant="contained" onClick={() => {            
            if(state.currentVideo.isFavorite) {
              console.log("Quitando de favoritos", state.currentVideo.isFavorite);
              let favIndex = state.favorites.findIndex((item) => item.id.videoId === state.currentVideo.id.videoId);
              console.log("eliminando:", state.favorites[favIndex]);
              let favorites = state.favorites.splice(favIndex, 1);
              console.log("Favoritos despues de eliminar", favorites);

              dispatch({ type: 'REMOVE_FAVORITE_VIDEO', payload: state.favorites })
            } else {
              console.log("Agregando a favoritos", state.currentVideo.isFavorite);
              dispatch({ type: "ADD_FAVORITE_VIDEO", payload: video })
            }

            dispatch({ type: "SET_CURRENT_VIDEO", payload: state.currentVideo })
            state.currentVideo.isFavorite = state.currentVideo.isFavorite === undefined ? true : !state.currentVideo.isFavorite;
            favButtonText = video.isFavorite === true ? "Remover de favoritos" : "Agregar a favoritos";
            console.log(state);

            }}>{favButtonText}</Button>
      </PlayerTitle>
      <PlayerDescription>{video.snippet.description}</PlayerDescription>
    </PlayerContainer>
  );
};

export default VideoPlayer;
