import preset from '@rebass/preset';

const { colors } = preset;

export default {
  colors: {
    ...colors,
    // text colors
    text: '#333',
    textHover: '#7e7e7e',
    textHighlighed: '#565656',
    textInverse: '#eee',
    muted: '#c9c9c9',
    // background colors
    background: '#c3c3c3',
    backgroundInverse: '#fff',
  },
};
