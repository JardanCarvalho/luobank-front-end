import React from 'react';
import './style.css';
import upArrow from '../../../images/up-arrow.svg';
import downArrow from '../../../images/down-arrow.svg';

const iconType = {
  moneyOut: upArrow,
  moneyIn: downArrow
};

const TransactionsTag = ({
  typeMoney,
  transactionFrom,
  typeTransaction,
  value
}) => {
  return (
    <div className="transactions-tag-container">
      <div className="transactions-arrow">
        <img src={iconType[typeMoney]} alt="" />
      </div>
      <div className="transactions-name-and-type">
        <span className="transactions-name">
          {transactionFrom}
        </span>
        <span className="trasactions-type">
          {typeTransaction}
        </span>
      </div>
      <div className="transactions-value">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default TransactionsTag;
