import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = {
  FullSizeMenu: styled.div(({ theme, show, top }) => `
  position: fixed;
  // top: ${top}px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: ${theme.colors.backgroundInverse};
  z-index: 100;
  display: ${show ? 'flex' : 'none'}
  align-items: center;
  justify-content: center;
`),
};

const FullSizeMenu = ({ show, top, children }) => (
  <Styles.FullSizeMenu show={show} top={top}>
    {children}
  </Styles.FullSizeMenu>
);

FullSizeMenu.propTypes = {
  show: PropTypes.bool,
  top: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

FullSizeMenu.defaultProps = {
  show: false,
};

export default FullSizeMenu;
