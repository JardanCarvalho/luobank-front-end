import React from 'react';
import './style.css';

const classNameType = {
  dark: 'dark-button',
  success: 'success-button'
}

const Button = ({ type, children }) => {
  return (
    <button className={classNameType[type]}>{children}</button>
  )
}

export default Button;
