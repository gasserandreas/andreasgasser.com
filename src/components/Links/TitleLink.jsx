import styled from 'styled-components';

import Link, { propTypes, defaultProps } from './Link';

const TitleLink = styled(Link)(({ theme }) => `
  color: ${theme.colors.text};
  font-weight: 900;
  display: inline-block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;

  &:hover {
    color: ${theme.colors.text};
    border-bottom: 2px solid ${theme.colors.text};
  }
`);

TitleLink.propTypes = {
  ...propTypes,
};

TitleLink.defaultProps = {
  ...defaultProps,
};

export default TitleLink;
