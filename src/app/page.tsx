import Hero from './components/core/home/hero/hero';
import Pagination from './components/core/home/pagination';
import Filter from './components/core/home/recipes/filter';
import Navbar from './components/core/navbar';

export default function Index() {
  return (
    <main className='bg-mate-400'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Filter></Filter>
      <Pagination></Pagination>
    </main>
  );
}
