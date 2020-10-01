import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import Navbar from '../Navbar';
import CardContainer from '../CardContainer';
import { random } from '../../utils/fns';
import VideoPlayerContainer from '../VideoPlayerContainer/VideoPlayerContainer.component';
import useYoutube from '../../utils/hooks/useYoutube';
import VideoReducer from '../../State/Videos/VideoReducer';
import VideoContext from '../../State/Videos/VideoContext';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer.component';
import LoginPage from '../../pages/Login/Login.page';
import Private from '../Private/Private.component';

function App() {
  const [searchWord, setSearchWord] = useState('Wizeline');
  const [query, setQuery] = useState(searchWord);
  const videos = useYoutube(query);
  const [state, dispatch] = useReducer(VideoReducer, {
    videos,
    currentVideo: {},
    favorites: [],
    isComingFromFavorites: false,
  });

  useEffect(() => {
    dispatch({ type: 'SET_VIDEOS', payload: videos });
  }, [videos]);

  const search = (event) => {
    event.preventDefault();
    setQuery(searchWord);
  };

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoContext.Provider value={{ state, dispatch }}>
          <Navbar
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            searchFn={search}
          />
          <Layout>
            <Switch>
              <Route exact path="/">
                <CardContainer />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Private path="/favorites">
                <FavoritesContainer />
              </Private>
              <Route path="/:id">
                <VideoPlayerContainer />
              </Route>
            </Switch>
          </Layout>
        </VideoContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
