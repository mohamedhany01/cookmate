import { PropsWithChildren } from 'react';

type ButtonTitle = {
  label: string;
};

export const MateButton = (props: PropsWithChildren<ButtonTitle>) => {
  return (
    <button
      type='submit'
      className='flex items-center rounded-full bg-mate-green px-36 py-2 uppercase text-mate-white disabled:bg-mate-gray'
    >
      {props.label}
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
  );
};
