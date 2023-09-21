import React from 'react';
import { useParams ,Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
// import ImagesProductsPage from '../components/ImagesProductsPage.jsx';
// import NameImagesProductsPage from '../components/NameImagesProductsPage.jsx';
import { useFetchCategoriesQuery, useFetchProductsByTagCodesQuery } from '../redux-toolkit/Api';

const allowedCategories = [
  'New Arrivals',
  'Shop by Product',
  'Shop by Room',
  'Beauty Products',
  'Women',
  'Men',
  'Kids'
];

const Products = () => {
  const { CatName } = useParams();
  const { data: products, isLoading: isProductsLoading } = useFetchCategoriesQuery();
  const filteredProducts = products?.find((product) => product.CatName === CatName)?.CategoriesArray?.filter((category) => {
    return allowedCategories.includes(category.CatName);
  }) || [];

  const tagCode = Array.isArray(filteredProducts) ? filteredProducts.map((item) => item.CategoriesArray[0].tagCodes[0]) : [];

  const { data: imageFirst, isLoading: isImageFirstLoading } = useFetchProductsByTagCodesQuery(tagCode[0]) || { data: [] };
  // const { data: imageSecond, isLoading: isImageSecondFirstLoading } = useFetchProductsByTagCodesQuery(tagCode[1]) || { data: [] };

  if (isProductsLoading || isImageFirstLoading ) {
    return <div className="flex justify-center items-center w-full h-full">Loading...</div>;
  }

  const TwoImages=imageFirst.slice(0,2);
  console.log(TwoImages)
  return (
    <div className="w-full flex flex-row justify-center items-center gap-4 py-4 px-8">
      <Sidebar
        filteredProducts={filteredProducts}
        CatName={CatName}
        className="w-1/3"
      />
      <div className=" w-full sm:w-2/3 h-full bg-gray-300 justify-center flex flex-col ">
         <div className='  flex flex-row  '>
            {TwoImages?.map((image,index)=>(
              <Link key={index}  to={`/items/${image?.defaultArticle?.code}`} className='w-[50%] '>
                <img className=' max-h-full max-w-full object-cover object-fit' src={image?.galleryImages[0]?.baseUrl} alt={image?.name} />
                <p className='py-4 border-[1px] text-center text-xs  lg:text-base'>{image?.name}</p>
              </Link>
            ))}
         </div>
         <div className='w-full flex justify-center items-center pt-4'>
         {filteredProducts.map((item)=>(
         <Link className='bg-white w-full text-center border-[1px]  border-black px-4 py-2 text-[12px]  hover:bg-red-700 hover:text-white hover:border-white sm:text-sm xl:text-md' to={`/${CatName}/${item?.CatName}`} key={item?.CatName}>{item.CatName}</Link>
          ))}
          </div>

        {/* <ImagesProductsPage
          imageFirst={imageFirst}
          imageSecond={imageSecond}
        />
        <NameImagesProductsPage
          filteredProducts={filteredProducts}
          CatName={CatName}
        /> */}
        </div>
     </div>

  );
};

export default Products;
