import React, { Fragment, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import feedbackMessageService from 'services/feedback';

export default memo(() => {
  const callMessage = useCallback(() => {
    feedbackMessageService.show('Hello');
  }, []);

  return (
    <Fragment>
      <Link to='/'>Home Page</Link>
      <h1>Test feedback via rxjs</h1>

      <button onClick={callMessage}>Feedback Message</button>
    </Fragment>
  );
});
