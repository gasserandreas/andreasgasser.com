import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  /* get Google font */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
