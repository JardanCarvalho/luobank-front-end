import React from 'react';
import TransactionsTag from './';

export default {
  component: TransactionsTag,
  title: 'TransactionsTag',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <TransactionsTag {...args} />;

Default.args = {
  arrow: 'input',
  typeOfTransaction: 'sent',
  transactionFrom: 'joao',
  transactionValue: 'exemple1',
  currencyType: 'brl'
}
