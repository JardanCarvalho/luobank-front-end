import React from 'react';
import TapBar from './';

export default {
  component: TapBar,
  title: 'TapBar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <TapBar {...args} />;

Default.args = {}
