/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Text from '../Text';

describe('components/Text', () => {
  it('small Text', () => {
    const dom = mount(withTheme(<Text variant="small">Small Text</Text>));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('bold Text', () => {
    const dom = mount(withTheme(<Text variant="bold">Bold Text</Text>));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('default Text', () => {
    const dom = mount(withTheme(<Text variant="default">Default Text</Text>));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('muted Text', () => {
    const dom = mount(withTheme(<Text variant="muted">Muted Text</Text>));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
