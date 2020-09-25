import React from 'react';
import videos from '../../assets/results';
import Card from '../Card';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: scroll;
    justify-content: center;
    padding: 25px;
`

const CardContainer = () => {
    return (
        <Grid>
            {
                videos.map((video) => {
                    return (
                        <Card video={video} />
                    )
                })
            }
        </Grid>
    )
};

export default CardContainer;