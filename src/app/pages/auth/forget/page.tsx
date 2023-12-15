'use client';
import NavbarSimple from '@/src/app/components/core/navbarSimple';
import { MateButton } from '@/src/app/components/util/button';
import FormikControl from '@/src/app/utils/form/FormikControl';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import oven from '@/public/images/oven.webp';

export default function ForgetPassword() {
  return (
    <>
      <NavbarSimple />
      <Formik
        initialValues={{
          email: '',
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
                    Forgot Your Password?
                  </h1>
                  <p className='mb-4 text-lg'>
                    Don&apos;t worry you can reset it easily, enter the email
                    associated with your account to reset your password.
                  </p>
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
                    className='my-14 block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                  />
                </div>
                <div className='my-5'>
                  <MateButton label='Send Reset Link' />
                </div>
                <div className='my-5'>
                  <a href='/pages/auth/login' className='my-5 font-bold'>
                    Remember your password?
                  </a>
                </div>
              </div>
              <div className='mt-16 w-2/5 self-start'>
                <Image src={oven} width={500} alt='Oven' />
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
                          An email with instructions to reset your password will
                          be sent to the provided email address.
                        </div>
                      </li>
                      <li className='mt-4'>
                        <div className='inline text-mate-black'>
                          If you don't receive an email within a few minutes,
                          please check your spam folder.
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
