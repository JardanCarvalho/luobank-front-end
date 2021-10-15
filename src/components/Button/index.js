import React from 'react';
import './style.css';

const classNameType = {
  dark: "dark-button",
  success: "success-button"
}
const Button = (props) => {
  return (
    <button className={classNameType[props.type]}>{props.children}</button>
  )
}

export default Button;
