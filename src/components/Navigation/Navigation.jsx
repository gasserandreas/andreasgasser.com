import React from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';

import TitleLink from '../Links/TitleLink';
import * as Paths from '../utils/Paths';

const getActiveStyles = (theme, active) => {
  if (!active || active === 'false') {
    return '';
  }

  return `
    color: ${theme.colors.text};
  `;
};

const Styles = {
  List: styled.ul`
    list-style: none;
    padding: 0;
  `,
  ListItem: styled.li``,
  Link: styled(TitleLink)(({ theme, active }) => `
    display: inline-block;
    color: ${theme.colors.muted}
    margin: 0.5rem 0;

    ${getActiveStyles(theme, active)};
  `),
};

export const LINKS = {
  Home: Paths.INDEX,
  Contact: Paths.CONTACT,
};

const Navigation = () => (
  <Location>
    {({ location }) => {
      const activePath = location.pathname || '';
      return (
        <Styles.List>
          {Object.entries(LINKS).map(([key, value]) => (
            <Styles.ListItem key={`navigation-link-${key}`}>
              <Styles.Link
                active={(activePath === value).toString()}
                to={value}
              >
                {key}
              </Styles.Link>
            </Styles.ListItem>
          ))}
        </Styles.List>
      );
    }}
  </Location>
);

Navigation.propTypes = {};

Navigation.defaultProps = {
  siteTitle: '',
};

export default Navigation;
