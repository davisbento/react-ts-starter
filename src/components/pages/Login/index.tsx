import React, { Fragment, memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'providers/AuthProvider';

const Login = memo(() => {
  const { user } = useContext(AuthContext);
  return (
    <Fragment>
      <Link to='/'>Home Page</Link>
      {JSON.stringify(user)}
    </Fragment>
  );
});
export default Login;
