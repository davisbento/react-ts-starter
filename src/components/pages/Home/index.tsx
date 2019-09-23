import { Container } from 'assets/styled/container';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import List from './List';

export default memo(() => (
  <Container>
    <Link to='/about'>About Page</Link>

    <h1>Welcome to React with TS</h1>

    <List />
  </Container>
));
