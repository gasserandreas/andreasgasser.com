import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import { withKnobs } from '@storybook/addon-knobs';

import { name } from '../package.json';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};

// custom configuration
addDecorator(withKnobs);

// set global options
addParameters({
  options: {
    panelPosition: 'right',
    theme: create({
      base: 'light',

      fontBase: '"Arial", sans-serif',

      textColor: '#333',

      // brandTitle: name,
      brandUrl: 'https://andreasgasser.com',
    }),
  },
});

// automatically import all files ending in *.stories.js
function loadStories() {
  return require.context('../src', true, /\.stories\.jsx$/);
}

configure(loadStories(), module);
