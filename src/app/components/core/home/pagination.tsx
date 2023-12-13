// https://flowbite.com/docs/components/pagination/#pagination-with-icons

export default function Pagination() {
  return (
    <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4'>
      <nav aria-label='All Recipes navigation'>
        <ul className='flex h-8 items-center -space-x-px text-sm'>
          <li className='mx-4'>
            <a
              href='#'
              className='ms-0 flex h-8 items-center justify-center rounded-s-lg border border-mate-gray bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='h-2.5 w-2.5 rtl:rotate-180'
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
                  d='M5 1 1 5l4 4'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mx-2 flex h-8 items-center justify-center rounded-lg border border-mate-gray bg-mate-orange px-3 leading-tight text-mate-white hover:bg-mate-orange'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mx-2 flex h-8 items-center justify-center rounded-lg border border-mate-gray bg-transparent px-3 leading-tight text-mate-black hover:bg-mate-orange hover:text-mate-white'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='z-10 mx-2 flex h-8 items-center justify-center rounded-lg border border-mate-gray bg-transparent px-3 leading-tight text-mate-black hover:bg-mate-orange hover:text-mate-white'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mx-2 flex h-8 items-center justify-center rounded-lg border border-mate-gray bg-transparent px-3 leading-tight text-mate-black hover:bg-mate-orange hover:text-mate-white'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mx-2 flex h-8 items-center justify-center rounded-lg border border-mate-gray bg-transparent px-3 leading-tight text-mate-black hover:bg-mate-orange hover:text-mate-white'
            >
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='mx-4 flex h-8 items-center justify-center rounded-e-lg border border-mate-gray bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='h-2.5 w-2.5 rtl:rotate-180'
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
