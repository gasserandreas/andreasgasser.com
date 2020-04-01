/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Textarea from '../Textarea';

describe('components/Textarea', () => {
  it('should render', () => {
    const dom = mount(withTheme(<Textarea />));

    expect(dom.exists()).toBeTruthy();

    expect(toJson(dom)).toMatchSnapshot();
  });

  it('should change textare row on focus, active or set value', () => {
    const dom = mount(withTheme(<Textarea />));

    const textarea = dom.find(Textarea);

    // check initial props
    const props = textarea.props();
    expect(props).toMatchSnapshot();
    expect(textarea).toMatchSnapshot();

    // set focus on textarea
    textarea.simulate('mouseEnter');
    expect(textarea).toMatchSnapshot();
  });

  it('should set height if value is set', () => {
    const value = 'hello you';
    const dom = mount(withTheme(<Textarea value={value} />));

    const textarea = dom.find(Textarea);
    expect(textarea.props().value).toEqual(value);

    expect(textarea).toMatchSnapshot();
  });
});
