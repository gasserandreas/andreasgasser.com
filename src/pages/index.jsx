import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

const Styled = {
  Heading: styled.div`
    padding: 2rem;
  `,
  Title: styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
    color: #333;
  `,
  SubTitle: styled.h2`
    margin: 0;
    font-size: 1.6rem;
    font-weight: 300;
    color: #333;
  `,
  Text: styled.p``,
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.Heading>
      <Styled.Title>
        Hello you
        {' '}
      </Styled.Title>
      <Styled.SubTitle>and welcome on my page</Styled.SubTitle>
    </Styled.Heading>
    <Styled.Text>
      [Test]: I am currently working on a new version, please return later...
    </Styled.Text>
  </Layout>
);

export default IndexPage;
