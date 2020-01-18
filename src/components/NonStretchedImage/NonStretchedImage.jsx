import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const NonStretchedImage = (props) => {
  const { fluid, style } = props;
  let normalizedProps = props;
  if (fluid && fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(style || {}),
        maxWidth: fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    };
  }

  return <Img {...normalizedProps} />;
};

NonStretchedImage.propTypes = {
  fluid: PropTypes.shape({
    presentationWidth: PropTypes.string,
  }).isRequired,
  style: PropTypes.shape({}),
};

NonStretchedImage.defaultProps = {
  style: null,
};

export default NonStretchedImage;
