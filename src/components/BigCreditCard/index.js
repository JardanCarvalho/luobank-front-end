import React from 'react';
import './style.css';
import { SiMastercard, SiVisa, SiAmericanexpress } from 'react-icons/si';
import chip from '../../images/chip2.png';

const cardBrands = {
  visa: <SiVisa />,
  mastercard: <SiMastercard />,
  americanexpress: <SiAmericanexpress />,
}

export default ({ brand, value, cardNumber, dueDate, clientName }) => {
  return (
    <div className={`big-creditcard-container brand-${brand}`}>
      <div className="big-creditcard-top">
        <span className="big-creditcard-brand">{cardBrands[brand]}</span>
        <span className="big-creditcard-value">R$ 5.566,55</span>
      </div>
      <div className="big-creditcard-center">
        <div>
          <img src={chip} alt="" />
          <span className="big-creditcard-card-number">•••• •••• •••• 4552</span>
        </div>
        <div className="big-creditcard-due-date-title">
          <span>VÁLIDO ATÉ</span>
          <span className="big-creditcard-due-date">12/22</span>
        </div>
      </div>
      <span className="big-creditcard-bottom">
        JULIO CESAR
      </span>
    </div>
  );
}
