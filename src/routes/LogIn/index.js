import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../../src/images/logo-103x31.png'
import Button from '../../components/Button';

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} className="login-logo"/>
        <Input className="input"
          placeholder="CPF"
          type="number"
        />
        <Input className="input"
          placeholder="Senha"
          type="password"
        />
      </div>
      <Link to="/">
        <Button className="login-button" type="success">Entrar</Button>
      </Link>
      <Link to="/">
        <Button className="login-button" type="dark">Quero ser Cliente</Button>
      </Link>
    </div>
  )
}

export default LogIn;
