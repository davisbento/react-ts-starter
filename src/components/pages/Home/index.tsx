import React, { memo, Fragment, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'providers/AuthProvider';
import List from './List';

const Home = memo(() => {
  const history = useHistory();
  const { login, user } = useContext(AuthContext);

  const loginUser = useCallback(() => {
    history.push('/login');
    login({ username: 'Davi' }, 'tokenstring');
  }, [login, history]);

  return (
    <Fragment>
      <h1>Welcome to React with TS</h1>

      {user ? `Hello ${user.username}` : 'Not logged in'}

      <button onClick={loginUser}>Login</button>

      <List />
    </Fragment>
  );
});

export default Home;
