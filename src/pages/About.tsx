import { Container } from 'assets/styled/container';
import List from 'components/List';
import React, { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <Link to='/'>Home Page</Link>
        <h1>About page</h1>
      </Container>
      <List />
    </Fragment>
  );
};

export default memo(About);
