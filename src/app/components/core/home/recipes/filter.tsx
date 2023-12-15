import { MateRecipe } from './recipe';
import r1 from '@/public/images/recipes/1.webp';
import r2 from '@/public/images/recipes/2.webp';
import r3 from '@/public/images/recipes/3.webp';
import r4 from '@/public/images/recipes/4.webp';

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
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <MateRecipe
          name='Classic Greek Salad'
          image={r1}
          time={15}
          rating={4.5}
        />
        <MateRecipe
          name='Crunchy Nut Coleslaw'
          image={r2}
          time={15}
          rating={3.5}
        />
        <MateRecipe
          name='Shrimp Chicken Andouille Jambalaya'
          image={r3}
          time={15}
          rating={3.0}
        />
        <MateRecipe
          name='Barbecue Chicken Jollof Rice'
          image={r4}
          time={15}
          rating={4.5}
        />
      </div>
    </div>
  );
}
