import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

/**
 * Backup old GlobalStyles
 */
// * {
//   box-sizing: border-box;
//   outline: 0;
// }

// html,
// body,
// #___gatsby,
// #___gatsby > div {
//   margin: 0;
//   padding: 0;
//   min-height: 100%;
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   padding: 0;
//   font-family: sans-serif;
// }

const GlobalStyle = createGlobalStyle`
  ${reset};
 
  body {
    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
