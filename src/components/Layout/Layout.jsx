import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import TopBar from '../TopBar/TopBar';

const Styles = {
  Layout: styled(Flex)(({ theme }) => `
    height: 100%;
    flex-direction: row;

    @media screen and (max-width: ${theme.breakpoints[2]}) {
      flex-direction: column;
      text-align: center;
    }
  `),
  LeftNavigation: styled(Box)(({ theme }) => `
    /* default styles */
    width: 18rem;
    background-color: ${theme.colors.backgroundInverse};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 0;
    flex-shrink: 0;

    /* define visibility */
    @media screen and (max-width: ${theme.breakpoints[2]}) {
      display: none;
    }

    @media screen and (min-width: ${theme.breakpoints[3]}) {
      width: 20rem;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      width: 22rem;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      width: 24rem;
    }
  `),
  TopBarWrapper: styled(Box)(({ theme }) => `
    @media screen and (min-width: ${theme.breakpoints[2]}) {
      display: none;
    }
  `),
  FooterWrapper: styled(Box)(({ theme }) => `
    @media screen and (min-width: ${theme.breakpoints[2]}) {
      display: none;
    }
  `),
  Content: styled(Box)`
    justify-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: scroll;
  `,
  Header: styled(Header)`
    flex-grow: 0;
    flex-shrink: 0;
  `,
  Navigation: styled(Navigation)`
    flex-grow: 1;
    flex-shrink: 1;
  `,
  Footer: styled(Footer)`
    flex-grow: 0;
    flex-shrink: 0;
  `,
  ContentWrapper: styled(Box)(({ theme }) => `
    padding: 2rem 3.25rem;

    @media screen and (min-width: ${theme.breakpoints[1]}) {
      padding: 4rem;
    }

    @media screen and (min-width: ${theme.breakpoints[3]}) {
      padding-left: 8rem;
      padding-right: 8rem;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      padding-left: 9rem;
      padding-right: 9rem;
    }
  `),
};

const Layout = ({ children }) => {
  const contentRef = React.useRef();

  return (
    <Styles.Layout>
      <Styles.LeftNavigation padding={4} data-testid="leftNavigation">
        <Styles.Header />
        <Styles.Navigation />
        <Styles.Footer />
      </Styles.LeftNavigation>
      <Styles.TopBarWrapper data-testid="topBarWrapper">
        <TopBar menuContent={<Navigation />} contentRef={contentRef} />
      </Styles.TopBarWrapper>
      <Styles.Content ref={contentRef}>
        <Styles.ContentWrapper>
          {children}
        </Styles.ContentWrapper>
        <Styles.FooterWrapper data-testid="footerWrapper">
          <Footer />
        </Styles.FooterWrapper>
      </Styles.Content>
    </Styles.Layout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
