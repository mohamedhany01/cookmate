import Image from 'next/image';
import potImg from '@/public/images/pot.webp';

export default function AddNewRecipe() {
  return (
    <>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <h1 className='text-4xl font-bold'>
          Share Your Recipe with the <br />
          CookMate Community!
        </h1>
        <span></span>
      </div>
      <form>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <div className='w-2/5'>
            <h3 className='text-lg font-bold text-mate-orange'>
              First Recipe Details
            </h3>
            <div className='my-5'>
              <label
                htmlFor='recipe-name'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Recipe name
              </label>
              <input
                placeholder='Type your recipe name'
                type='text'
                id='recipe-name'
                className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
              />
            </div>
            <div className='my-5'>
              <label
                htmlFor='recipe-description'
                className='mb-2 block text-sm font-medium text-gray-900'
              >
                Recipe Description
              </label>
              <textarea
                placeholder='Put some details of your recipe'
                rows={8}
                id='recipe-description'
                className='block w-full resize-none rounded-xl border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
              ></textarea>
            </div>
          </div>
          <div className='w-2/5 self-start'>
            <h3 className='text-lg font-bold text-mate-orange'>Recipe Image</h3>
            <input
              className='my-6 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none'
              aria-describedby='recipe_image_help'
              id='recipe-image'
              type='file'
            />
          </div>
        </div>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <div className='w-2/5'>
            <h3 className='text-lg font-bold text-mate-black'>
              Recipe ingredients
            </h3>
            <div className='my-5'>
              <input
                placeholder='Ingredient 1'
                type='text'
                className='block w-full rounded-full border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <div className='w-2/5 self-start'>
            <h3 className='text-lg font-bold text-mate-orange'>
              Second add Recipe Steps
            </h3>
            <div>
              <div className='my-5'>
                <label
                  htmlFor='step-1'
                  className='mb-2 block font-bold text-mate-black'
                >
                  Step 1
                </label>
                <textarea
                  placeholder='Put some details of your recipe'
                  rows={8}
                  id='step-1'
                  className='block w-full resize-none rounded-xl border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                ></textarea>
              </div>
            </div>
            <div>
              <div className='my-5'>
                <label
                  htmlFor='step-1'
                  className='mb-2 block font-bold text-mate-black'
                >
                  Step 2
                </label>
                <textarea
                  placeholder='Put some details of your recipe'
                  rows={8}
                  id='step-2'
                  className='block w-full resize-none rounded-xl border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                ></textarea>
              </div>
            </div>
            <div>
              <div className='my-5'>
                <label
                  htmlFor='step-1'
                  className='mb-2 block font-bold text-mate-black'
                >
                  Step 3
                </label>
                <textarea
                  placeholder='Put some details of your recipe'
                  rows={8}
                  id='step-3'
                  className='block w-full resize-none rounded-xl border border-mate-black bg-transparent p-2.5 text-sm text-gray-900 focus:border-mate-black focus:ring-transparent'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='w-2/5 self-start'>
            <Image src={potImg} width={470} height={388} alt='Pot' />;
          </div>
        </div>
      </form>
    </>
  );
}
