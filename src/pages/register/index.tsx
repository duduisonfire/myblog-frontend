import React from 'react';
import RegisterForm from '../../components/register-form';
import { RegisterBox } from './styles/RegisterBox';
import { RegisterContainer } from './styles/RegisterContainer';

export default function Register() {
  return (
    <RegisterContainer>
      <RegisterBox id="register-box">
        <RegisterForm />
      </RegisterBox>
    </RegisterContainer>
  );
}
