import React from 'react';

import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const defaultLayout = () => (
  <Layout>
    <p>default layout</p>
  </Layout>
);

defaultLayout.story = {
  name: 'default',
};

export const custom = () => (
  <Layout>
    <p>custom layout</p>
  </Layout>
);
