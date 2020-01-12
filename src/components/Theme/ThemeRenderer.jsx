import React from 'react';
import { Box } from 'rebass/styled-components';

import { useTheme } from './ThemeProvider';

const ThemeRenderer = () => {
  const theme = useTheme();
  return (
    <Box>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </Box>
  );
};

export default ThemeRenderer;
