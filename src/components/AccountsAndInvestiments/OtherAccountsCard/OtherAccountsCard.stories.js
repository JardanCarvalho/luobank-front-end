import React from 'react';
import OtherAccountsCard from './index.js';

export default {
  component: OtherAccountsCard,
  title: 'OtherAccountsCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <OtherAccountsCard {...args} />;

Default.args = {}