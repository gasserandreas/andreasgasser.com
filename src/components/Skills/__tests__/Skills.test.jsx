/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Skills from '../Skills';

describe('components/Skills', () => {
  it('simple snapshot test', () => {
    const dom = mount(withTheme(<Skills title="Title">some content</Skills>));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
