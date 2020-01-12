/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { GitHubIcon, LinkedInIcon } from '../SocialIcon';

describe('components/SocialIcon', () => {
  it('simple snapshot test for regular icons', () => {
    const dom = mount(withTheme(<GitHubIcon />));
    expect(toJson(dom)).toMatchSnapshot();
  });

  it('simple snapshot test for brand icons', () => {
    const dom = mount(withTheme(<LinkedInIcon />));
    expect(toJson(dom)).toMatchSnapshot();
  });
});
