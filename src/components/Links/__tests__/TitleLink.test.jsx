/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import TitleLink from '../TitleLink';

describe('components/TitleLink', () => {
  const defaultProps = {
    to: 'https://www.google.com/',
    external: true,
    children: 'click me',
  };

  it('simple snapshot test', () => {
    const dom = mount(withTheme(<TitleLink {...defaultProps} />));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
