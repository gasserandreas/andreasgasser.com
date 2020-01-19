import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import BaseIcon from './BaseIcon';
import Link from '../Links/Link';

const Styles = {
  Link: styled(Link)(({ theme }) => `
    color: ${theme.colors.text};

    &:hover {
      color: ${theme.colors.textHover};
    }
  `),
};

/**
 * Base component implementation
 */
const SocialIcon = ({ icon, link, ...props }) => (
  <Styles.Link to={link} external rel="noopener noreferrer" {...props}>
    <BaseIcon icon={icon} />
  </Styles.Link>
);

SocialIcon.propTypes = {
  icon: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  link: PropTypes.string.isRequired,
};

/**
 * Social icon exports
 */
export const GitHubIcon = () => (
  <SocialIcon
    icon={faGithub}
    link="https://github.com/gasserandreas"
    alt="GitHub User link"
  />
);

export const LinkedInIcon = () => (
  <SocialIcon
    icon={faLinkedin}
    link="https://linkedin.com/in/gasserandreas"
    alt="Linked link"
  />
);
