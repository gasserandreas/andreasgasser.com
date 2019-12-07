import React from 'react';
import { Box } from 'rebass/styled-components';

const Footer = () => (
  <Box as="footer">
    ©
    {' '}
    {new Date().getFullYear()}
  </Box>
);

export default Footer;
