/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from '../Input';

describe('components/Input', () => {
  it('should render', () => {
    const dom = mount(withTheme(<Input />));

    expect(dom.exists()).toBeTruthy();

    expect(toJson(dom)).toMatchSnapshot();
  });
});
