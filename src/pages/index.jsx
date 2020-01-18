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
  Wrapper: styled(Box)`
    padding: 2rem;
  `,
  WelcomeText: styled(Text)(({ theme }) => `
    color: ${theme.colors.textInverse};
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
    margin: 1.5rem 0;
  `),
  Heading: styled(Heading)(({ theme }) => `
    color: ${theme.colors.text};
    letter-spacing: 1.15px;
    font-weight: 600;
    font-size: 1.90rem;
    margin: 1.5rem 0;
    line-height: 2.75rem;
  `),
  Description: styled(Text)(({ theme }) => `
    color: ${theme.colors.muted}
    font-size: 1.25rem;
    letter-spacing: 1px;
    line-height: 2rem;
  `),
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
        <Styles.Description>
          {/* I am a Senior Software Engineer with a strong background in Software Engineering and a passion for user-centric software design.  */}
          Currently working closely with usability designers, data scientists, and cloud engineers to transform the application landscape of a global medical company. 
        </Styles.Description>
      </Styles.Wrapper>
    </Layout>
  </Page>
);

export default IndexPage;
