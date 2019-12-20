import React from 'react';
import styled from 'styled-components';

import { Text, Heading } from 'rebass';

import Page from '../components/Page/Page';
import SEO from '../components/SEO/SEO';

const Styled = {
  Heading: styled.div`
    padding: 2rem;
  `,
  Title: styled(Heading)`
    text-transform: uppercase;
    margin: 2rem;
  `,
  SubTitle: styled(Text)`
    margin: 0;
    font-size: 1.6rem;
    font-weight: 300;
    color: #333;
  `,
};

const IndexPage = () => (
  <Page>
    <div style={{ textAlign: 'center' }}>
      <SEO title="Home" />
      <Styled.Heading>
        <Styled.Title
          fontSize={6}
          margin={4}
        >
          Hello you
          {' '}
        </Styled.Title>
        <Styled.SubTitle fontSize={4}>and welcome on my new page</Styled.SubTitle>
      </Styled.Heading>
      <Text margin={3}>
        I am currently working on a new version, please return later...
      </Text>
    </div>
  </Page>
);

export default IndexPage;
