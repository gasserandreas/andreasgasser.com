/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import BaseIcon from '../BaseIcon';

describe('components/BaseIcon', () => {
  it('simple snapshot test for regular icons', () => {
    const dom = mount(withTheme(<BaseIcon icon={faCode} />));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('simple snapshot test for brand icons', () => {
    const dom = mount(withTheme(<BaseIcon icon={faReact} />));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
