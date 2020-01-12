import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = {
  FullSizeMenu: styled.div(({ theme, show, top }) => `
  position: fixed;
  top: ${top}px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: ${theme.colors.backgroundInverse};
  z-index: 100;
  display: ${show ? 'block' : 'none'}
`),
};

const FullSizeMenu = ({ show, top }) => (
  <Styles.FullSizeMenu show={show} top={top}>
    <p>Content</p>
  </Styles.FullSizeMenu>
);

FullSizeMenu.propTypes = {
  show: PropTypes.bool,
  top: PropTypes.number.isRequired,
};

FullSizeMenu.defaultProps = {
  show: false,
};

export default FullSizeMenu;
