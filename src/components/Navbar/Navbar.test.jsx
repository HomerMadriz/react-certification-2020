import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useAuth } from '../../providers/Auth';
import Nav from './Navbar.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

describe('Navbar component test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Test log out', () => {
    const logout = jest.fn();
    useAuth.mockReturnValue({ authenticated: true, logout });

    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    userEvent.click(container.querySelector('.profilebutton'));

    expect(screen.getByText('Log out')).toBeTruthy();

    userEvent.click(screen.getByText('Log out'));

    expect(logout).toBeCalled();
  });
});
