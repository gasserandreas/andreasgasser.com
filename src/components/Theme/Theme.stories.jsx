import React from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import ThemeRenderer from './ThemeRenderer';
import ThemeProvider from './ThemeProvider';

export default {
  title: 'Theme',
  component: ThemeProvider,
};

export const defaultTheme = () => <ThemeRenderer />;

defaultTheme.story = {
  name: 'default',
};

export const themeSwitcher = () => <ThemeSwitcher />;
