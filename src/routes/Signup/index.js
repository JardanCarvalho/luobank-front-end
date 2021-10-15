import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import './style.css'
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const Signup = ({className,classNameType}) => {
  return (
    <div className='container'>
      <Logo />
      <Title className='create-account'>{'Crie sua conta'}</Title>
      <Input
        placeholder="Nome"
        type="text"
      />
      <Input
        placeholder="CPF"
        type="text"
      />
      <Input
        placeholder="Senha"
        type="password"
      />
      <Input
        placeholder="Repetir Senha"
        type="password"
      />
      <Link to="/">
        <Button type="success">Finalizar Cadastro</Button>
      </Link>
    </div>
  )
}

export default Signup;
