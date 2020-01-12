import React from 'react';

import TopBar, { TOP_BAR_FULL_HEIGHT } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
};

export const defaultTopBar = () => (
  <div style={{
    position: 'absolute', top: '0px', height: '250px', overflow: 'scroll', borderBottom: '1px solid',
  }}
  >
    <TopBar menuContent={<p>Hello Menu</p>} />
    <p style={{ paddingTop: TOP_BAR_FULL_HEIGHT }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      {' '}
      ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
      {' '}
      duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      {' '}
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      {' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
      {' '}
      et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      {' '}
      sanctus est Lorem ipsum dolor sit amet.
      {' '}
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
      {' '}
      ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
      {' '}
      duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      {' '}
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      {' '}
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
      {' '}
      et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      {' '}
      sanctus est Lorem ipsum dolor sit amet.
    </p>
  </div>
);

defaultTopBar.story = {
  name: 'default',
};
