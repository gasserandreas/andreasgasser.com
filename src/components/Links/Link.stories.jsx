import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Text from '../Base/Text';
import Link from './Link';
import TitleLink from './TitleLink';

export default {
  title: 'Link',
  component: Link,
};

export const defaultLink = () => (
  <Link
    to={text('to', '/home')}
    external={boolean('external', false)}
  >
    Go to home
  </Link>
);

defaultLink.story = {
  name: 'default',
};


export const inlineLink = () => (
  <Text>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    {' '}
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    {' '}
    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    {' '}
    <Link
      to={text('to', '/home')}
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
  </Text>
);

export const titleLink = () => (
  <div>
    <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      {' '}
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      {' '}
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
      {' '}
      <Link
        to={text('to', '/home')}
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
    </Text>
    <TitleLink to={text('to', '/home')}>Section Title</TitleLink>
  </div>
);
