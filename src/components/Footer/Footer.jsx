import React from 'react';
import { Box } from 'rebass/styled-components';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { GitHubIcon, LinkedInIcon } from '../Icons/SocialIcon';
import Text from '../Base/Text';

import * as Paths from '../utils/Paths';

const Styles = {
  Text: styled(Text)(({ theme }) => `
    color: ${theme.colors.muted};
    font-size: 0.9rem;
  `),
  Link: styled(Link)(({ theme }) => `
    color: ${theme.colors.text};
    font-weight: 900;

    &:hover {
      color: ${theme.colors.textHover};
    }
  `),
  SocialMediaWrapper: styled.div(({ theme }) => `
    margin: 0.25rem 0;
    color: ${theme.colors.text};

    a {
      margin-right: 0.5rem;
    }
  `),
};

const Footer = () => (
  <Box as="footer">
    <Styles.Text>
      Would you like to know more or start casual chat
      {' - '}
      <Styles.Link to={Paths.CONTACT}>drop me a message</Styles.Link>
      .
    </Styles.Text>
    <Styles.SocialMediaWrapper>
      <GitHubIcon />
      <LinkedInIcon />
    </Styles.SocialMediaWrapper>
  </Box>
);

export default Footer;
