/* eslint-disable prefer-destructuring */
import rebass from '@rebass/preset';

const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const breakpoints = ['320px', '540px', '720px', '960px', '1140px', '1400px'];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

const theme = {
  ...rebass,
  fonts: {
    body: 'Open Sans, Helvetica Neue, Helvetica, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints,
  text: {
    small: {
      'font-size': 1,
    },
    bold: {
      'font-weight': '900',
    },
    page: {
      fontSize: 4,
      letterSpacing: '-0.04em',
      wordSpacing: '-0.08em',
      lineHeight: '1.4em',
    },
    subPage: {
      lineHeight: '1.6em',
      fontSize: 3,
    },
    section: {
      lineHeight: '1.4em',
      fontSize: 3,
    },
  },
};

export default theme;
