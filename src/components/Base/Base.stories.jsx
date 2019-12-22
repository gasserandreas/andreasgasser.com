import React from 'react';
import { select } from '@storybook/addon-knobs';

import Text from './Text';

export default {
  title: 'Base',
  component: Text,
};

const textOptions = {
  default: '',
  small: 'small',
  muted: 'muted',
  bold: 'bold',
};

export const defaultText = () => (
  <Text variant={select('variant', textOptions, textOptions[0])}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    {' '}
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </Text>
);

defaultText.story = {
  name: 'default',
};
