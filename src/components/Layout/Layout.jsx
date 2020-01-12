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

    @media screen and (max-width: ${theme.breakpoints[1]}) {
      flex-direction: column;
    }
  `),
  LeftNavigation: styled(Box)(({ theme }) => `
    /* default styles */
    width: 16rem;
    background-color: ${theme.colors.backgroundInverse};
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 0;
    flex-shrink: 0;

    /* define visibility */
    @media screen and (max-width: ${theme.breakpoints[1]}) {
      display: none;
    }

    /* define size */
    @media screen and (min-width: ${theme.breakpoints[2]}) {
      width: 20rem;
    }

    @media screen and (min-width: ${theme.breakpoints[3]}) {
      width: 22rem;
    }

    @media screen and (min-width: ${theme.breakpoints[4]}) {
      width: 26rem;
    }
  `),
  TopBarWrapper: styled(Box)(({ theme }) => `
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      display: none;
    }
  `),
  FooterWrapper: styled(Box)(({ theme }) => `
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      display: none;
    }
  `),
  Content: styled(Box)`
    justify-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: scroll;
  `,
};

const Layout = ({ children }) => (
  <Styles.Layout>
    <Styles.LeftNavigation padding={4} data-testid="leftNavigation">
      <Header />
      <Navigation />
      <Footer />
    </Styles.LeftNavigation>
    <Styles.TopBarWrapper data-testid="topBarWrapper">
      <TopBar menuContent={<p>Hello Menu</p>} />
    </Styles.TopBarWrapper>
    <Styles.Content padding={4}>
      {children}
      <Styles.FooterWrapper data-testid="footerWrapper">
        <Footer />
      </Styles.FooterWrapper>
    </Styles.Content>
  </Styles.Layout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
