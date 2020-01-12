import React from 'react';

import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import ThemeProvider, { useTheme } from '../ThemeProvider';

describe('components/Theme/ThemeProvider', () => {
  it('should handle theme in context', () => {
    const hook = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>, // eslint-disable-line react/prop-types
    });

    expect(hook.result.current).not.toEqual(null);
  });

  it('should render element', async () => {
    const testId = 'provider-child';
    const child = <p data-testid={testId}>test child</p>;

    const dom = render(<ThemeProvider>{child}</ThemeProvider>);
    expect(dom.getByTestId(testId)).toBeTruthy();
  });
});
