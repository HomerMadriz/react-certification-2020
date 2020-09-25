import React from 'react'
import { CardContainer, CardContent, CardImage } from './Card.styles'

const Card = ({ video }) => {
    return (
            <CardContainer>
                <CardImage src={video.snippet.thumbnails.medium.url} />
                <CardContent>
                    <h2>{video.snippet.title}</h2>
                    <p>{video.snippet.description === "" ? 'No description.' : video.snippet.description}</p>
                </CardContent>
            </CardContainer>
    )
};

export default Card;