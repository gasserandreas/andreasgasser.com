import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';

import TopBar from '../TopBar/TopBar';

const Header = ({ siteTitle }) => (
  <Box>
    <TopBar menuContent={<p>Hello Menu</p>} />
    {siteTitle}
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Header',
};

export default Header;
