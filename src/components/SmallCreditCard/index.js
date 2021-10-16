import React from 'react';
import './style.css';
import { SiMastercard, SiVisa, SiAmericanexpress } from 'react-icons/si';

const cardBrands = {
  visa: <SiVisa />,
  mastercard: <SiMastercard />,
  americanexpress: <SiAmericanexpress />
}

export default ({ brand, limitValue, cardNumber }) => {
  return (
    <div className={`small-creditcard-container brand-${brand}`} >
      {cardBrands[brand]}
      <div className="small-creditcard-limit">
        <span>Limite</span>
        <span>R$ {limitValue.toLocaleString()}</span>
      </div>
      <span>*** {cardNumber}</span>
    </div>
  );  
}
