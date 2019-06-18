import { createGlobalStyle } from 'styled-components';

export const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 14px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        color: #fff;
        background-color: #000;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;
