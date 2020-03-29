/* global withTheme, createFormitState */
import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'rebass/styled-components';
// import toJson from 'enzyme-to-json';

import Field from '../../Base/Field';
import Input from '../../Base/Input';
import Textarea from '../../Base/Textarea';

import { __testables__ } from '../ContactForm';

const {
  formikConfig, validationSchema, mapPropsToValues, handleSubmit, ContactForm,
} = __testables__;

describe('components/ContactForm', () => {
  describe('ContactForm test suite', () => {
    const inputFields = ['email', 'name', 'message'];

    const getFormProps = (values) => {
      // create basic formit state
      const props = createFormitState(inputFields);

      // enhance and modify for local usage
      return {
        ...props,
        values: {
          ...props.values,
          ...values,
        },
      };
    };

    it('should render', () => {
      const props = getFormProps();
      const wrapper = mount(withTheme(<ContactForm {...props} />));
      expect(wrapper).toBeTruthy();
    });

    it('should render error if touched already', () => {
      // generate error state
      const props = {
        ...getFormProps(),
        touched: inputFields.reduce(
          (prev, cur) => ({
            ...prev,
            [cur]: true,
          }),
          {},
        ),
        errors: inputFields.reduce(
          (prev, cur) => ({
            ...prev,
            [cur]: `Error ${cur}`,
          }),
          {},
        ),
      };
      const wrapper = mount(withTheme(<ContactForm {...props} />));

      // test fields
      const fields = wrapper.find(Field);
      fields.forEach((field) => {
        expect(field.props().error).toBeTruthy();
      });

      // test input fields
      const inputs = wrapper.find(Input);
      inputs.forEach((textInput) => {
        expect(textInput.props().error).toBeTruthy();
      });

      const textArea = wrapper.find(Textarea);
      expect(textArea.props().error).toBeTruthy();
    });

    it('reset button should be disabled if not dirty', () => {
      const wrapper = mount(withTheme(<ContactForm {...getFormProps()} />));
      const resetButton = wrapper.find(Button).filterWhere((n) => n.props().testId === 'jestResetButton');
      expect(resetButton.props().disabled).toBeTruthy();
    });

    it('reset button should be disabled if submitting', () => {
      const props = {
        ...getFormProps(),
        dirty: true,
        submitting: true,
      };
      const wrapper = mount(withTheme(<ContactForm {...props} />));
      const resetButton = wrapper.find(Button).filterWhere((n) => n.props().testId === 'jestResetButton');
      expect(resetButton.props().disabled).toBeTruthy();
    });

    it('submit button should be disabled if submitting', () => {
      const props = {
        ...getFormProps(),
        submitting: true,
      };
      const wrapper = mount(withTheme(<ContactForm {...props} />));
      const submitButton = wrapper.find(Button).filterWhere((n) => n.props().testId === 'jestSubmitButton');
      expect(submitButton.props().disabled).toBeTruthy();
    });

    it('submit button should get loading props', () => {
      const props = {
        ...getFormProps(),
        submitting: true,
      };
      const wrapper = mount(withTheme(<ContactForm {...props} />));
      const submitButton = wrapper.find(Button).filterWhere((n) => n.props().testId === 'jestSubmitButton');
      expect(submitButton.props().loading).toBeTruthy();
    });

    // important to trigger Formik
    it('submit button should be type of submit', () => {
      const wrapper = mount(withTheme(<ContactForm {...getFormProps()} />));
      const submitButton = wrapper.find(Button).filterWhere((n) => n.props().testId === 'jestSubmitButton');
      expect(submitButton.props().type).toEqual('button');
    });
  });

  describe('formikConfig test suite', () => {
    it('formikConfig object should be valid', () => {
      expect(Object.keys(formikConfig)).toEqual([
        'validationSchema',
        'mapPropsToValues',
        'handleSubmit',
        'displayName',
        'validateOnChange',
        'validateOnBlur',
      ]);
    });

    it('validationSchema should be consistent', () => {
      const { fields } = validationSchema;
      const { email, name, message } = fields;

      expect(email).toBeTruthy();
      expect(name).toBeTruthy();
      expect(message).toBeTruthy();
    });

    it('should handle mapPropsToValues', () => {
      const person = {
        name: 'Test user',
        email: 'test.user@test.com',
        message: 'test message',
      };
      const props = { person };
      expect(mapPropsToValues(props)).toEqual(person);
    });

    it('should handle handleSubmit', () => {
      const callback = jest.fn();
      const payload = 'payload';
      const props = {
        onSubmit: callback,
      };
      const obj = {
        props,
      };

      // execute handleSubmit
      handleSubmit(payload, obj);

      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith(payload);
    });
  });
});
