/* eslint-disable no-trailing-spaces, max-len */
import React, { useState } from 'react';
import styled from 'styled-components';

import Heading from '../components/Base/Heading';
import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import ContactForm from '../components/ContactForm/ContactForm';

import { sendContactMessage, requestInitialState } from '../components/utils/services';

const Styles = {
  Error: styled.div(({ theme }) => `
    color: ${theme.colors.error};
  `),
  Success: styled.div``,
};

const ContactPage = () => {
  const [requestState, setRequestState] = useState({
    ...requestInitialState,
  });

  const handleReset = () => {
    setRequestState({ ...requestInitialState });
  };

  const handleOnSumit = async (person) => {
    setRequestState({
      ...requestState,
      pending: true,
    });

    try {
      const payload = await sendContactMessage(person);
      setRequestState({
        ...requestState,
        data: payload,
        lastSuccess: Date.now(),
      });
    } catch (error) {
      setRequestState({
        ...requestState,
        error,
        lastError: Date.now(),
      });
    }
  };

  const renderError = () => (
    <Styles.Error>
      <strong>Whooopppss</strong>
      , something seems to be broken here and I could not receive your message.
      <br />
      <br />
      Please try again later or reach out to me on my social media account.
    </Styles.Error>
  );

  const renderSuccess = () => (
    <Styles.Success>
      Thanks for your message, I will answer as soon as possible, I promise! ;-)
    </Styles.Success>
  );

  const { pending, lastSuccess, lastError } = requestState;

  return (
    <Page>
      <SEO title="Contact" />
      <Layout>
        <Heading variant="section">
          Get in contact with me
        </Heading>
        <Heading>
          Please drop me a message if you would like to know more or start casual chat.
        </Heading>
        <Heading variant="subPage">
          {lastError && renderError()}
          {lastSuccess && renderSuccess()}
          {!lastError && !lastSuccess && (
            <ContactForm
              onSubmit={handleOnSumit}
              handleReset={handleReset}
              pending={pending}
            />
          )}
        </Heading>
      </Layout>
    </Page>
  );
};

export default ContactPage;
