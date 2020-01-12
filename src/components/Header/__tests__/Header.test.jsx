/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../Header';

describe('components/Header', () => {
  it('simple test', () => {
    const dom = mount(withTheme(<Header />));
    expect(dom.exists()).toBeTruthy();
  });

  it('simple snapshot test', () => {
    const dom = mount(withTheme(<Header />));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
