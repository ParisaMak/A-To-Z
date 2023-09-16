import {useFetchProductsByContextQuery} from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';
import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const PartyContext = React.memo(() => {
  const { data, isLoading ,isError } = useFetchProductsByContextQuery('Party');
  const { results } = data || {};

  if (!Array.isArray(results)) {
    return null;
  }

  const screenWidth = window.innerWidth;
  const itemsToShow = screenWidth < 640 ? data.results.slice(0, 3) : data.results;

  return (
    <div className='w-full '>
      <h1 className='mb-2 font-bold text-md'>Party Items</h1>
      {isLoading || isError? null:(
      <div className='w-full flex flex-row justify-between items-center gap-2'>
        {itemsToShow.map((item) => (
          <div key={item.articleCodes[0]} className=' fex-1'>
            <Link to={`/items/${item.articleCodes[0]}`}>
              < LazyLoadImage  src={item.images[0]?.baseUrl} alt="images"  className='object-cover max-h-[250px]' />
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
});

export default PartyContext;