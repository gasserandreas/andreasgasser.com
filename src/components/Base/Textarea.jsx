import React from 'react';
import PropTypes from 'prop-types';

import { Textarea as RTextarea } from '@rebass/forms/styled-components';
import styled from 'styled-components';

const Styles = {
  Textarea: styled(RTextarea)(({ theme, rowsProps }) => `
    background-color: inherit;
    border: none;
    border-bottom: 1.25px solid ${theme.colors.muted};
    padding: 0.25rem;
    font-size: 0.95rem;
    line-height: 1.75rem;
    resize: none;

    &:active,
    &:focus {
      height: auto;
      min-height: ${rowsProps}rem;
    }
  `),
};

const Textarea = ({ value, rows: rowsProps, ...rest }) => {
  const rows = value.length === 0 ? 1 : rowsProps;

  const newProps = {
    value,
    rows,
    rowsProps: rowsProps * 1.9,
    ...rest,
  };

  return <Styles.Textarea {...newProps} />;
};

Textarea.propTypes = {
  value: PropTypes.string,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  value: '',
  rows: 3,
};

export default Textarea;
