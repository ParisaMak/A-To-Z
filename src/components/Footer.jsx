import { Link } from 'react-router-dom';
import {useFetchCategoriesQuery} from '../redux-toolkit/Api';

const Footer =() => {
  const { data } = useFetchCategoriesQuery();

  if (!Array.isArray(data) || data.length === 0) {
    return null; 
  }
   const LinksNames=[
   { to: "/faq", label: "FAQ" },
   { to: "/pages", label: "Pages" },
   { to: "/stores", label: "Stores" },
   { to: "/cookies", label: "Cookies" },]
  return (
   
      <div className='bg-gray-300 w-full px-4 py-[15px]  h-[150px] sm:px-20'>
        <div className='flex flex-col justify-center md:grid grid-cols-4  gap-4'>
          <div className='flex flex-row w-full justify-between text-[11px] md:flex-col '>
            <h2 className=' hidden text-sm mb-1 md:block'>Shop</h2>
            {data.map((item) => (
              <div className='w-full' key={item.CatName}>
                <Link to={`/${item.CatName}`}>
                  <p className='text-[12px] text-center md:text-start  '>{item.CatName}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className='flex flex-row w-full justify-center text-[11px] md:flex-col md:justify-start  '>
            <h2 className='mb-1 hidden text-sm md:block'>Links</h2>
            {LinksNames?.map((linkName)=>(
                <div className='w-full ' key={linkName.label}>
              <Link>
              <p className='text-[12px] text-center md:text-start'>{linkName.label}
              </p>
              </Link>
              </div>
            ))}
          </div>
          <div className='hidden md:block'>
            <h2 className='text-sm '>About</h2>
            <p className="text-[12px]  mt-1 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis doloribus, alias delectus.
            </p>
          </div>
          <div className='hidden md:block'>
            <h2 className='text-sm'>Contact</h2>
            <p className="text-[12px]  mt-1 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis doloribus, alias delectus.
            </p>
          </div>
        </div>
      </div>

  );
}

export default Footer;