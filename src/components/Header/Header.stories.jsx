import React from 'react';
import { text } from '@storybook/addon-knobs';

import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

export const defaultHeader = () => (
  <Header siteTitle={text('siteTitle', 'Homepage')} />
);

defaultHeader.story = {
  name: 'default',
};
