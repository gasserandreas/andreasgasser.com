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

const theme = {
  ...rebass,
  breakpoints,
};

export default theme;
