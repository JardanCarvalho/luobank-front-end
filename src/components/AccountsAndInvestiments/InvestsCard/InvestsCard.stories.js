import React from 'react';
import InvestsCard from './index.js';

export default {
  component: InvestsCard,
  title: 'InvestsCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <InvestsCard {...args} />;

Default.args = {}