import { memo, Fragment, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'providers/AuthProvider';

const Login = memo(() => {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);

  const loginUser = useCallback(() => {
    navigate('/login');
    login({ username: 'Davi' }, 'tokenstring');
  }, [login, history]);

  return (
    <Fragment>
      <h1>Welcome to React with TS</h1>

      {user ? `Hello ${user.username}` : 'Not logged in'}

      <button onClick={loginUser}>Login</button>
    </Fragment>
  );
});

export default Login;
