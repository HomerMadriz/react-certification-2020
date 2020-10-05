import loginApi from './login.api';

describe('Login API tests', () => {
  it('Return the user if the username and password are correct', () => {
    const name = 'Wizeline';
    const id = '123';
    const userPromise = loginApi('wizeline', 'Rocks!');

    userPromise.then((user) => {
      expect(user.name).toEqual(name);
      expect(user.id).toEqual(id);
    });
  });

  it('Return username or password invalid error', () => {
    const userPromise = loginApi('', '');

    userPromise.catch((error) => {
      expect(error).toEqual('Username or password invalid');
    });
  });
});
