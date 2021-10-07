import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './';

export default {
  component: Input,
  title: 'Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <Input {...args} />;

Default.args = {
  type: "text",
  placeholder: "Nome"
}