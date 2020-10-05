import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import VideoContext from '../../State/Videos/VideoContext';
import FavoritesContainer from './FavoritesContainer.component';
import videos from '../../assets/results';

describe('Favorites Container Component', () => {
  it('Displays no favorites description', () => {
    const state = { favorites: [] };

    render(
      <VideoContext.Provider value={{ state }}>
        <FavoritesContainer />
      </VideoContext.Provider>
    );

    expect(screen.getByText('No favorites')).toBeTruthy();
  });

  it('Execute the onClick dispatch function twice', () => {
    const state = { favorites: [videos[0]] };
    const dispatch = jest.fn();

    render(
      <BrowserRouter>
        <VideoContext.Provider value={{ state, dispatch }}>
          <FavoritesContainer />
        </VideoContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText('Video Tour | Welcome to Wizeline Guadalajara'));

    expect(dispatch).toBeCalledTimes(2);
  });
});
