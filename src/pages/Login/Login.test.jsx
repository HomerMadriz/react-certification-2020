import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/api/login.api';
import LoginPage from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../../utils/api/login.api', () => jest.fn());

describe('Login page test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('login on correct user', async () => {
    const login = jest.fn();
    loginApi.mockReturnValue(new Promise((res) => res()));
    useAuth.mockReturnValue({ login });

    render(<LoginPage />);
    const userInput = await screen.findByLabelText('username');
    const passwordInput = await screen.findByLabelText('password');

    userEvent.type(userInput, 'wizeline');
    userEvent.type(passwordInput, 'Rocks!');

    expect(await screen.findByLabelText('username')).toHaveValue('wizeline');
    expect(await screen.findByLabelText('password')).toHaveValue('Rocks!');
  });
});
