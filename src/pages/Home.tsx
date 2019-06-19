import { Container } from 'assets/styled/container';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <Container>
    <Link to='/about'>About Page</Link>

    <h1>Welcome to React with TS</h1>
  </Container>
);

export default memo(Home);
