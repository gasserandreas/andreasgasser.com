/* global window */
import { renderHook, act } from '@testing-library/react-hooks';

import useDarkMode, { Themes } from '../useDarkMode';

describe('components/Theme/useDarkMode', () => {
  let localStorage;

  beforeAll(() => {
    localStorage = window.localStorage;

    // mock localStorage
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      writable: true,
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
      },
    });
  });

  afterEach(() => {
    window.localStorage.getItem.mockClear();
    window.localStorage.setItem.mockClear();

    if (window.matchMedia) {
      // reset mock if set previously
      window.matchMedia.mockReset();
    }
  });

  afterAll(() => {
    window.localStorage = localStorage;
  });

  it('should change theme on click', () => {
    const { result } = renderHook(() => useDarkMode());
    const [lightTheme, toggleTheme, isMounted] = result.current;

    expect(lightTheme).toEqual(Themes.light);
    expect(isMounted).toBeTruthy();
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', Themes.light);

    // change to dark theme
    act(() => {
      toggleTheme();
    });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(2, 'theme', Themes.dark);

    const [darkTheme, toggleTheme2] = result.current;
    expect(darkTheme).toEqual(Themes.dark);

    // change back to light theme
    act(() => {
      toggleTheme2();
    });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(3);
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(3, 'theme', Themes.light);

    const [lightTheme2] = result.current;
    expect(lightTheme2).toEqual(Themes.light);
  });

  it('should use dark mode if specified', () => {
    const { result } = renderHook(() => useDarkMode(true));
    const [lightTheme] = result.current;

    expect(lightTheme).toEqual(Themes.dark);
  });

  it('should use dark mode if preferred by browser', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => query === '(prefers-color-scheme: dark)');

    const { result } = renderHook(() => useDarkMode(true));
    const [lightTheme] = result.current;

    expect(lightTheme).toEqual(Themes.dark);
  });
});
