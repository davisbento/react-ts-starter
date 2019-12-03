import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';

import List from './List';

export default memo(() => {
  return (
    <Fragment>
      <Link to='/feedback-message'>Feedback Message</Link>

      <h1>Welcome to React with TS</h1>

      <List />
    </Fragment>
  );
});
