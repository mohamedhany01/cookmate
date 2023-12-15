import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Recipe = {
  name: string;
  time: number;
  image: any;
  rating: number;
};

export const MateRecipe = (props: PropsWithChildren<Recipe>) => {
  return (
    <div className='relative my-28 rounded-xl bg-gray-100 p-4'>
      <a href='#'>
        <div className='absolute inset-x-0 -top-24'>
          <div className='relative'>
            <Image
              src={props.image}
              width={200}
              alt={props.name}
              className='m-auto block'
            />
            <div className='absolute right-10 top-12 rounded-full bg-mate-offWhite px-2 py-1'>
              <div className='flex items-center'>
                <svg
                  className='h-3 w-3 text-yellow-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <span className='ml-3'>{props.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className='mb-14 mt-20 px-10 text-center text-lg font-medium'>
          {props.name}
        </h1>
        <span className='font-normal text-mate-black'>Time</span>
        <div className='flex items-center justify-between'>
          <p className='font-bold capitalize'>{props.time} mins</p>
          <span className='rounded-full bg-mate-white p-2'>
            <svg
              className='h-6 w-6 text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z'
              />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};
