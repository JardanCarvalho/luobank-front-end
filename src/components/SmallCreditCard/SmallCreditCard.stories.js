import React from 'react';

import SmallCreditCard from './';

export default {
  component: SmallCreditCard,
  title: 'SmallCreditCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <SmallCreditCard {...args} />;

Default.args = {
  brand: 'visa',
  limitValue: 5000,
  cardNumber: 6969
}
