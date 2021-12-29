import React from 'react';
import './style.css';

const ActionSheet = ({ children, title }) => {
  return (
    <div className="actionsheet-container">
      <div className="actionsheet-title">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

export default ActionSheet;
