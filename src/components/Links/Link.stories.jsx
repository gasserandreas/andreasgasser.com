import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Link from './Link';

export default {
  title: 'Link',
  component: Link,
};

export const defaultLink = () => (
  <Link
    to={text('to', '/home')}
    inline={boolean('inline', false)}
    external={boolean('external', false)}
  >
    Go to home
  </Link>
);

export const inlineLink = () => (
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    {' '}
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    {' '}
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    {' '}
    <Link
      to={text('to', '/home')}
      inline={boolean('inline', true)}
    >
      Inline Link
    </Link>
    {' '}
    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    {' '}
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    {' '}
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    {' '}
    no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
);

defaultLink.story = {
  name: 'default',
};
