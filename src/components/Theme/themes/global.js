/* eslint-disable prefer-destructuring */
import rebass from '@rebass/preset';

const breakpoints = ['320px', '540px', '720px', '960px', '1140px', '1400px'];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export default ({ colors }) => ({
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
      fontSize: 0,
      color: colors.text,
    },
    bold: {
      fontWeight: '900',
      color: colors.text,
    },
    default: {
      color: colors.text,
    },
    muted: {
      color: colors.muted,
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
      color: colors.muted,
    },
    section: {
      lineHeight: '1.4em',
      fontSize: 3,
    },
  },
});
