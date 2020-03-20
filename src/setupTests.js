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

/**
 * FormitState helper for Jest test cases
 * @param {*} formElements 
 */
const createFormitState = (formElements = {}) => ({
  values: formElements.reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: cur,
    }),
    {},
  ),
  touched: formElements.reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: false,
    }),
    {},
  ),
  errors: formElements.reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: false,
    }),
    {},
  ),
  dirty: false,
  submitting: false,
  error: '',
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  handleSubmit: jest.fn(),
  handleReset: jest.fn(),
  onSubmit: jest.fn(),
});

global.renderWithRouter = renderWithRouter;
global.withTheme = withTheme;
global.createFormitState = createFormitState;
