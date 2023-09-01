import { useFetchCategoriesQuery } from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';

function MiddleNavbar() {
  const { data ,isLoading } = useFetchCategoriesQuery();
  
  let categories = [];
  if (Array.isArray(data)) {
    categories = data;
  }
  if (isLoading ) {
    return <div></div>;
  }

  return (
    <div className='w-full flex flex-row justify-between items-center gap-2 '>
      {categories.map((item) => (
        <div className='w-full text-center' key={item.CatName}>
          <Link to={`/${item.CatName}`}>
            <p className='border-[2px] text-[10px] struncate border-black rounded-3xl py-2 hover:bg-red-700 hover:text-white hover:border-white sm:text-sm'>
              {item.CatName}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MiddleNavbar;