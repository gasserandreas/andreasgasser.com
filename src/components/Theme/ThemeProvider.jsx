import React, {
  createContext,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import useDarkMode, { Themes } from './useDarkMode';

import light from './themes/light';
import dark from './themes/dark';
import global from './themes/global';

export const ThemeSwitchContext = createContext(null);

function getTheme(selectedTheme) {
  const theme = selectedTheme === Themes.light ? light : dark;
  return global(theme);
}

export function useTheme() {
  const context = useContext(ThemeSwitchContext);
  const [theme] = context;
  return getTheme(theme);
}

const CustomThemeProvider = ({ children, dark: isDark }) => {
  const [theme, toggleTheme, isMounted] = useDarkMode(isDark);

  const selectedTheme = useMemo(() => getTheme(theme), [theme]);

  // wait for theme being applied
  if (!isMounted) {
    return <div />;
  }

  return (
    <ThemeSwitchContext.Provider value={[theme, toggleTheme]}>
      <ThemeProvider theme={selectedTheme}>
        {children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
};

CustomThemeProvider.defaultProps = {
  dark: false,
};

export default CustomThemeProvider;
