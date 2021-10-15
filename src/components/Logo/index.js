import React from "react";
import './style.css';
import logo from '../../images/logo.svg';

const Logo = ({src}) => {
  return (
    <div>
      <img src={logo} alt='loubank' />
    </div>
  );
}

export default Logo;
