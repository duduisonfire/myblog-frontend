import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormButton } from './styles/RegisterFormButton';
import { RegisterFormDiv } from './styles/RegisterFormDiv';
import { RegisterFormLabel } from './styles/RegisterFormLabel';
import { RegisterFormTextInput } from './styles/RegisterFormTextInput';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (user) => {
    console.log(JSON.stringify(user));
  };

  return (
    <form className="my-4 h-full" onSubmit={handleSubmit(onSubmit)}>
      <p className="flex justify-center text-xl text-slate-800 mb-4">Register</p>
      <RegisterFormDiv>
        <RegisterFormLabel>Full Name</RegisterFormLabel>
        <RegisterFormTextInput type="text" {...register('UserName')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Username</RegisterFormLabel>
        <RegisterFormTextInput type="text" {...register('User')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormLabel>Password</RegisterFormLabel>
        <RegisterFormTextInput type="text" {...register('Password')} />
      </RegisterFormDiv>
      <RegisterFormDiv>
        <RegisterFormButton type="submit" value="Register" />
      </RegisterFormDiv>
    </form>
  );
}
