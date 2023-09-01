import {useFetchProductsByContextQuery} from '../redux-toolkit/Api';
import { Link } from 'react-router-dom';


function PartyContext() {
  const { data  ,isLoading} = useFetchProductsByContextQuery('Party');
  if (!Array.isArray(data?.results)) {
    return null;
  }
  return (
    <div className='w-full'>
      <h1 className='mb-2 font-bold text-md'>Party Items</h1>
      {isLoading?( <div >Loading...</div>):( 
      <div className='w-full flex flex-row justify-center items-center gap-2'>
        {data.results.map((item) => (
          <div key={item.articleCodes[0]} className=' fex-1'>
            <Link to={`/items/${item.articleCodes[0]}`}>
              <img src={item.images[0]?.baseUrl} alt="images"  className='object-cover max-h-[250px]' />
            </Link>
          </div>
        ))}
      </div>)}
 
    </div>
  );
};

export default PartyContext;