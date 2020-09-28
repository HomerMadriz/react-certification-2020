import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoContext from '../../State/Videos/VideoContext';
//import videos from '../../assets/results';
import Card from '../Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: scroll;
  justify-content: left;
  padding: 25px;

  & a {
    color: black;
    text-decoration: none;
  }
`;


const FavoritesContainer = () => {
  const { state, dispatch } = useContext(VideoContext);
  console.log(state.favorites);
  
  if(state.favorites.length === 0) {
    return (
      <p>No favorites</p>
    )
  }  else {
    return (
      <Grid>
        {state.favorites.map((video, index) => {
          return (
            <Link key={index} to={`/${video.id.videoId}`} onClick={() => dispatch({ type: "SET_CURRENT_VIDEO", payload: video})}>
              <Card 
                key={video.id.videoId} 
                video={video} />
            </Link>
          );
        })}
      </Grid>
    );
  }

};

export default FavoritesContainer;
