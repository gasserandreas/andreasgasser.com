import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Box } from 'rebass/styled-components';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyle from '../GlobalStyles';
import theme from '../Theme/theme';

const Styled = {
  Wrapper: styled(Box)`
    height: 100%;
    min-width: 100%;
    text-align: center;
  `,
  Content: styled(Box)`
    margin: 0 auto;

    main {
      margin: 2rem 0;
    }
  `,
};

// simple layout component
export const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Styled.Wrapper>
      {/* Header */}
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* Main content */}
      <Styled.Content>
        <main>{children}</main>
      </Styled.Content>
      <Footer />
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
