import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Button, Heading } from 'rebass/styled-components';

import { sendContactMessage } from '../services';

const ServicesExamples = () => {
  const [fetching, setFetching] = React.useState(null);
  const [payload, setPayload] = React.useState(null);

  const name = text('name', 'Jane Doe');
  const email = text('email', 'jane.doe@unknow.com');
  const message = text('message', 'This is a message from unknown');

  const handleSend = async () => {
    setFetching(true);

    try {
      const networkPayload = await sendContactMessage({ name, email, message });
      setFetching(false);
      setPayload(networkPayload);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      setFetching(false);
    }
  };

  const renderKeyValue = (key, value) => (
    <p>
      <strong>
        {key}
        :
        {' '}
      </strong>
      {value}
    </p>
  );

  return (
    <div>
      <Heading mt={4}>Contact form</Heading>
      {renderKeyValue('name', name)}
      {renderKeyValue('email', email)}
      {renderKeyValue('message', message)}
      <Button
        onClick={handleSend}
        type="submit"
        variant="outline"
      >
        Send message
      </Button>
      <Heading mt={4}>Service Payload</Heading>
      {fetching && 'Fetching'}
      {payload && <code>{JSON.stringify(payload, null, 2)}</code>}
    </div>
  );
};

export default ServicesExamples;
