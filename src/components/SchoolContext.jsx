import React from 'react';
import { useFetchProductsByContextQuery } from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';

function SchoolContext() {
  const { data ,isLoading} = useFetchProductsByContextQuery('School');

  if (!Array.isArray(data?.results)) {
    return null;
  }

  return (
    <div className='w-full'>
      <h1 className='mb-2 font-bold text-md'>School Items</h1>
      {isLoading?( <div >Loading...</div>):( 
      <div className='w-full flex flex-row justify-center items-center gap-2'>
        {data.results.map((item) => (
          <div key={item.articleCodes[0]}>
            <Link to={`/items/${item.articleCodes[0]}`} className=' fex-1'>
              <img src={item.images[0].baseUrl} alt="images" className='object-cover max-h-[250px]' />
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default SchoolContext;