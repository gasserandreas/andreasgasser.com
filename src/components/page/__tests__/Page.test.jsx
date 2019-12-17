/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import { Page } from '../Page';

describe('components/Page', () => {
  // mocked data
  const data = {
    site: {
      siteMetadata: {
        title: 'test title',
      },
    },
  };

  const defaultProps = {
    data,
    children: 'content',
  };

  const mountPage = (props = {}) => mount(
    withTheme(
      <Page
        {...defaultProps}
        {...props}
      />,
    ),
  );

  it('simple test', () => {
    const dom = mountPage();
    expect(dom.exists()).toBeTruthy();
  });

  // it('simple snapshot test', () => {
  //   const dom = mountPage();
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
