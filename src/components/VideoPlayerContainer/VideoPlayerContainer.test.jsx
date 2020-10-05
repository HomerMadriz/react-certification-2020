import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoContext from '../../State/Videos/VideoContext';
import videos from '../../assets/results';
import VideoPlayerContainer from './VideoPlayerContainer.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

describe('Video Player Container test', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useAuth.mockReturnValue({ authenticatated: true });
  });

  it('Renders video player and video list', () => {
    const state = {
      currentVideo: videos[0],
      videos,
      isComingFromFavorites: false,
    };

    render(
      <VideoContext.Provider value={{ state }}>
        <VideoPlayerContainer />
      </VideoContext.Provider>
    );

    expect(screen.getByText('Wizeline')).toBeTruthy();
    expect(screen.getByText('How does Wizeline work?')).toBeTruthy();
  });
});
