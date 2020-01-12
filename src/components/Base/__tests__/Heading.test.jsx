/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Heading from '../Heading';

describe('components/Heading', () => {
  it('page Heading', () => {
    const dom = mount(withTheme(<Heading variant="page">Page Heading</Heading>));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('subPage Heading', () => {
    const dom = mount(withTheme(<Heading variant="subPage">Sub Page Heading</Heading>));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('section Heading', () => {
    const dom = mount(withTheme(<Heading variant="section">section Heading</Heading>));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
