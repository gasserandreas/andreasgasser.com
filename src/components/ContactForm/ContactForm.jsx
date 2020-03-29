/* eslint-disable react/jsx-fragments */
import React from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { withFormik } from 'formik';
import styled from 'styled-components';
import { Button, Box } from 'rebass/styled-components';

import Input from '../Base/Input';
import Textarea from '../Base/Textarea';
import Field from '../Base/Field';
import Captcha from '../Captcha/Captcha';

// form configuration
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Sorry, this seems to be an invalid email address.')
    .required('I need a valid email address to get in contact with you!'),
  name: Yup.string()
    .min(2)
    .max(50)
    .required('I really would like to know your name.'),
  message: Yup.string()
    .min(2)
    .max(500)
    .required('Please don\'t forget to add your message'),
});

const mapPropsToValues = (obj) => {
  const { person } = obj;
  return {
    ...person,
  };
};

const onHandleSubmit = (payload, { props }) => {
  props.onSubmit(payload);
};

const formikConfig = {
  validationSchema,
  mapPropsToValues,
  handleSubmit: onHandleSubmit,
  displayName: 'ContactForm',
  validateOnChange: false,
  validateOnBlur: false,
};

const formikEnhancer = withFormik(formikConfig);

// styles
const Styles = {
  Form: styled.form`
  `,
  Field: styled(Field)``,
  Input: styled(Input)``,
  Textarea: styled(Textarea)``,
  ButtonGroup: styled(Box)`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  `,
  Button: styled(Button)``,
};

export const ContactForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    submitting,
    pending,
    submitForm,
  } = props;

  const captchaRef = React.useRef(null);

  // submit form after captcha
  const handleOnSubmit = () => {
    submitForm();
  };

  // handle captcha
  const handleCaptcha = () => {
    captchaRef.current.execute();
  };

  return (
    <Styles.Form onSubmit={handleSubmit}>
      <Styles.Field id="name" label="Name" error={touched.name && errors.name}>
        <Styles.Input
          id="name"
          type="text"
          placeholder="Enter your name"
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={pending}
        />
      </Styles.Field>
      <Styles.Field id="email" label="Email" error={touched.email && errors.email}>
        <Styles.Input
          id="email"
          type="email"
          placeholder="Enter your email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={pending}
        />
      </Styles.Field>
      <Styles.Field id="message" label="Message" error={touched.message && errors.message}>
        <Styles.Textarea
          id="message"
          placeholder="Enter your message"
          error={touched.message && errors.message}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={pending}
        />
      </Styles.Field>
      <Styles.ButtonGroup>
        <Styles.Button
          type="button"
          variant="link"
          onClick={handleReset}
          disabled={!dirty || (submitting || pending)}
          testId="jestResetButton"
        >
          Reset form
        </Styles.Button>
        <Styles.Button
          type="button"
          disabled={submitting || pending}
          variant="outline"
          style={{ marginLeft: '1rem' }}
          loading={submitting || pending}
          testId="jestSubmitButton"
          onClick={handleCaptcha}
        >
          {`${pending ? 'Sending' : 'Send'} message`}
        </Styles.Button>
      </Styles.ButtonGroup>
      <Captcha
        ref={captchaRef}
        size="invisible"
        verifyCallback={handleOnSubmit}
      />
    </Styles.Form>
  );
};

const personPropType = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
});

ContactForm.propTypes = {
  values: PropTypes.shape(personPropType).isRequired,
  touched: PropTypes.shape(personPropType).isRequired,
  errors: PropTypes.shape(personPropType).isRequired,
  dirty: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pending: PropTypes.bool,
};

ContactForm.defaultProps = {
  pending: false,
};

const EnhancedContactForm = formikEnhancer(ContactForm);

EnhancedContactForm.propTypes = {
  person: personPropType,
  onSubmit: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

EnhancedContactForm.defaultProps = {
  person: {
    email: '',
    name: '',
    message: '',
  },
  pending: false,
};

export const __testables__ = {  // eslint-disable-line
  formikConfig,
  formikEnhancer,
  validationSchema,
  mapPropsToValues,
  handleSubmit: onHandleSubmit,
  ContactForm,
};

export default EnhancedContactForm;
