import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

import { GitHubIcon, LinkedInIcon } from '../Icons/SocialIcon';
import Text from '../Base/Text';
import Heading from '../Base/Heading';
import Link from '../Links/Link';

import * as Paths from '../utils/Paths';

const Styles = {
  Footer: styled(Box)(({ theme }) => `
    @media screen and (max-width: ${theme.breakpoints[2]}) {
      background-color: ${theme.colors.backgroundInverse};
      padding: 4rem 2rem;
    }
  `),
  Heading: styled(Heading)(({ theme }) => `
    font-size: 1.4rem;
    margin-bottom: 2rem;
    display none;
    color: ${theme.colors.text};
    @media screen and (max-width: ${theme.breakpoints[2]}) {
      display block;
    }
  `),
  Text: styled(Text)(({ theme }) => `
    color: ${theme.colors.muted};
    font-size: 0.9rem;
    line-height: 1.375rem;
  `),
  Link: styled(Link)(({ theme }) => `
    font-weight: 900;
    text-transform: none;
    text-decoration: underline;

    @media screen and (max-width: ${theme.breakpoints[2]}) {
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
    }
  `),
  SocialMediaWrapper: styled.div(({ theme }) => `
    margin: 0.5rem 0;
    color: ${theme.colors.text};

    a {
      margin-right: 0.5rem;
    }

    @media screen and (max-width: ${theme.breakpoints[2]}) {
      a {
        margin: 0 0.5rem;
      }
    }
  `),
};

const Footer = () => (
  <Styles.Footer as="footer">
    <Styles.Heading variant="section">Want to hear more?</Styles.Heading>
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
  </Styles.Footer>
);

export default Footer;
