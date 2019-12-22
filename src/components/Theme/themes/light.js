const colors = {
  ...global.colors,
  // text colors
  text: '#595959',
  textHover: '#7e7e7e',
  textHighlighed: '#333',
  textInverse: '#eee',
  muted: '#808080',
  // background colors
  background: '#c3c3c3',
  backgroundInverse: '#fff',
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
