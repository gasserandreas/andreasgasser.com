/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from '../Link';

describe('components/Link', () => {
  const defaultProps = {
    to: 'https://www.google.com/',
    external: true,
    children: 'click me',
  };

  it('should render a tag with target new prop for external links', () => {
    const dom = mount(withTheme(<Link {...defaultProps} />));
    expect(dom.exists()).toBeTruthy();

    // should not pass Link props
    const props = dom.props();
    expect(props.to).toBeUndefined();

    expect(dom.getDOMNode()).toHaveProperty('target', '_blank');
    expect(dom.getDOMNode()).toHaveProperty('href', defaultProps.to);
  });

  it('simple snapshot test', () => {
    const dom = mount(withTheme(<Link {...defaultProps} />));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
