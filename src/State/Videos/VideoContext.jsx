import React from 'react';

const VideoContext = React.createContext({
  videos: [],
  favoriteVideos: [],
  currentVideo: {},
  setCurrentVideo: () => {},
  addFavoriteVideo: () => {},
  removeFavoriteVideo: () => {},
});

export default VideoContext;
