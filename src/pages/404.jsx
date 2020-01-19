/* eslint-disable no-trailing-spaces, max-len */
import React from 'react';
import Heading from '../components/Base/Heading';

import Page from '../components/Page/Page';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import TitleLink from '../components/Links/TitleLink';
import * as Paths from '../components/utils/Paths';

const ContactPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <Layout>
      <Heading>
        NOT FOUND
      </Heading>
      <Heading variant="subPage">
        Whooops, you just hit a route that doesn&#39;t exist... the sadness.
        <TitleLink to={Paths.INDEX}>Go back home</TitleLink>
      </Heading>
    </Layout>
  </Page>
);

export default ContactPage;
