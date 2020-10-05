import { useState, useEffect } from 'react';

const { REACT_APP_API_KEY } = process.env;

const API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20';

function useYoutube(searchWord) {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    async function fetchVideos() {
      console.log('Serching', searchWord);
      try {
        const response = await fetch(
          `${API_URL}&q=${searchWord}&type=video&key=${REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideos();
  }, [searchWord]);

  return videos;
}

export default useYoutube;
