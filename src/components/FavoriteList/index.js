import React from 'react';
import FavoriteItem from './FavoriteItem';
import './style.css';

export default ({ items }) => {
  return (
    <div className="favorite-wrapper">
      <span>FAVORITOS</span>
      <div className="favorite-content">
        {items.map(item => <FavoriteItem name={item.name} icon={item.icon} />)}
      </div>
    </div>
  );
}
