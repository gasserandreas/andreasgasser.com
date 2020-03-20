/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Field from '../Field';

describe('components/Field', () => {
  const getProps = () => ({
    inline: false,
    id: 'id',
    label: 'label',
    error: jest.fn(),
    children: <div id="child">children</div>,
  });

  it('it should render', () => {
    const props = getProps();
    const dom = mount(withTheme(<Field {...props} />));
    expect(dom).toBeTruthy();

    // should render child
    expect(dom.find('#child')).toBeTruthy();

    // should display label
    expect(dom.text().includes(props.label)).toBeTruthy();

    // check snapshot
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('should render error field if error is set', () => {
    const props = {
      ...getProps(),
      error: 'error',
    };

    const dom = mount(withTheme(<Field {...props} />));
    expect(dom).toBeTruthy();

    // should display label
    expect(dom.text().includes(props.error)).toBeTruthy();

    // check snapshot
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('should not render label if not set', () => {
    const props = {
      ...getProps(),
      label: null,
    };

    const dom = mount(withTheme(<Field {...props} />));
    expect(dom).toBeTruthy();

    // check snapshot
    expect(toJson(dom)).toMatchSnapshot();
  });
});
