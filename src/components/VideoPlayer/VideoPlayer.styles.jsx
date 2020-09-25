import styled from 'styled-components'

const PlayerContainer = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`

const PlayerFrame = styled.iframe`
    width: 100%;
    height: 500px;
    margin-top: 5px;
`

const PlayerTitle = styled.div`
    padding: 10px 30px;
    margin: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & h5 {
        font-size: 1.5rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.334;
        letter-spacing: 0em;
        margin: 0;
    }
`
const PlayerDescription = styled.p`
        padding: 0px 30px;
        box-sizing: border-box;font-size: 0.875rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
`

export { PlayerContainer, PlayerFrame, PlayerTitle, PlayerDescription }