/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Layout from '../Layout';

const findById = (dom, testid) => dom.find(`[data-testid="${testid}"]`);

describe('components/Layout', () => {
  it('render responsive layout', () => {
    const dom = mount(withTheme(<Layout />));
    expect(dom.exists()).toBeTruthy();

    const leftNavigation = findById(dom, 'leftNavigation').at(0);
    expect(toJson(leftNavigation.html())).toMatchSnapshot();
  });

  // it('simple snapshot test', () => {
  //   const dom = mount(<Footer />);
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
