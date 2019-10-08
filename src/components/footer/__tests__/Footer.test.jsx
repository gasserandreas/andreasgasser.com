import React from 'react';
import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import Footer from '../Footer';

describe('components/Footer', () => {
  it('simple test', () => {
    const dom = mount(<Footer />);
    expect(dom.exists()).toBeTruthy();
  });

  // it('simple snapshot test', () => {
  //   const dom = mount(<Footer />);
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
