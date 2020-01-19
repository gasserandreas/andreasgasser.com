import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from '@reach/router';
import { render } from '@testing-library/react';

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

/**
 * Implementation taken from: https://testing-library.com/docs/example-reach-router
 * this is a handy function that I would utilize for any component
 * that relies on the router being in context
 * @param {*} ui 
 * @param {*} param1 
 */
function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

global.renderWithRouter = renderWithRouter;
global.withTheme = withTheme;
