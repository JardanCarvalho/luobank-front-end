import React from 'react';
import ActionSheet from './';

export default {
  component: ActionSheet,
  title: 'ActionSheet',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <ActionSheet {...args} />;

Default.args = {
  type: 'transactions',
  content: 'transaction'
}
