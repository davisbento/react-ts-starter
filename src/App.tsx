import { GlobalStyle, theme } from 'assets/theme';
import Home from 'components/Home';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Home />
      </Fragment>
    </ThemeProvider>
  );
}
