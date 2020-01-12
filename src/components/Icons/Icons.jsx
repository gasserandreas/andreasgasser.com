import React from 'react';

import { faCode, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import BaseIcon from './BaseIcon';

export const CodeIcon = () => <BaseIcon icon={faCode} />;

export const ChartBarIcon = () => <BaseIcon icon={faChartBar} />;

export const ReactIcon = () => <BaseIcon icon={faReact} />;
