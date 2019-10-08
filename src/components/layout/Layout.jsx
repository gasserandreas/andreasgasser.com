import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Styled = {
  Wrapper: styled.div`
    height: 100%;
    min-width: 100%;
    text-align: center;
  `,
  Content: styled.div`
    margin: 0 auto;

    main {
      margin: 2rem 0;
    }
  `,
};

const Layout = ({ children }) => { // eslint-disable-line
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Styled.Wrapper>
        {/* Header */}
        <Header siteTitle="" />
        {/* Main content */}
        <Styled.Content>
          <main>{children}</main>
        </Styled.Content>
        <Footer />
      </Styled.Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
