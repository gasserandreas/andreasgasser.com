/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import Navigation from '../Navigation';

describe('components/Navigation', () => {
  it('simple test', () => {
    const dom = mount(withTheme(<Navigation />));
    expect(dom.exists()).toBeTruthy();
  });

  // it('simple snapshot test', () => {
  //   const dom = mount(<Footer />);
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
