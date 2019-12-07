/* global window */
import { useEffect, useState } from 'react';

export const Themes = {
  light: 'LIGHT',
  dark: 'DARK',
};

export const useDarkMode = (isDark = null) => {
  const [theme, setTheme] = useState(isDark ? Themes.dark : Themes.light);
  const [isMounted, setMounted] = useState(isDark);

  // set mode
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  // exposed toggle method
  const toggleTheme = () => {
    if (theme === Themes.light) {
      setMode(Themes.dark);
    } else {
      setMode(Themes.light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    // check phone browser settings
    const userPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // did user prefer dark mode and did not select page theme
    if ((userPreference || isDark) && !localTheme) {
      setMode(Themes.dark);
    } else if (localTheme) {
      // check and set theme
      setTheme(localTheme);
    } else {
      setMode(Themes.light);
    }
    setMounted(true);
  }, []);

  return [theme, toggleTheme, isMounted];
};

export default useDarkMode;
