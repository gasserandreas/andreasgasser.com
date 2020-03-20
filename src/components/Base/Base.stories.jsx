import React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';

import TextComponent from './Text';
import HeadingComponent from './Heading';
import InputComponent from './Input';
import FieldComponent from './Field';

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

export const Input = () => (
  <InputComponent value={text('value', 'Andreas')} />
);

export const Field = () => {
  const id = text('id', 'custom-id');
  return (
    <FieldComponent
      id={id}
      error={text('error', null)}
      label={text('label', 'Add your name')}
      inline={boolean('inline', false)}
    >
      <InputComponent
        id={id}
        value={text('value', 'Andreas')}
      />
    </FieldComponent>
  );
};
