import { Container } from 'assets/styled/container';
import React, { memo, useEffect } from 'react';

interface IProps {
  data?: any[];
}

const List: React.FC<IProps> = ({ data }) => {
  useEffect(() => {
    console.log('updated');
  });

  return (
    <Container>
      <h2>List Component</h2>
    </Container>
  );
};

export default memo(List);
