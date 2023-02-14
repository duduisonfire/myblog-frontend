import { FieldValues, useForm } from 'react-hook-form';
import { RegisterFormButton } from './styles/RegisterFormButton';
import { RegisterFormDiv } from './styles/RegisterFormDiv';
import { RegisterFormLabel } from './styles/RegisterFormLabel';
import { RegisterFormTextInput } from './styles/RegisterFormTextInput';
import { backendConnection } from '../../config/axios';
import { RegisterErrorBox } from './styles/RegisterErrorBox';
import IRegisterResponse from './types/IRegisterResponse';
import RegisterFormVerify from './libs/RegisterFormVerify';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(user: FieldValues) {
    if (RegisterFormVerify.ValidateForm()) {
      return;
    }

    try {
      await backendConnection.post('/users/register', user);

      const userAlreadyExistErrorBox = document.querySelector('#user-already-exist');
      userAlreadyExistErrorBox?.classList.add('hidden');

      const emailAlreadyExistErrorBox = document.querySelector('#email-already-exist');
      emailAlreadyExistErrorBox?.classList.add('hidden');
    } catch (error: any) {
      const responseData = error.response.data as IRegisterResponse;

      if (responseData.error === 'user-already-exist') {
        const userAlreadyExistErrorBox = document.querySelector('#user-already-exist');
        userAlreadyExistErrorBox?.classList.remove('hidden');
      } else {
        const userAlreadyExistErrorBox = document.querySelector('#user-already-exist');
        userAlreadyExistErrorBox?.classList.add('hidden');
      }

      if (responseData.error === 'email-already-exist') {
        const emailAlreadyExistErrorBox = document.querySelector('#email-already-exist');
        emailAlreadyExistErrorBox?.classList.remove('hidden');
      } else {
        const emailAlreadyExistErrorBox = document.querySelector('#email-already-exist');
        emailAlreadyExistErrorBox?.classList.add('hidden');
      }
    }
  }

  return (
    <form className="my-4 h-full" onSubmit={handleSubmit(onSubmit)}>
      <p className="flex justify-center text-xl text-slate-800 mb-4">Register</p>
      <RegisterFormDiv>
        <RegisterFormLabel>Full Name</RegisterFormLabel>
        <RegisterFormTextInput type="text" {...register('UserFullName')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Username</RegisterFormLabel>
        <RegisterFormTextInput id="user-input" type="text" {...register('User')} />
        <RegisterErrorBox id="user-already-exist">Usuário já existe.</RegisterErrorBox>
        <RegisterErrorBox id="user-length-error">O usuário precisa ter entre 6 e 18 caracteres.</RegisterErrorBox>
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Email</RegisterFormLabel>
        <RegisterFormTextInput id="email-input" type="text" {...register('UserEmail')} />
        <RegisterErrorBox id="email-already-exist">Email já cadastrado.</RegisterErrorBox>
        <RegisterErrorBox id="invalid-email-error">Email invalido.</RegisterErrorBox>
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Password</RegisterFormLabel>
        <RegisterFormTextInput id="password-input" type="password" {...register('Password')} />
        <RegisterErrorBox id="short-password-error">A senha precisa ter entre 8 e 25 caracteres.</RegisterErrorBox>
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Confirm Password</RegisterFormLabel>
        <RegisterFormTextInput id="password-equal-input" type="password" {...register('ConfirmPassword')} />
        <RegisterErrorBox id="not-equal-password-error">As senhas precisam ser iguais.</RegisterErrorBox>
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormButton type="submit" value="Register" />
      </RegisterFormDiv>
    </form>
  );
}
