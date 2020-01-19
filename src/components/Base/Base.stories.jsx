import React from 'react';
import { select } from '@storybook/addon-knobs';

import TextComponent from './Text';
import HeadingComponent from './Heading';

export default {
  title: 'Base',
  component: TextComponent,
};

const textOptions = {
  default: '',
  small: 'small',
  muted: 'muted',
  bold: 'bold',
};

export const Text = () => (
  <TextComponent variant={select('variant', textOptions, textOptions[0])}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    {' '}
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </TextComponent>
);

const headingOptions = {
  page: 'page',
  subPage: 'subPage',
  section: 'section',
};

export const Heading = () => (
  <HeadingComponent variant={select('variant', headingOptions, headingOptions[0])}>
    Custom Heading
  </HeadingComponent>
);
