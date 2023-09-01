import { Link } from 'react-router-dom';
import {useFetchCategoriesQuery} from '../redux-toolkit/Api';

const Footer =() => {
  const { data } = useFetchCategoriesQuery();

  if (!Array.isArray(data) || data.length === 0) {
    return null; // or render a loading state if needed
  }

  return (
    <div>
      <div className='bg-gray-300 w-full flex flex-col px-10 pt-[15px] border-t-2 h-[150px] mt-10 shrink-0'>
        <div className='px-12 flex flex-row justify-between md:grid grid-cols-4'>
          <div className='flex flex-col'>
            <h2>Shop</h2>
            {data.map((item) => (
              <div className='w-full' key={item.CatName}>
                <Link to={`/${item.CatName}`}>
                  <p className='text-[11px]'>{item.CatName}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h2>Links</h2>
            <Link to="/faq">
              <p className="text-[11px] mt-2">FAQ</p>
            </Link>
            <Link to="/pages">
              <p className="text-[11px]">Pages</p>
            </Link>
            <Link to="/stores">
              <p className="text-[11px]">Stores</p>
            </Link>
            <Link to="/cookies">
              <p className="text-[11px]">Cookies</p>
            </Link>
          </div>
          <div className='hidden md:block'>
            <h2>About</h2>
            <p className="text-[11px] font-md mt-2 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis doloribus, alias delectus quam nam nulla.
            </p>
          </div>
          <div className='hidden md:block'>
            <h2>Contact</h2>
            <p className="text-[11px] font-md mt-2 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis doloribus, alias delectus quam nam nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;