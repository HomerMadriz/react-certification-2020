import styled from 'styled-components'

const CardContainer = styled.div`
    width: 345px;
    height: 345px;
    margin: 10px;
    overflow: hidden;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 16px;
    background: white;
    box-shadow: -1rem 0 3rem #000;
    cursor: pointer;
`

const CardContent = styled.header`
    margin-bottom: auto;
    padding: 16px;

    & h2 {
        margin: 0;
        font-size: 1.16rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 0.0075em;
        margin-bottom: 0.35em;
    }

    & p {
        margin: 0;
        text-align: justify;
        font-size: 0.800rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        color: gray; 
    }

`

const CardImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`

export { CardContainer, CardContent, CardImage }