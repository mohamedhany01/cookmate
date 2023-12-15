'use client';
import NavbarSimple from '@/src/app/components/core/navbarSimple';
import { MateButton } from '@/src/app/components/util/button';
import FormikControl from '@/src/app/utils/form/FormikControl';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import cake from '@/public/images/cake.webp';

export default function ForgetPassword() {
  return (
    <>
      <NavbarSimple />
      <Formik
        initialValues={{
          password: '',
          cpassword: '',
        }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form className='mt-28'>
            <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
              <div className='w-2/5'>
                <div className='my-5'>
                  {' '}
                  <h1 className='mb-5 flex flex-col text-4xl font-medium'>
                    Reset Your Password{' '}
                  </h1>
                  <p className='mb-4 text-lg'>
                    Enter a new password for your CookMate account.
                  </p>
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
                  <MateButton label='Reset Password' />
                </div>
                <div className='my-5'>
                  <a href='/pages/auth/login' className='my-5 font-bold'>
                    Remember your password?
                  </a>
                </div>
              </div>
              <div className='mt-16 w-2/5 self-start'>
                <Image src={cake} width={500} alt='Oven' />
              </div>
            </div>
            <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
              <div className='w-2/5'>
                <div
                  className='mb-4 flex rounded-lg bg-mate-white p-4 text-sm text-mate-orange dark:bg-gray-800'
                  role='alert'
                >
                  <span className='sr-only'>Info</span>
                  <div>
                    <span className='mb-4 block font-bold text-mate-black'>
                      Instructions{' '}
                    </span>
                    <ul className='mt-1.5 list-inside list-disc'>
                      <li>
                        <div className='inline text-mate-black'>
                          Password must be at least 8 characters long and
                          include a mix of letters, numbers, and symbols.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
