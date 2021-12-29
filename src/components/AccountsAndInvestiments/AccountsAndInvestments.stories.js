import React from 'react';
import AccountsAndInvestments from './index.js';

export default {
  component: AccountsAndInvestments,
  title: 'AccountsAndInvestments',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <AccountsAndInvestments {...args} />;

Default.args = {}