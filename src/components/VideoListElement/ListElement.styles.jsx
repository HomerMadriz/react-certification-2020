import styled from 'styled-components';

const Element = styled.div`
  height: 100px;
  position: relative;
  display: flex;

  & a {
    height: 100px;
    position: relative;
    display: flex;
    color: black;
    text-decoration: none;
  }
`;

const VideoImage = styled.img`
  width: 120px;
  height: 90px;
`;

const VideoTitle = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 5px;
  box-sizing: border-box;

  & p {
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
`;

export { Element, VideoImage, VideoTitle };
