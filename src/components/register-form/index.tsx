import { FieldValues, useForm } from 'react-hook-form';
import { RegisterFormButton } from './styles/RegisterFormButton';
import { RegisterFormDiv } from './styles/RegisterFormDiv';
import { RegisterFormLabel } from './styles/RegisterFormLabel';
import { RegisterFormTextInput } from './styles/RegisterFormTextInput';
import { axiosInstance } from '../../config/axios';
import { RegisterErrorBox } from './styles/RegisterErrorBox';
import IRegisterResponse from './types/IRegisterResponse';
import { RegisterConcludedBox } from './styles/RegisterConcludedBox';
import RegisterFormControl from './libs/RegisterFormControl';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(user: FieldValues) {
    RegisterFormControl.UpdateForm();

    if (RegisterFormControl.formIsInvalid()) {
      return;
    }

    try {
      await axiosInstance.post('/users/register', user);

      RegisterFormControl.clearForm();
    } catch (error: any) {
      const responseData = error.response.data as IRegisterResponse;

      RegisterFormControl.updateFormWithResponseErrors(responseData);
    }
  }

  return (
    <form id="register-form" className="my-4 h-full" onSubmit={handleSubmit(onSubmit)}>
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
        <RegisterConcludedBox id="account-registered">Conta criada com sucesso.</RegisterConcludedBox>
      </RegisterFormDiv>
    </form>
  );
}
