import { Container } from 'assets/styled/container';
import React, { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';

export default memo(() => {
  return (
    <Fragment>
      <Container>
        <Link to='/'>Home Page</Link>
        <h1>About page</h1>
      </Container>
    </Fragment>
  );
});
