'use client';

import { RegisterUser, login } from '@/actions';
import { ErrorAlert, Loader } from '@/components';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<FormInputs>();

  const [ errorMessage, setErrorMessage ] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, password } = data;
    const response = await RegisterUser( name, email, password);

    if( !response.ok ) {
      setErrorMessage( response.message )
      return;
    } 

    await login( email.toLowerCase(), password );
    window.location.replace('/')
    console.log({ response })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      { errorMessage && <ErrorAlert errors={[errorMessage]}/>}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            autoComplete="name"
            autoFocus
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register(('name'), { required: true })}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register(('email'), { required: true })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register(('password'), { required: true })}
          />
        </div>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {isLoading ? <Loader /> : 'Sign in'}
      </button>

      {/* {state === 'CredentialsSignin' && <ErrorAlert errors={['Incorrects credentials']} />} */}
    </form>
  );
};
