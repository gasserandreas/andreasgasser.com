import React from 'react';
import { action } from '@storybook/addon-actions';

import ContactForm from './ContactForm';

export default {
  title: 'ContactForm',
  component: ContactForm,
};

export const defaultContactForm = () => (
  <ContactForm
    onSubmit={action('onSubmit')}
  />
);

defaultContactForm.story = {
  name: 'default',
};
