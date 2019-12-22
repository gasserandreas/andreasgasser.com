import React from 'react';
import styled from 'styled-components';

import { Text } from 'rebass/styled-components';

const StyledText = styled(Text)(({ theme }) => `
  color: ${theme.colors.text};
`);

export default (props) => (
  <StyledText color="text" {...props} />
);
