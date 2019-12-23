import React from 'react';

import BaseIcon from './BaseIcon';
import { CodeIcon, ChartBarIcon } from './Icons';

export default {
  title: 'Icons',
  component: BaseIcon,
};

export const defaultFooter = () => {
  const icons = {
    'Bar Chart': <ChartBarIcon />,
    Code: <CodeIcon />,
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(icons).map(([name, component]) => (
          <tr>
            <td>{name}</td>
            <td>{component}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

defaultFooter.story = {
  name: 'default',
};
