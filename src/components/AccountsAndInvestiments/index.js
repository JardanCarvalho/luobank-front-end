import React from 'react';
import './style.css';
import OtherAccountsCard from './OtherAccountsCard';
import arrow from '../../images/arrow.png';
import InvestsCard from './InvestsCard';

const AccountsAndInvestments = ({ balance }) => {

  return (
    <div className="accounts-n-invests-container">
      <div className="accounts-n-invests-other-accounts">
        <div className="accounts-n-invests-title">
          <img src={arrow} />
          <span>OUTRAS CONTAS</span>
        </div>
        <div className="accounts-n-invests-plus">
          <span>+</span>
        </div>
      </div>
      {balance.map(({ number, limit }) =>
        <OtherAccountsCard accountNumber={number} limitValue={limit} />
      )}
      <div className="accounts-n-invests-invests">
        <div className="accounts-n-invests-title">
          <img src={arrow} />
          <span>INVESTIMENTOS</span>
        </div>
        <InvestsCard />
      </div>
    </div>
  );
};

export default AccountsAndInvestments;
