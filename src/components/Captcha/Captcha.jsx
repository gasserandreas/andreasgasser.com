/* eslint-disable react/jsx-fragments */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Recaptcha from 'react-recaptcha';
import styled from 'styled-components';

const Styles = {
  Captcha: styled.div``,
};

const Captcha = React.forwardRef(({
  key, verifyCallback, size, ...props
}, ref) => {
  const onloadCallback = () => {};
  return (
    <Styles.Captcha {...props}>
      <Helmet>
        <script src={`https://www.google.com/recaptcha/api.js? r=${Math.random()}`} async defer />
      </Helmet>
      <Recaptcha
        sitekey={key}
        render="explicit"
        size={size}
        ref={ref}
        verifyCallback={verifyCallback}
        onloadCallback={onloadCallback}
      />
    </Styles.Captcha>
  );
});

Captcha.propTypes = {
  key: PropTypes.string,
  verifyCallback: PropTypes.func,
  onloadCallback: PropTypes.func,
  size: PropTypes.string,
  ref: PropTypes.node,
};

Captcha.defaultProps = {
  key: '6LdtBeUUAAAAAJo5jFo4Zm0XwSw25CL2yFUCW1jv',
  verifyCallback: null,
  onloadCallback: null,
  size: null,
  ref: null,
};

export default Captcha;
