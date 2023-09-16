import React from 'react';
import { useFetchProductsByContextQuery } from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

function SchoolContext() {
  const { data ,isLoading ,isError} = useFetchProductsByContextQuery('School');

  if (!Array.isArray(data?.results)) {
    return null;
  }
  const screenWidth = window.innerWidth;
  const itemsToShow = screenWidth < 640 ? data.results.slice(0, 3) : data.results;

  return (
    <div className='w-full '>
      <h1 className='mb-2 font-bold text-md'>School Items</h1>
      {isLoading || isError? null:(
      <div className='w-full flex flex-row justify-between items-center gap-2'>
        {itemsToShow.map((item) => (
          <div key={item.articleCodes[0]}>
            <Link to={`/items/${item.articleCodes[0]}`} className=' fex-1'>
              < LazyLoadImage src={item.images[0].baseUrl} alt="images" className='object-cover max-h-[250px]' />
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default SchoolContext;