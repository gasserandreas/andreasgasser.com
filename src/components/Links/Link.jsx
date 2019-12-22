import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link as GLink } from 'gatsby';

const getLinkStyles = ({ theme }) => `
  color: ${theme.colors.textHighlighed};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.textHover};
  }
`;

const Styles = {
  GLink: styled(GLink)((props) => `
    ${getLinkStyles(props)};
  `),
  ExternalLink: styled.a((props) => `
    ${getLinkStyles(props)};
  `),
};

const Link = ({
  children,
  to,
  external,
  ...props
}) => {
  if (external) {
    return (
      <Styles.ExternalLink
        href={to}
        target="_blank"
        {...props}
      >
        {children}
      </Styles.ExternalLink>
    );
  }

  return (
    <Styles.GLink
      to={to}
      {...props}
    >
      {children}
    </Styles.GLink>
  );
};

export const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export const defaultProps = {
  external: false,
};

Link.propTypes = propTypes;

Link.defaultProps = defaultProps;

export default Link;
