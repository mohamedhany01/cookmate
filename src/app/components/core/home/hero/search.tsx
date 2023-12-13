// https://flowbite.com/docs/forms/search-input/#search-with-dropdown
export default function SearchRecipe() {
  return (
    <form>
      <div className='flex rounded-[16px] border border-solid border-mate-gray p-3'>
        <label
          htmlFor='search-dropdown'
          className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your Email
        </label>
        <button
          id='dropdown-button'
          data-dropdown-toggle='dropdown'
          className='z-10 inline-flex flex-shrink-0 items-center rounded-s-lg  bg-mate-offWhite px-4 py-2.5 text-center text-sm font-medium text-gray-900'
          type='button'
        >
          Recipe name{' '}
          <svg
            className='ms-2.5 h-2.5 w-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='dropdown'
          className='z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700'
        >
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdown-button'
          >
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Design
              </button>
            </li>
            <li>
              <button
                type='button'
                className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
        <div className='relative w-full'>
          <input
            type='search'
            id='search-dropdown'
            className='z-20 block w-full border-transparent p-2.5 text-sm text-gray-900 focus:border-transparent focus:ring-transparent'
            placeholder='Search for new Recipes'
            required
          />
          <button
            type='submit'
            className='absolute end-0 top-0 h-full bg-transparent p-2.5 text-sm font-medium text-mate-black focus:outline-none'
          >
            <svg
              className='h-4 w-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
            <span className='sr-only'>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
