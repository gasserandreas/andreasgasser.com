import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Heading } from 'rebass/styled-components';

const Styles = {
  Skills: styled(Box)(({ theme }) => `
    color: ${theme.colors.muted}
  `),
  Title: styled(Heading)(({ theme }) => `
    margin-bottom: 1rem;
    color: ${theme.colors.text};
    text-transform: inherit;
    font-size: 1.2rem;
  `),
};

const Skills = ({ children, title, ...props }) => (
  <Styles.Skills {...props}>
    <Styles.Title variant="section">
      {title}
    </Styles.Title>
    {children}
  </Styles.Skills>
);

Skills.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Skills;
