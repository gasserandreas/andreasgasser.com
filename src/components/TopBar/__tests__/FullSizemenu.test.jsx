/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import FullSizeMenu from '../FullSizeMenu';

describe('components/TopBar', () => {
  it('simple styling test', () => {
    const dom = mount(withTheme(<FullSizeMenu>content</FullSizeMenu>));
    expect(dom.exists()).toBeTruthy();

    expect(toJson(dom)).toMatchSnapshot();
  });
});
