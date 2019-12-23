import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page/Page';
import SEO from '../components/SEO/SEO';

import Text from '../components/Base/Text';
import Heading from '../components/Base/Heading';
import { GitHubIcon, LinkedInIcon } from '../components/Icons/SocialIcon';

const Styled = {
  Heading: styled.div`
    padding: 2rem;
  `,
  SocialIconWrapper: styled.div`
    a {
      display: inline-block;
      margin: 0 0.5rem;
      font-size: 1.25rem;
    }
  `,
};

const IndexPage = () => (
  <Page>
    <div style={{ textAlign: 'center' }}>
      <SEO title="Home" />
      <Styled.Heading>
        <Heading
          variant="page"
          margin={4}
        >
          Hello you
          {' '}
        </Heading>
        <Heading variant="subPage">and welcome on my new page</Heading>
      </Styled.Heading>
      <Text margin={3}>
        I am currently working on a new version, please return later.
      </Text>
      <Styled.SocialIconWrapper>
        <GitHubIcon />
        <LinkedInIcon />
      </Styled.SocialIconWrapper>
    </div>
  </Page>
);

export default IndexPage;
