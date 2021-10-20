import React from 'react';
import './style.css';
import { SiMastercard, SiVisa, SiAmericanexpress } from 'react-icons/si';

const cardBrands = {
  visa : <SiVisa/>,
  mastercard : <SiMastercard/>,
  americanexpress: <SiAmericanexpress/>,
}

export default ({brand,value,cardNumber,dueDate,clientName}) => {
  return (
    <div className={`big-creditcard-container brand-${brand}`}>
      <span>{cardBrands[brand]}</span>
      <span>R$ {value}</span>
        <div>
          <span>**** **** **** 4552</span>
          <span>
            <p>VALIDO ATÉ</p>
            <p>12/22</p>
          </span>
        </div>
    </div>
  );
}
