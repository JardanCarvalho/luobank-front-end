import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  type: "dark",
}
