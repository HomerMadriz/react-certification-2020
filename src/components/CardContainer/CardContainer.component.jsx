import React from 'react';
import styled from 'styled-components';
import videos from '../../assets/results';
import Card from '../Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: scroll;
  justify-content: center;
  padding: 25px;
`;

const CardContainer = () => {
  return (
    <Grid>
      {videos.map((video) => {
        return <Card video={video} />;
      })}
    </Grid>
  );
};

export default CardContainer;
