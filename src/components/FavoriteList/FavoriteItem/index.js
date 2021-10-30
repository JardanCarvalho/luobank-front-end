import React from 'react';
import './style.css';
import { BiBarChartSquare } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const cardIcons = {
  star: <AiOutlineStar />,
  chart: <BiBarChartSquare />,
  wallet: <MdOutlineAccountBalanceWallet />
}

export default ({ icon, name }) => {
  return (
    <div className="favorite-item-container">
      <div className={`favorite-item-icon icon-${icon}`}>
        {cardIcons[icon]}
      </div>
      <div className={`favorite-item-title title-${icon}`}>
        {name}
      </div>
    </div>
  );
}
