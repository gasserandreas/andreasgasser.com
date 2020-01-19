/* global withTheme, renderWithRouter */
import React from 'react';
import Navigation, { LINKS } from '../Navigation';

describe('components/Navigation', () => {
  it('should render Navigation with all links', () => {
    const { getByText } = renderWithRouter(withTheme(<Navigation />));

    // check all links
    Object.entries(LINKS).forEach(([text, path]) => {
      const item = getByText(text);
      expect(item).toBeTruthy();
      expect(item.closest('a')).toHaveAttribute('href', path);
    });
  });

  it('should render active link', () => {
    // we use the second element to test
    const [text, path] = Object.entries(LINKS)[1];

    const { getAllByText } = renderWithRouter(withTheme(<Navigation />), { route: path });

    const links = getAllByText(text);
    // we have to query second element here
    const link = links[1];

    expect(link).toBeTruthy();
    expect(link.closest('a')).toHaveAttribute('active', 'true');
  });
});
