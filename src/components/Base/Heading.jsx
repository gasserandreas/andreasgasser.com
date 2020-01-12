import React from 'react';
import PropTypes from 'prop-types';
import { Heading as RHeading } from 'rebass/styled-components';

const Variants = {
  page: 'page',
  subPage: 'subPage',
  section: 'section',
};

const Heading = ({ variant, ...props }) => {
  let asProp;

  switch (variant) {
    case Variants.subPage:
      asProp = 'h2';
      break;
    case Variants.section:
      asProp = 'h3';
      break;
    default:
      asProp = 'h1';
  }

  return (
    <RHeading as={asProp} variant={variant} {...props} />
  );
};

Heading.propTypes = {
  variant: PropTypes.oneOf(Object.values(Variants)),
};

Heading.defaultProps = {
  variant: 'page',
};

export default Heading;
