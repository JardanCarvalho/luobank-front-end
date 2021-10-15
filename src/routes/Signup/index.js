import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import './style.css';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const Signup = () => {
  return (
    <div className="signup-container">
      <Logo className="signup-logo"/>
      <Title className="signup-title">Crie sua conta</Title>
      <div className="signup-form">
        <Input
          placeholder="Nome"
          type="text"
        />
        <Input
          placeholder="CPF"
          type="number"
        />
        <Input
          placeholder="Senha"
          type="password"
        />
        <Input
          placeholder="Repetir Senha"
          type="password"
        />
      </div>
      <Link to="/">
        <Button className="signup-button" type="success">Finalizar Cadastro</Button>
      </Link>
    </div>
  )
}

export default Signup;
