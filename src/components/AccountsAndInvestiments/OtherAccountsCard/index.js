import React from 'react';
import './style.css';
import creditCard from '../../../images/credit-card-icon.png'

const OtherAccountsCard = ({ accountNumber, limitValue }) => {
  return (
    <div className="other-accounts-card-container">
      <div className="other-accounts-card-icon-n-number">
        <div className="other-accounts-card-icon">
          <img src={creditCard} />
        </div>
        <div>
          <span>Conta Nº {accountNumber}</span>
        </div>
      </div>
      <div className="other-accounts-card-value">
        <span>R$ {limitValue}</span>
      </div>
    </div>
  );
};

export default OtherAccountsCard;
