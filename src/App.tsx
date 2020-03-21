import Home from 'components/pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'components/pages/Login';

import 'assets/css/global.css';
import { AuthProvider } from 'providers/AuthProvider';

export default () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  </AuthProvider>
);
