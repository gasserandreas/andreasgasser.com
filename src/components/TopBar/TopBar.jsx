// /* global window */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import FullSizeMenu from './FullSizeMenu';
import Text from '../Base/Text';

import * as Paths from '../utils/Paths';

import useEventListener from '../hooks/useEventListener';

// constant definitions
const TRANSITION_TIME = '0.5s';
export const TOP_BAR_FULL_HEIGHT = 64;
export const TOP_BAR_DENSED_HEIGHT = 48;

function getBackgroundStyles(theme, show) {
  return show ? `
    background-color: ${theme.colors.backgroundInverse};
  ` : '';
}

function getBoxShadows(showShadow) {
  return showShadow ? `
    box-shadow: rgba(0,0,0,0.15) 2px 1px 2px;
  ` : '';
}

const Styles = {
  TopBar: styled(Box)(({
    theme,
    height,
    showBackground,
    showShadow,
  }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 101;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    transition: background-color ${TRANSITION_TIME} ease,
                height ${TRANSITION_TIME} ease;
                box-shadow ${TRANSITION_TIME} ease;
                padding ${TRANSITION_TIME} ease;

    height: ${height}px;
    ${getBackgroundStyles(theme, showBackground)}
    ${getBoxShadows(showShadow)}
  `),
  TopBarText: styled(Text)(({ theme }) => `
    color: ${theme.colors.textHighlighed};
    text-transform: uppercase;
    line-height: 1.8rem;
    font-weight: 900;
    padding-bottom: 0.125rem;

    &:hover {
      cursor: pointer;
      color: ${theme.colors.text};
      border-bottom: 0.125rem solid ${theme.colors.text};
      padding-bottom: 0;
    }
  `),
};

const TopBar = ({ menuContent, contentRef }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [height, setHeight] = useState(TOP_BAR_FULL_HEIGHT);
  const [isDensed, setIsDensed] = useState(false);

  const handleMenuClick = () => {
    if (!openMenu) {
      setOpenMenu(true);

      setHeight(TOP_BAR_FULL_HEIGHT);
    } else {
      setOpenMenu(false);

      if (isDensed) {
        setHeight(TOP_BAR_DENSED_HEIGHT);
      } else {
        setHeight(TOP_BAR_FULL_HEIGHT);
      }
    }
  };

  const handleNavigationClick = (path) => () => {
    // close menu
    if (openMenu) {
      setOpenMenu(false);
    }

    navigate(path);
  };

  const handleSetHeight = (newHeight) => {
    if (newHeight !== height) {
      setHeight(newHeight);
    }
  };

  // scroll function
  const onScroll = ({ target }) => {
    if (target.scrollTop > TOP_BAR_FULL_HEIGHT) {
      // enable dense mode
      handleSetHeight(TOP_BAR_DENSED_HEIGHT);
      setIsDensed(true);
    } else {
      // enable full size mode
      handleSetHeight(TOP_BAR_FULL_HEIGHT);
      setIsDensed(false);
    }
  };

  useEventListener(contentRef, 'scroll', onScroll);

  return (
    <>
      <FullSizeMenu
        show={openMenu}
        top={TOP_BAR_FULL_HEIGHT}
      >
        {menuContent}
      </FullSizeMenu>
      <Styles.TopBar height={height} showBackground={openMenu || isDensed} showShadow={!openMenu && isDensed}>
        <Styles.TopBarText
          onClick={handleMenuClick}
          data-testid="topbar-menu-item"
        >
          Menu
        </Styles.TopBarText>
        <Styles.TopBarText
          onClick={handleNavigationClick(Paths.INDEX)}
          data-testid="topbar-home-item"
        >
          Andreas Gasser
        </Styles.TopBarText>
        <Styles.TopBarText
          onClick={handleNavigationClick(Paths.CONTACT)}
          data-testid="topbar-mail-item"
        >
          Contact
        </Styles.TopBarText>
      </Styles.TopBar>
    </>
  );
};

TopBar.propTypes = {
  menuContent: PropTypes.node.isRequired,
  contentRef: PropTypes.node.isRequired,
};

TopBar.defaultProps = {};

export default TopBar;
