/* global withTheme */
import React from 'react';
import { render } from '@testing-library/react';

import ThemeRenderer from '../ThemeRenderer';

describe('components/Theme/ThemeRenderer', () => {
  it('should render Theme', () => {
    render(withTheme(<ThemeRenderer />));
  });
});
