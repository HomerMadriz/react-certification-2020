import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/api/login.api';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    let user = loginApi(event.target.username.value, event.target.password.value);
    user.then(() => {
      login();
      history.push('/');
    }).catch((err) => {
      console.log(err);
      window.alert('Username or password invalid');
    });
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
