import React from 'react';
import App from './App.component';
import { render, screen } from '@testing-library/react';
import videos from '../../assets/results';
import useYoutube from '../../utils/hooks/useYoutube';

jest.mock('../../utils/hooks/useYoutube', () => jest.fn(() => []))

describe('App test', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useYoutube.mockImplementation((searchWord) => {
      if(searchWord === 'Wizeline') {
        return videos;
      } else {
        return [];
      }
    })
  })

  it('renders App component', async () => {
    render(<App />);

    expect(await screen.findByDisplayValue('Wizeline')).toBeTruthy();
  });

  it('have Wizeline as search default', async () => {
    render(<App />);

    const input = await screen.getByPlaceholderText('Search…');

    expect(input).toHaveValue('Wizeline');
  })
});
