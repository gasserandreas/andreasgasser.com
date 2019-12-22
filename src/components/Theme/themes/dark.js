const colors = {
  ...global.colors,
  // text colors
  text: '#e9e9e9',
  textHover: '#b3b3b3',
  textHighlighed: '#f9f9f9',
  textInverse: '#9e9e9e',
  muted: '#808080',
  // background colors
  background: '#9a9a9a',
  backgroundInverse: '#323232',
};

export default (global) => ({
  ...global,
  colors,
  text: {
    small: {
      ...global.text.small,
      color: colors.text,
    },
    bold: {
      ...global.text.bold,
      color: colors.text,
    },
    default: {
      color: colors.text,
    },
    muted: {
      color: colors.muted,
    },
  },
});
