import React from 'react';

import BaseIcon from './BaseIcon';
import { CodeIcon, ChartBarIcon } from './Icons';
import { GitHubIcon, LinkedInIcon } from './SocialIcon';

/**
 * render util function
 */
function renderIconTable(icons) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{
            textAlign: 'left',
            width: '8rem',
          }}
          >
            Name
          </th>
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
}

export default {
  title: 'Icons',
  component: BaseIcon,
};

export const defaultIcon = () => {
  const icons = {
    'Bar Chart': <ChartBarIcon />,
    Code: <CodeIcon />,
  };

  return renderIconTable(icons);
};

defaultIcon.story = {
  name: 'default',
};

export const SocialIcons = () => {
  const icons = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
  };

  return renderIconTable(icons);
};
