import React from 'react';
import { Flex } from 'rebass/styled-components';

import Skills from './Skills';

export default {
  title: 'Skills',
  component: Skills,
};

export const defaultSkills = () => (
  <Flex>
    <Skills
      title="Software Development"
      icon={null}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      {' '}
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      {' '}
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Skills>
  </Flex>
);

defaultSkills.story = {
  name: 'default',
};
