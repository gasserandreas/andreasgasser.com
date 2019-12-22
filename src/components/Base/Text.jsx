import React from 'react';
import PropTypes from 'prop-types';
import { Text as RText } from 'rebass/styled-components';

const Text = (props) => (
  <RText {...props} />
);

Text.propTypes = {
  variant: PropTypes.string,
};

Text.defaultProps = {
  variant: 'default',
};

export default Text;
