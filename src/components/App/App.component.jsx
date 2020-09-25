import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';
import Navbar from '../Navbar';
import CardContainer from '../CardContainer';
import { random } from '../../utils/fns';
import VideoPlayerContainer from '../VideoPlayerContainer/VideoPlayerContainer.component';

function App() {
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
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path="/">
              <CardContainer />
            </Route>
            <Route path="/player">
              <VideoPlayerContainer />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
