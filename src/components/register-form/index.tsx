import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (event) => {
    console.log(JSON.stringify(event));
  };

  return (
    <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
      <p className="flex justify-center text-xl text-slate-800 mb-4">Register</p>
      <div className="grid grid-cols-12 mb-4">
        <label className="justify-self-center m-2 col-start-2 col-end-12">Full Name</label>
        <input
          className="justify-self-center border-2 col-start-2 col-end-12 m-2 w-full md:w-96"
          type="text"
          {...register('UserName')}
        />
      </div>
      <div className="grid grid-cols-12 mb-4">
        <label className="justify-self-center m-2 col-start-2 col-end-12">Username</label>
        <input
          className="justify-self-center border-2 col-start-2 col-end-12 m-2 w-full md:w-96"
          type="text"
          {...register('User')}
        />
      </div>
      <div className="grid grid-cols-12 mb-4">
        <label className="justify-self-center m-2 col-start-2 col-end-12">Password</label>
        <input
          className="justify-self-center border-2 col-start-2 col-end-12 m-2 w-full md:w-96"
          type="text"
          {...register('Password')}
        />
      </div>
      <div className="grid grid-cols-12 mb-4">
        <input
          className="bg-purple-300 hover:bg-purple-500 rounded-md border border-purple-800 justify-self-center col-start-2 col-end-12 m-2 w-32"
          type="submit"
          value="Register"
        />
      </div>
    </form>
  );
}
