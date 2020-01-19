import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ThemeSwitcher from '../ThemeSwitcher';
import { ThemeSwitchContext } from '../ThemeProvider';

describe('components/Theme/ThemeSwitcher', () => {
  it('should render Theme', () => {
    const toggleTheme = jest.fn();

    // const switcher = render(withTheme(<ThemeSwitcher />));
    const dom = render(
      <ThemeSwitchContext.Provider value={[{}, toggleTheme]}>
        <ThemeSwitcher />
      </ThemeSwitchContext.Provider>,
    );

    // console.log(dom);
    const switcher = dom.getByTestId('theme-switcher');

    // test call
    expect(toggleTheme).not.toBeCalled();

    // simulate click and test again
    fireEvent.click(switcher);
    expect(toggleTheme).toBeCalled();
  });
});
