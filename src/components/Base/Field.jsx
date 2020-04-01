import React from 'react';
import PropTypes from 'prop-types';

import { Label as RLabel } from '@rebass/forms/styled-components';
import { Box, Text } from 'rebass/styled-components';
import styled from 'styled-components';

const Styles = {
  FieldFeedback: styled(Text)(({ theme }) => `
    color: ${theme.colors.error};
    margin: 0.2rem 0.1rem;
    font-size: 1rem;
  `),
  FieldLabel: styled(RLabel)(({ theme }) => `
    color: ${theme.colors.text};
    font-size: 0.925rem;
    margin-bottom: 0.25rem;
    margin-left: 0.1rem;
    display: inline-block;
    text-transform: uppercase;
  `),
  Field: styled(Box)`
    margin: 0.75rem 0;
    text-align: left;

    ${(props) => (props.inline
    ? `
        flex-grow: 1;
        flex-shrink: 1;
      `
    : '')}
  `,
};

const Field = ({
  id, label, error, children, ...props
}) => (
  <Styles.Field {...props}>
    {label && <Styles.FieldLabel htmlFor={id}>{label}</Styles.FieldLabel>}
    {children}
    {error && <Styles.FieldFeedback>{error}</Styles.FieldFeedback>}
  </Styles.Field>
);

Field.propTypes = {
  inline: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

Field.defaultProps = {
  inline: false,
  error: undefined,
  id: undefined,
  label: null,
};

// eslint-disable-next-line
export const __testables__ = {
  FieldLabel: styled.FieldLabel,
  FieldFeedback: styled.FieldFeedback,
};

export default Field;
