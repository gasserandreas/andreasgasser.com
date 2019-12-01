import React from 'react';
import { configure } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

import usedTheme from './components/Theme/theme';

// setup enzyme
configure({ adapter: new Adapter() });

// setup fetch mock
global.fetch = jestFetchMock;

// setup theme util
const withTheme = (children, theme = usedTheme) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

global.withTheme = withTheme;
