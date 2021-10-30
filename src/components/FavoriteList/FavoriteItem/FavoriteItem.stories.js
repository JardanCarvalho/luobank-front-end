import React from 'react';
import FavoriteItem from '.';

export default {
  component: FavoriteItem,
  title: 'FavoriteItem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = (args) => <FavoriteItem {...args} />;

Default.args = {
  icon: 'star',
  name: 'Meus Contatos'
 
}
