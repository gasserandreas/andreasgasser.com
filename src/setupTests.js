import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

import ThemeProvider from './components/Theme/ThemeProvider';

// setup enzyme
configure({ adapter: new Adapter() });

// setup fetch mock
global.fetch = jestFetchMock;

// setup theme util
const withTheme = (children) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);

global.withTheme = withTheme;
