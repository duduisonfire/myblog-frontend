import { FieldValues, useForm } from 'react-hook-form';
import { RegisterFormButton } from './styles/RegisterFormButton';
import { RegisterFormDiv } from './styles/RegisterFormDiv';
import { RegisterFormLabel } from './styles/RegisterFormLabel';
import { RegisterFormTextInput } from './styles/RegisterFormTextInput';
import { backendConnection } from '../../config/axios';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(user: FieldValues) {
    const request = (await backendConnection.post('/users/register', user)).status;
    console.log(request);
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
        <RegisterFormTextInput type="text" {...register('User')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Password</RegisterFormLabel>
        <RegisterFormTextInput type="password" {...register('Password')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormButton type="submit" value="Register" />
      </RegisterFormDiv>
    </form>
  );
}
