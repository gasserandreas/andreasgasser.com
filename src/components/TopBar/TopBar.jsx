/* global document, window */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

import FullSizeMenu from './FullSizeMenu';
import Text from '../Base/Text';

// constant definitions
const TRANSITION_TIME = '0.5s';
export const TOP_BAR_FULL_HEIGHT = 64;
export const TOP_BAR_DENSED_HEIGHT = 48;

function isDensed() {
  return window.scrollY > TOP_BAR_FULL_HEIGHT;
}

function getBackgroundStyles(theme, show) {
  return show ? `
    background-color: ${theme.colors.backgroundInverse};
  ` : '';
}

function getBoxShadows() {
  return isDensed() ? `
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 0px;
  ` : '';
}

function getEmailLink() {
  return `mailto:${process.env.GATSBY_CONTACT_EMAIL}?subject=Question from my website`;
}

const Styles = {
  TopBar: styled(Box)(({ theme, height, showBackground }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 101;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem;

    transition: background-color ${TRANSITION_TIME} ease,
                height ${TRANSITION_TIME} ease;
                box-shadow ${TRANSITION_TIME} ease;
                padding ${TRANSITION_TIME} ease;

    height: ${height}px;
    ${getBackgroundStyles(theme, showBackground)}
    ${getBoxShadows()}
  `),
  TopBarText: styled(Text)(({ theme }) => `
    color: ${theme.colors.textHighlighed};
    text-transform: uppercase;
    line-height: 1.8rem;

    &:hover {
      cursor: pointer;
      color: ${theme.colors.text};
      border-bottom: 2px solid ${theme.colors.textHover};
    }
  `),
};

const TopBar = ({ menuContent }) => {
  let scrollListener;

  const [openMenu, setOpenMenu] = useState(false);
  const [height, setHeight] = useState(TOP_BAR_FULL_HEIGHT);

  const handleMenuClick = () => {
    if (!openMenu) {
      window.scrollY = '0px';
      setHeight(TOP_BAR_FULL_HEIGHT);
    }
    setOpenMenu((prev) => !prev);
  };

  const handleSetHeight = (newHeight) => {
    if (newHeight !== height) {
      setHeight(newHeight);
    }
  };

  // scroll function
  const onScroll = () => {
    if (isDensed()) {
      // enable dense mode
      handleSetHeight(TOP_BAR_DENSED_HEIGHT);
    } else {
      // enable full size mode
      handleSetHeight(TOP_BAR_FULL_HEIGHT);
    }
  };

  useEffect(() => {
    scrollListener = document.addEventListener('scroll', onScroll);

    // default call
    onScroll();

    return () => {
      document.removeEventListener(scrollListener, onScroll);
    };
  });

  return (
    <>
      <FullSizeMenu
        show={openMenu}
        top={TOP_BAR_FULL_HEIGHT}
      >
        {menuContent}
      </FullSizeMenu>
      <Styles.TopBar height={height} showBackground={openMenu || isDensed()}>
        <Styles.TopBarText
          onClick={handleMenuClick}
          data-testid="topbar-menu-item"
        >
          Menu
        </Styles.TopBarText>
        <Styles.TopBarText
          onClick={() => window.open(getEmailLink())}
          data-testid="topbar-mail-item"
        >
          Email
        </Styles.TopBarText>
      </Styles.TopBar>
    </>
  );
};

TopBar.propTypes = {
  menuContent: PropTypes.node.isRequired,
};

TopBar.defaultProps = {};

export default TopBar;
