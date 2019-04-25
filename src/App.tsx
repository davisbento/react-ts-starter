import { theme } from 'assets/theme';
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

class App extends PureComponent {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Welcome to React with TS</h1>

          <p>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
