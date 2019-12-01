import React from 'react';
import { Switch } from '@rebass/forms';
import styled from 'styled-components';

import { ThemeSwitchContext } from './ThemeProvider';
import { Themes } from './useDarkMode';

const Styles = {
  Switch: styled(Switch)((props) => {
    const { theme, checked } = props; // eslint-disable-line no-unused-vars
    return `

    `;
  }),
};

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = React.useContext(ThemeSwitchContext);

  const handleOnClick = () => {
    toggleTheme();
  };

  return (
    <Styles.Switch
      checked={theme === Themes.dark}
      onClick={handleOnClick}
    />
  );
};

export default ThemeSwitcher;
