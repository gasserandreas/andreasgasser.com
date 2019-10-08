import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => <span>{siteTitle}</span>;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
