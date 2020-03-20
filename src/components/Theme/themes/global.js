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

const defaultFontSize = [1, 1, 1, 2, 2, 2];
const headerMaxWidth = '32rem';

// console.log(rebass);

// console.log(rebass.buttons.outline);

export default ({ colors, buttons, radii }) => ({
  ...rebass,
  colors,
  radii: {
    ...radii,
    default: '2px',
  },
  fonts: {
    body: 'Open Sans, Helvetica Neue, Helvetica, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 16, 20, 24, 28, 32, 40, 48, 56, 64],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints,
  text: {
    small: {
      fontSize: [0, 0, 0, 1, 1, 1],
      color: colors.text,
    },
    bold: {
      fontSize: defaultFontSize,
      fontWeight: '900',
      color: colors.text,
    },
    default: {
      fontSize: defaultFontSize,
      color: colors.text,
    },
    muted: {
      fontSize: defaultFontSize,
      color: colors.muted,
    },
    page: {
      fontSize: [4, 4, 4, 5, 5, 5],
      letterSpacing: '0.075rem',
      wordSpacing: '-0.08em',
      lineHeight: '2.75rem',
      color: colors.text,
      fontWeight: 600,
      margin: '2rem 0 2.5rem',
      maxWidth: headerMaxWidth,
    },
    subPage: {
      lineHeight: '2.2rem',
      letterSpacing: '0.0625rem',
      fontSize: [2, 2, 2, 3, 3, 3],
      color: colors.muted,
      marginBottom: 2,
      fontWeight: 500,
      margin: '1.25rem 0 1.75rem',
      maxWidth: headerMaxWidth,
    },
    section: {
      lineHeight: '1.7rem',
      fontSize: defaultFontSize,
      // fontWeight: 500,
      color: colors.textInverse,
      fontWeight: 900,
      textTransform: 'uppercase',
      // fontSize: '1rem',
      letterSpacing: '2px',
      margin: '1.5rem 0',
    },
  },
  buttons: {
    ...buttons,
    outline: {
      fontWeight: 400,
      backgroundColor: 'inherit',
      color: 'text',
      textTransform: 'uppercase',
      border: '1px solid #000',
      borderColor: 'text',
      fontSize: '0.95rem',
      height: '2.5rem',
      padding: '0rem 0.5rem',
      '&:hover': {
        backgroundColor: 'text',
        color: 'textInverse',
        cursor: 'pointer',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'inherit',
        color: 'text',
      },
    },
    link: {
      fontWeight: 400,
      textTransform: 'uppercase',
      color: 'text',
      backgroundColor: 'inherit',
      border: 'none',
      fontSize: '0.95rem',
      height: '2.5rem',
      padding: '0rem 0.5rem',
      '&:hover': {
        color: 'muted',
        cursor: 'pointer',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'inherit',
        color: 'text',
      },
    },
  },
});
