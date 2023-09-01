import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchCategoriesQuery, useFetchProductsByTagCodesQuery } from '../redux-toolkit/Api';

const Products = React.memo(() => {
  const { CatName } = useParams();
  const { data: products, isLoading: isProductsLoading } = useFetchCategoriesQuery();
  const filteredProducts = products?.find((product) => product.CatName === CatName)?.CategoriesArray?.filter((category) => {
    const allowedCategories = [
      'New Arrivals',
      'Shop by Product',
      'Shop by Room',
      'Beauty Products',
      'Women',
      'Men',
      'Kids'
    ];
    return allowedCategories.includes(category.CatName);
  }) || [];
  const tagCode = Array.isArray(filteredProducts) ? filteredProducts.map((item) => item?.CategoriesArray[0]?.tagCodes[0]) : [];
  const { data: imageFirst, isLoading: isImageFirstLoading } = useFetchProductsByTagCodesQuery(tagCode[0]) || { data: [] };
  const { data: imageSecond, isLoading: isImageSecondLoading } = useFetchProductsByTagCodesQuery(tagCode[1]) || {
    data: []
  };

  if (isProductsLoading || isImageFirstLoading || isImageSecondLoading) {
    return <div className='flex justify-center items-center  w-full h-full'>Loading...</div>;
  }

  return (
    <div className='w-full flex flex-row justify-center items-center gap-4 py-4 pr-10 '>
      <div className='bg-gray-300 w-1/3 h-full '>
        {Array.isArray(filteredProducts) ? (
          filteredProducts.map((item) => (
            <div className='w-full text-start text-xs pl-4 ' key={item?.CatName}>
              <Link to={`/${CatName}/${item?.CatName}`}>
                <p className='text-[10px] text-sm font-bold py-2 sm:text-sm'>{item?.CatName}</p>
              </Link>
              {item?.CategoriesArray?.map((article) => (
                <Link to={`/${CatName}/${item?.CatName}/${article.tagCodes[0]}`} key={article?.CatName}>
                  <p>{article?.CatName}</p>
                </Link>
              ))}
            </div>
          ))
        ) : (
          []
        )}
      </div>
      <div className='relative w-2/3 bg-gray-300 h-full flex justify-between flex-col'>
        <div className='flex flex-row justify-center items-center object-fit h-auto text-center'>
          {imageFirst.length > 0 && (
            <div className='flex flex-col'>
              <Link to={`/items/${imageFirst[0]?.articleCodes[0]}`}>
                <img src={imageFirst[0]?.allArticleBaseImages[0]} alt="" className='max-w-full w-auto max-h-full h-auto' />
              </Link>
              <p className='pt-2'>{imageFirst[0].name}</p>
            </div>
          )}
          {imageSecond.length > 0 && (
            <div className='flex flex-col'>
              <Link to={`/items/${imageSecond[0]?.articleCodes[0]}`}>
                <img src={imageSecond[0]?.allArticleBaseImages[0]} alt="" className='max-w-full w-auto max-h-full ' />
              </Link>
              <p className='pt-2'>{imageSecond[0].name}</p>
            </div>
          )}
        </div>
        <div className='flex flex-row items-center justify-center gap-8 h-auto py-4'>
          {Array.isArray(filteredProducts) &&
            filteredProducts.map((item) => (
              <Link to={`/${CatName}/${item?.CatName}`} key={item?.CatName}>
                <div className='bg-white rounded-sm px-4 py-2 hover:bg-red-700 hover:text-white hover:border-white sm:text-sm'>
                  {item?.CatName}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
});

export default Products;