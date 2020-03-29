/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

import Heading from '../components/Base/Heading';
import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Skills from '../components/Skills/Skills';
import Link from '../components/Links/Link';

const Styles = {
  Services: styled(Flex)(() => `
    flex-wrap: wrap;
    justify-content: space-between;
  `),
  Skills: styled(Skills)(({ theme }) => `
    width: 100%;

    @media screen and (min-width: ${theme.breakpoints[2]}) {
      width: 48%;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      width: 20%;
    }
  `),
  Tools: styled(Box)``,
  ToolList: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
  `,
  ToolListItem: styled.li`
    margin-right: 0.25rem;
  `,
};

const services = [
  {
    title: 'Frontend Architect',
    content: 'As an expert in frontend development languages, I am well capable of designing modern and scalable web application architectures.',
  },
  {
    title: 'Software Engineering',
    content: 'With a strong software engineering background in various languages, I am well skilled to support engineering teams in their daily work.',
  },
  {
    title: 'Tech Lead',
    content: 'Working with other engineers and delegate work to deliver in time is a major part of my role as frontend tech lead.',
  },
  {
    title: 'UX advocate',
    content: 'Advocate and evangelize the importance of User Experience in software products is a key passion for me in my day to day job.',
  },
];

const tools = [
  {
    name: 'React',
    url: 'https://reactjs.org',
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org',
  },
  {
    name: 'GraphQL',
    url: 'https://graphql.org',
  },
  {
    name: 'styled-components',
    url: 'https://styled-components.com',
  },
  {
    name: 'GatsbyJS',
    url: 'https://www.gatsbyjs.org',
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io',
  },
  {
    name: 'EnzymeJS',
    url: 'https://airbnb.io/enzyme/',
  },
  {
    name: '(React) Testing Library',
    url: 'https://testing-library.com',
  },
  {
    name: 'NodeJS',
    url: 'https://nodejs.org/en/',
  },
  {
    name: 'AWS serverless tools',
    url: 'https://aws.amazon.com',
  },
  {
    name: 'Atlassian tool suite',
    url: 'https://www.atlassian.com/?tab=code-build-and-ship',
  },
  {
    name: 'Jenkins',
    url: 'https://jenkins.io',
  },
  {
    name: 'Visual Studio Code',
    url: 'https://code.visualstudio.com',
  },
];

const SkillsPage = () => (
  <Page>
    <SEO title="Contact" />
    <Layout>
      <Heading variant="section">
        Skills & services
      </Heading>
      <Heading>
        Working as a Senior Software Engineer and frontend architect with a true passion for user-centric software design.
      </Heading>
      <Heading variant="subPage">
        Equipped with skills to architect modern web applications, educate and support other engineers, evangelize great UX in software products and building bridges between engineers and business.
      </Heading>
      <Styles.Services mt="5">
        {services.map(({ title, content }) => (
          <Styles.Skills
            title={title}
          >
            {content}
          </Styles.Skills>
        ))}
      </Styles.Services>
      <Styles.Tools mt="5">
        <strong>Tools and frameworks I am working with:</strong>
        <Styles.ToolList>
          {tools.map(({ name, url }, i) => (
            <Styles.ToolListItem>
              <Link
                to={url}
                external
              >
                {name}
              </Link>
              {i !== tools.length - 1 && ','}
            </Styles.ToolListItem>
          ))}
        </Styles.ToolList>
      </Styles.Tools>
    </Layout>
  </Page>
);

export default SkillsPage;
