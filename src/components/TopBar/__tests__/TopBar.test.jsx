/* global withTheme */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TopBar from '../TopBar';

jest.mock('../../hooks/useEventListener', () => ({
  __esModule: true, // this property makes it work
  default: jest.fn(),
}));

describe('components/TopBar', () => {
  const MENU_TEXT_TEST_ID = 'topbar-menu-item';
  const MAIL_TEXT_TEST_ID = 'topbar-mail-item';
  const MENU_TEST_ID = 'topbar-menu';

  const menuContentText = 'Menu';
  const menuContent = (
    <p data-testid={MENU_TEST_ID}>
      {menuContentText}
    </p>
  );

  const contentRef = <div>content</div>;

  beforeAll(() => {
    global.open = jest.fn();
  });

  afterAll(() => {
    global.open.mockRestore();
  });

  it('should render default TopBar', async () => {
    const { getByTestId, findByTestId } = render(
      withTheme(
        <TopBar menuContent={menuContent} contentRef={contentRef} />,
      ),
    );

    const menuItem = getByTestId(MENU_TEXT_TEST_ID);
    expect(menuItem).toHaveTextContent('Menu');

    const mailItem = getByTestId(MAIL_TEXT_TEST_ID);
    expect(mailItem).toHaveTextContent('Email');

    // test to open menu
    fireEvent.click(menuItem);
    const menu = await findByTestId(MENU_TEST_ID);

    expect(menu).toHaveTextContent(menuContentText);

    // check for mailto link
    fireEvent.click(mailItem);
    expect(global.open).toMatchSnapshot();
  });
});
