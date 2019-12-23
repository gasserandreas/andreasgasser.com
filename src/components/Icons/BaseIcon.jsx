import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = {
  BaseIcon: styled(FontAwesomeIcon)(({ theme }) => ``), // eslint-disable-line
};

export default (props) => <Styles.BaseIcon {...props} />;
