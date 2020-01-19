import React from 'react';

import Layout from './Layout';
import LongText from './__examples__/LongText';
import Page from '../Page/Page';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [(storyFn) => (
    <div
      style={{
        height: '110vh',
      }}
    >
      <Page>{storyFn()}</Page>
    </div>
  )],
};

export const defaultLayout = () => (
  <Layout>
    <p>default Layout</p>
  </Layout>
);

export const longContent = () => (
  <Layout>
    <LongText />
  </Layout>
);

defaultLayout.story = {
  name: 'default',
};

// export const custom = () => (
//   <Layout>
//     <p>custom Layout</p>
//   </Layout>
// );
