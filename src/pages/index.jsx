/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import Text from '../components/Base/Text';
import Heading from '../components/Base/Heading';

import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const Styles = {
  Wrapper: styled(Box)(({ theme }) => `
    padding: 3.5rem 2rem;

    @media screen and (min-width: ${theme.breakpoints[3]}) {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  `),
  WelcomeText: styled(Text)(({ theme }) => `
    color: ${theme.colors.textInverse};
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
    margin: 1.5rem 0;
  `),
  Heading: styled(Heading)(() => `
    line-height: 2.75rem;
  `),
  Description: styled(Heading)(() => ''),
};

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <Layout>
      <Styles.Wrapper>
        <Styles.WelcomeText>
          Hi, I
          {'\''}
          m
          {' '}
          Andreas
        </Styles.WelcomeText>
        <Styles.Heading>
          I am a Senior Software Engineer with a strong background in Software Engineering and a passion for user-centric software design. 
        </Styles.Heading>
        <Styles.Description variant="subPage">
          Currently working closely with usability designers, data scientists, and cloud engineers to transform the application landscape of a global medical company. 
        </Styles.Description>
      </Styles.Wrapper>
    </Layout>
  </Page>
);

export default IndexPage;
