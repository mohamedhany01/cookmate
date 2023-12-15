import Hero from '@/src/app/components/core/home/hero/hero';
import Pagination from '@/src/app/components/core/home/pagination';
import Filter from '@/src/app/components/core/home/recipes/filter';
import Navbar from '@/src/app/components/core/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Filter />
      <Pagination />
    </>
  );
}
