import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import GlobalStyles from '../Theme/GlobalStyles';
import ThemeProvider from '../Theme/ThemeProvider';

const Styled = {
  Wrapper: styled.div(({ theme }) => `
    height: 100%;
    overflow: hidden;
    background-color: ${theme.colors.background};
  `),
  Content: styled(Box)`
    margin: 0 auto;
    flex-grow: 1;
    flex-shrink: 1;
  `,
};

// simple Page component
// export const Page = ({ children, data }) => (
export const Page = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Styled.Wrapper>
      {/* Header */}
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {children}
    </Styled.Wrapper>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};

Page.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
      },
    },
  },
};

// Page with static data
const ConnectedPage = ({ children }) => {
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
    <Page staticData={data}>{children}</Page>
  );
};

ConnectedPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConnectedPage;
