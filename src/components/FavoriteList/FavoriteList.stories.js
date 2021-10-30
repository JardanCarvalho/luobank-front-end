import React from 'react';
import {object} from '@storybook/addon-controls';
import FavoriteList from '.';

export default {
  component: FavoriteList,
  title: 'FavoriteList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <FavoriteList favoriteList={[{args}]} />;

Default.args = {
    icon: "wallet",
    name: "carteira"
}