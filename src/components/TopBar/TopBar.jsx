/* global document, window */
import React, { useState, useEffect } from 'react';
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

const Styles = {
  TopBar: styled(Box)(({ theme, height, showBackground }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    transition: background-color ${TRANSITION_TIME} ease,
                height ${TRANSITION_TIME} ease;
                box-shadow ${TRANSITION_TIME} ease;
                padding ${TRANSITION_TIME} ease;

    height: ${height}px;
    ${getBackgroundStyles(theme, showBackground)}
    ${getBoxShadows()}
  `),
};

const TopBar = () => {
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

  useEffect(() => {
    scrollListener = document.addEventListener('scroll', () => {
      if (isDensed()) {
        // enable dense mode
        setHeight(TOP_BAR_DENSED_HEIGHT);
      } else {
        // enable full size mode
        setHeight(TOP_BAR_FULL_HEIGHT);
      }
    });
  }, () => {
    document.removeEventListener(scrollListener);
  });

  return (
    <>
      <FullSizeMenu show={openMenu} top={TOP_BAR_FULL_HEIGHT} />
      <Styles.TopBar height={height} showBackground={openMenu || isDensed()}>
        <Text onClick={handleMenuClick}>Menu</Text>
      </Styles.TopBar>
    </>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {
  siteTitle: '',
};

export default TopBar;
