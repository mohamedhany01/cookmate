import AddNewRecipe from './components/core/addReciepe/add';
import Hero from './components/core/home/hero/hero';
import Pagination from './components/core/home/pagination';
import Filter from './components/core/home/recipes/filter';
import Navbar from './components/core/navbar';

export default function Index() {
  return (
    <main className='bg-mate-400'>
      <Navbar></Navbar>

      {/* Home */}
      {/* <Hero></Hero>
      <Filter></Filter>
      <Pagination></Pagination> */}

      {/* Add new recipe */}
      <AddNewRecipe></AddNewRecipe>
    </main>
  );
}
