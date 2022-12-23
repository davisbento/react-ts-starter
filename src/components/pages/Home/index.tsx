import { Fragment, memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'providers/AuthProvider';
import List from './List';

const Home = memo(() => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      <Link to='/'>Home Page</Link>

      {JSON.stringify(user)}

      <List />
    </Fragment>
  );
});
export default Home;
