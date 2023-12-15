import HeroImg from '@/public/images/mae-mu-H5Hj8QV2Tx4-unsplash.webp';
import SearchRecipe from './search';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
            Hello Jega
          </h1>
          <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
            What are you cooking today?
          </p>
          <a
            href='#'
            className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4'
          >
            Get started
          </a>
          <SearchRecipe></SearchRecipe>
        </div>
        <div className='relative hidden lg:col-span-5 lg:mt-0 lg:flex'>
          <Image src={HeroImg} width={599} height={437} alt='Hero Image' />
          <div className='absolute inset-y-0 right-0 top-1/3'>
            <div className='rounded-full bg-mate-white px-10 font-bold'>
              Shrimp Chicken <br />
              Andouille Jambalaya
            </div>
            <div className='absolute right-10 mt-2 rounded-full bg-mate-offWhite px-4 py-2 text-lg font-bold'>
              <div className='flex'>
                <svg
                  className='h-6 w-6 text-yellow-400 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <span className='ml-3'>4.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
