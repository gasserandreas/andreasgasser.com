import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../Theme/GlobalStyles';
import ThemeProvider from '../Theme/ThemeProvider';

const Styled = {
  Wrapper: styled(Box)(({ theme }) => `
    display: flex;
    flex-direction: column
    flex-wrap: nowrap;
    height: 100%;
    min-width: 100%;
    text-align: center;
    background-color: ${theme.colors.background};
  `),
  Content: styled(Box)`
    margin: 0 auto;
    flex-grow: 1;
    flex-shrink: 1;
  `,
  Footer: styled(Footer)`
    flex-shrink: 0;
    flex-grow: 0;
    padding: 1rem;
  `,
};

// simple layout component
export const Layout = ({ children, data }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Styled.Wrapper>
      {/* Header */}
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* Main content */}
      <Styled.Content>
        {children}
      </Styled.Content>
      <Styled.Footer />
    </Styled.Wrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};

Layout.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
      },
    },
  },
};

// layout with static data
const ConnectedLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout staticData={data}>{children}</Layout>
  );
};

ConnectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConnectedLayout;
