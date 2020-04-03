import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300&display=swap');

  body {
    background-color: #999;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  button {
    font-family: 'Work Sans', sans-serif;
  }
`;

Styles.displayName = 'GlobalStyles'
