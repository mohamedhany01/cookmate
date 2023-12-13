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
        <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
          <Image src={HeroImg} width={599} height={437} alt='Hero Image' />
        </div>
      </div>
    </section>
  );
}
