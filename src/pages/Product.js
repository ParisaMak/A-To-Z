import { Link, useParams } from 'react-router-dom';
import { useFetchCategoriesQuery } from '../redux-toolkit/Api';

function Product() {
  const { data } = useFetchCategoriesQuery();
  const { CatName } = useParams();
  const { tagCodes } = useParams();
  const categoryProduct = Array.isArray(data) ? data?.filter(product => product?.CatName === CatName) : null;
  const productName = Array.isArray(categoryProduct) ? categoryProduct[0]?.CategoriesArray?.find(obj => obj.CatName === tagCodes) : null;
  
  return (
    <main className='w-full flex justify-center items-center p-20 '>
      <div className='h-full flex flex-row gap-4 flex-wrap items-center justify-center pt-4'>
        {(productName?.CategoriesArray)?.map((items,index) => {
          return (
            <Link key={index} to={`/${CatName}/${tagCodes}/${items?.tagCodes[0]}`}>
              <div className='w-[200px] h-[50px] bg-gray-300 flex justify-center items-center hover:bg-red-700 hover:text-white hover:border-white'>
                {items.CatName}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Product;