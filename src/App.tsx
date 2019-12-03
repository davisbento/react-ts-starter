import FeedbackMessage from 'components/pages/Feedback';
import Home from 'components/pages/Home';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feedback from 'components/shared/FeedbackMessage';

import 'assets/css/global.css';

export default () => (
  <Fragment>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/feedback-message' component={FeedbackMessage} />
      </Switch>
    </Router>

    <Feedback />
  </Fragment>
);
