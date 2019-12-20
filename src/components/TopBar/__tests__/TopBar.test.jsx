/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import TopBar from '../TopBar';

describe('components/TopBar', () => {
  it('simple test', () => {
    const dom = mount(withTheme(<TopBar />));
    expect(dom.exists()).toBeTruthy();
  });

  // it('simple snapshot test', () => {
  //   const dom = mount(<Footer />);
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
