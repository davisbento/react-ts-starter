import { GlobalStyle, theme } from 'assets/theme';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>
);
