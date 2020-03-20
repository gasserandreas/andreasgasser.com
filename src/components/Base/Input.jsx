import React from 'react';

import { Input as RInput } from '@rebass/forms/styled-components';
import styled from 'styled-components';

const Styles = {
  Input: styled(RInput)(({ theme }) => `
    background-color: none;
    border: none;
    border-bottom: 1.25px solid ${theme.colors.muted};
    padding: 0.25rem;
    font-size: 0.95rem;
    line-height: 1.75rem;
  `),
};

const Input = (props) => <Styles.Input {...props} />;

export default Input;
