import React from 'react';

import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const defaultNavigation = () => (
  <Navigation />
);

defaultNavigation.story = {
  name: 'default',
};
