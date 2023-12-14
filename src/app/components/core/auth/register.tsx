import Image from 'next/image';
import chefImg from '@/public/images/chef.webp';

export default function Register() {
  return (
    <>
      <form>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <div className='w-2/5 self-start'>
            <div className='my-5'>
              {' '}
              <h1 className='mb-5 flex flex-col text-4xl font-medium'>
                Join the CookMate <br /> Community!
              </h1>
              <p className='text-xl'>Create your account</p>
            </div>
            <div className='my-5'>
              <label
                htmlFor='username'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Username
              </label>
              <input
                placeholder='Type your name'
                type='text'
                id='username'
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
              <input
                placeholder='Type your email address'
                type='text'
                id='email'
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
              <input
                placeholder='*****************'
                type='password'
                id='password'
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
              <input
                placeholder='*****************'
                type='password'
                id='cpassword'
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
                className='flex items-center rounded-full bg-mate-green px-36 py-2 uppercase text-mate-white'
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
      </form>
    </>
  );
}
