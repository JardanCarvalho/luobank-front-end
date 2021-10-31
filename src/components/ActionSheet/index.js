import React from 'react';
import './style.css';

const ActionSheet = ({ children }) => {
  return (
    <div className="actionsheet-container">
      <div className="actionsheet-title">
        <span>Transações</span>
      </div>
      {children}
    </div>
  );
}

export default ActionSheet;
