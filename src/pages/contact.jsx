/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
import Heading from '../components/Base/Heading';

import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const ContactPage = () => (
  <Page>
    <SEO title="Contact" />
    <Layout>
      <Heading>
        Contact page
      </Heading>
      <Heading variant="subPage">
        This page is currently under construction, please come back later.
      </Heading>
    </Layout>
  </Page>
);

export default ContactPage;
