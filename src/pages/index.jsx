/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import Text from '../components/Base/Text';
import Heading from '../components/Base/Heading';
import { GitHubIcon, LinkedInIcon } from '../components/Icons/SocialIcon';

const Styled = {
  Heading: styled.div`
    padding: 2rem 0;
  `,
  SocialIconWrapper: styled.div`
    a {
      display: inline-block;
      margin: 0 0.5rem 0;
      font-size: 1.25rem;
    }
  `,
};

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <Layout>
      <Styled.Heading>
        <Heading
          variant="page"
          my={4}
        >
          Hello you
          {' '}
        </Heading>
        <Heading variant="subPage">and welcome on my new page</Heading>
      </Styled.Heading>
      <Text my={3}>
        I am currently working on a new version, please return later.
      </Text>
      <Styled.SocialIconWrapper>
        <GitHubIcon />
        <LinkedInIcon />
      </Styled.SocialIconWrapper>
    </Layout>
  </Page>
);

export default IndexPage;
