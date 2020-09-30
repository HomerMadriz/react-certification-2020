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
  justify-content: center;
  padding: 25px;

  & a {
    color: black;
    text-decoration: none;
  }
`;


const CardContainer = () => {
  const { state, dispatch } = useContext(VideoContext);
  
  console.log(state.videos);
  if(JSON.stringify(state.videos) === JSON.stringify({})) {
    return (
      <p>Loading...</p>
    )
  }  else {
    return (
      <Grid>
        {state.videos.map((video, index) => {
          return (
            <Link key={index} to={`/${video.id.videoId}`} onClick={() => { 
              dispatch({ type: "SET_CURRENT_VIDEO", payload: video});
              dispatch({ type: "SET_COMING_FROM_FAVORITES", payload: false}); 
              }}>
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

export default CardContainer;
