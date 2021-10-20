import React from 'react';
import BigCreditCard from './';

export default {
  component: BigCreditCard,
  title: 'BigCreditCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <BigCreditCard {...args} />;

Default.args = {
  brand: 'visa',
  value: 5000,
  cardNumber: 6969
}
