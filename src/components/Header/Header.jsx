import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass/styled-components';

const Styles = {
  SiteName: styled(Text)`
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  `,
  Name: styled(Text)`
    display: block;
    margin: 0.25rem 0;

    strong {
      font-weight: 600;
    }
  `,
  JobDescription: styled(Text)(({ theme }) => `
    color: ${theme.colors.muted};
  `),
};

const Header = () => (
  <Box>
    <Styles.SiteName>
      Hi I
      {'\''}
      am
      <Styles.Name>
        <strong>Andreas</strong>
        {' '}
        Gasser
      </Styles.Name>
    </Styles.SiteName>
    <Styles.JobDescription>
      Front end architect
      <br />
      Senior software engineer
      <br />
      UX advocate
    </Styles.JobDescription>
  </Box>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
