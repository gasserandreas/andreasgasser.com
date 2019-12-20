import React from 'react';

import TopBar from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
};

export const defaultTopBar = () => (
  <TopBar />
);

defaultTopBar.story = {
  name: 'default',
};
