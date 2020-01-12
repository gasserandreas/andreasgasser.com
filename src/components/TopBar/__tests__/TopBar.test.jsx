/* global withTheme, Event, document window */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { render, fireEvent, act } from '@testing-library/react';

import TopBar from '../TopBar';

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

  beforeAll(() => {
    global.open = jest.fn();
  });

  afterAll(() => {
    global.open.mockRestore();
  });

  it('should render default TopBar', async () => {
    const { getByTestId, findByTestId } = render(withTheme(<TopBar menuContent={menuContent} />));

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

  it('should enable dense mode after long scroll', (done) => {
    window.scrollY = 0;

    const dom = mount(withTheme(<TopBar menuContent={menuContent} />));
    expect(dom.exists()).toBeTruthy();

    expect(toJson(dom)).toMatchSnapshot();

    act(() => {
      // update scrollY position
      window.scrollY = 100;

      // fire custom event
      const newEvent = new Event('scroll');
      document.dispatchEvent(newEvent);

      // check for changed styles in dense mode
      setTimeout(() => {
        expect(toJson(dom.update())).toMatchSnapshot();
        done();
      }, 500);
    });
  });
});
