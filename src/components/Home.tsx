import React, { memo } from 'react';
import styled from 'styled-components';

const AlignDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.FC = () => (
  <AlignDiv>
    <h1>Welcome to React with TS</h1>
  </AlignDiv>
);

export default memo(Home);
