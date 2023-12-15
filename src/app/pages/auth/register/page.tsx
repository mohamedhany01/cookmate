'use client';

import Image from 'next/image';
import chefImg from '@/public/images/chef.webp';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { registration } from '@/src/app/utils/yup/schema';
import FormikControl from '@/src/app/utils/form/FormikControl';
import { registerNewUser } from '@/src/app/utils/auth/Auth';
import { useState } from 'react';

export default function Register() {
  const [message, setMessage] = useState({
    message: '',
    type: '',
  });

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          cpassword: '',
        }}
        validationSchema={registration}
        onSubmit={async (values) => {
          const res = await registerNewUser({
            username: values.username,
            email: values.email,
            password: values.password,
          });
          const messageInfo = {
            message: res.data.message,
            type: res.data.type,
          };
          setMessage(messageInfo);
        }}
      >
        {(formik) => (
          <Form>
            <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
              <div className='w-2/5 self-start'>
                <div className='my-5'>
                  {' '}
                  <h1 className='mb-5 flex flex-col text-4xl font-medium'>
                    Join the CookMate <br /> Community!
                  </h1>
                  <p className='text-xl mb-4'>Create your account</p>
                  {message && message.type === 'success' ? (
                    <div
                      className='mb-4 flex items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800'
                      role='alert'
                    >
                      <svg
                        className='me-3 inline h-4 w-4 flex-shrink-0'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                      </svg>
                      <span className='sr-only'>Info</span>
                      <div>
                        <span className='font-medium'>{message.message}</span>{' '}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                  {message && message.type === 'error' ? (
                    <div
                      className='mb-4 flex items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800'
                      role='alert'
                    >
                      <svg
                        className='me-3 inline h-4 w-4 flex-shrink-0'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                      </svg>
                      <span className='sr-only'>Info</span>
                      <div>
                        <span className='font-medium'>{message.message}</span>{' '}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='my-5'>
                  <label
                    htmlFor='username'
                    className='mb-2 block text-sm font-medium text-gray-900'
                  >
                    Username
                  </label>
                  <FormikControl
                    control='input'
                    placeholder='Type your name'
                    type='text'
                    id='username'
                    name='username'
                    className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                  />
                </div>
                <div className='my-5'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900'
                  >
                    Email Address
                  </label>
                  <FormikControl
                    control='input'
                    placeholder='Type your email address'
                    type='text'
                    id='email'
                    name='email'
                    className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                  />
                </div>
                <div className='my-5'>
                  <label
                    htmlFor='password'
                    className='mb-2 block text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <FormikControl
                    control='input'
                    placeholder='*****************'
                    type='password'
                    id='password'
                    name='password'
                    className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                  />
                </div>
                <div className='my-5'>
                  <label
                    htmlFor='cpassword'
                    className='mb-2 block text-sm font-medium text-gray-900'
                  >
                    Confirm password
                  </label>
                  <FormikControl
                    control='input'
                    placeholder='*****************'
                    type='password'
                    id='cpassword'
                    name='cpassword'
                    className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                  />
                </div>
                <div className='my-5'>
                  <p>
                    By signing up, you agree to our Terms and <br />
                    Conditions.
                  </p>
                </div>
                <div className='my-5'>
                  <button
                    type='submit'
                    className='flex items-center rounded-full bg-mate-green px-36 py-2 uppercase text-mate-white disabled:bg-mate-gray'
                    disabled={!formik.isValid}
                  >
                    Create new
                    <svg
                      className='ml-3 h-3 w-3 text-mate-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 6 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 9 4-4-4-4'
                      />
                    </svg>
                  </button>
                </div>
                <a href='/login' className='my-5 font-bold'>
                  Already have an account?
                </a>
              </div>
              <div className='mt-16 w-2/5 self-start'>
                <Image src={chefImg} width={400} alt='Chef' />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
