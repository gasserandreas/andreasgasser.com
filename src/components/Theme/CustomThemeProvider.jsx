import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from './theme';

export const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
);

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default theme;
