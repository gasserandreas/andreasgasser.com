/* global withTheme */
import React from 'react';
import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import { Layout } from '../Layout';

describe('components/Layout', () => {
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

  const mountLayout = (props = {}) => mount(
    withTheme(
      <Layout
        {...defaultProps}
        {...props}
      />,
    ),
  );

  it('simple test', () => {
    const dom = mountLayout();
    expect(dom.exists()).toBeTruthy();
  });

  // it('simple snapshot test', () => {
  //   const dom = mountLayout();
  //   expect(toJson(dom)).toMatchSnapshot();
  // });
});
