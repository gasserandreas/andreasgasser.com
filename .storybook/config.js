import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import { withKnobs } from '@storybook/addon-knobs';

import { name } from '../package.json';
import GlobalStyles from '../src/components/Theme/GlobalStyles';
import ThemeProvider, { useTheme } from '../src/components/Theme/ThemeProvider';
import ThemeSwitcher from '../src/components/Theme/ThemeSwitcher';

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

const ThemedBackground = ({ children }) => {
  const theme = useTheme();
  const { colors } = theme;
  
  return (
    <div style={{ backgroundColor: colors.background, height: '100vh' }}>
      <div>
        <strong>Switch theme: </strong>
        <span style={{ display: 'inline-block', margin: '0.25rem 1rem 0.25rem 0'}}>
          <ThemeSwitcher />
        </span>
      </div>
      {children}
    </div>
  )
}

// custom configuration
addDecorator((story) => (
  <ThemeProvider>
    <GlobalStyles/>
    <ThemedBackground>
      {story()}
    </ThemedBackground>
    {/* <div>
      <ThemeSwitcher />
      {story()}
    </div> */}
  </ThemeProvider>
));

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
