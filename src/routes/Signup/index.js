import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
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
        type="text"
      />
      <Input
        placeholder="Repetir Senha"
        type="text"
      />
      <Link to="/">
        Fazer login
      </Link>
    </div>
  )
}

export default Signup;
