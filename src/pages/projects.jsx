/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
// import styled from 'styled-components';
// import { Flex, Box } from 'rebass/styled-components';

import Heading from '../components/Base/Heading';
import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

// const Styles = {};

const ProjectsPage = () => (
  <Page>
    <SEO title="Projects" />
    <Layout>
      <Heading variant="section">
        Projects
      </Heading>
      <Heading>
        Selected projects.
      </Heading>
      <Heading variant="subPage">
        Quick showcase what I have worked on in the past.
      </Heading>
    </Layout>
  </Page>
);

export default ProjectsPage;
