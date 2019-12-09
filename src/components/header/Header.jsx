import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';

const Header = ({ siteTitle }) => <Box>{siteTitle}</Box>;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
