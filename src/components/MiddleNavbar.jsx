import { useFetchCategoriesQuery } from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';

function MiddleNavbar() {
  const { data ,isLoading } = useFetchCategoriesQuery();
  const categories = Array.isArray(data) ? data : [];

  if (isLoading) {
    return null;
  }

  return (
    <div className='w-full flex flex-row flex-wrap justify-center items-center gap-2 sm:flex-nowrap sm:justify-between '>
      {categories.map((item) => (
        <div  key={item.CatName} className="w-[100px] sm:w-full">
          <Link to={`/${item.CatName}`}>
            <p className='w-full text-center border-[1px] text-[11px] border-black py-2 px-2 hover:bg-red-700 hover:text-white hover:border-white md:text-sm '>
              {item.CatName}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MiddleNavbar;