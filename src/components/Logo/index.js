import React from 'react';
import './style.css';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <div>
      <img className="logo-img" src={logo} alt="luo bank" />
    </div>
  );
}

export default Logo;
