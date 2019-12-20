import React from 'react';

import Page from './Page';

export default {
  title: 'Page',
  component: Page,
  decorators: [(storyFn) => (
    <div
      style={{
        height: '100vh',
      }}
    >
      {storyFn()}
    </div>
  )],
};

export const defaultPage = () => (
  <Page>
    <p>default page</p>
  </Page>
);

defaultPage.story = {
  name: 'default',
};

export const custom = () => (
  <Page>
    <p>custom page</p>
  </Page>
);
