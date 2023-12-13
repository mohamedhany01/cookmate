import Image from 'next/image';

// https://flowbite.com/docs/components/gallery/#gallery-with-tag-filters
export default function Filter() {
  return (
    <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
      <div className='flex flex-wrap items-center justify-center py-4 md:py-8'>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-orange px-5 py-2.5 text-center text-base font-medium text-mate-white hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          All Recipes
        </button>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-white px-5 py-2.5 text-center text-base font-medium text-mate-black hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          Arabian
        </button>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-white px-5 py-2.5 text-center text-base font-medium text-mate-black hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          Asian
        </button>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-white px-5 py-2.5 text-center text-base font-medium text-mate-black hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          Italian
        </button>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-white px-5 py-2.5 text-center text-base font-medium text-mate-black hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          Indian
        </button>
        <button
          type='button'
          className='mb-3 me-3 rounded-[12px] border border-mate-offWhite bg-mate-white px-5 py-2.5 text-center text-base font-medium text-mate-black hover:bg-mate-orange hover:text-white focus:outline-none focus:ring-4 focus:ring-transparent'
        >
          Chinese
        </button>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
            alt=''
          />
        </div>
        <div>
          <Image
            className='h-auto max-w-full rounded-lg'
            width={500}
            height={500}
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
