import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import ImagesProductsPage from '../components/ImagesProductsPage.jsx';
import NameImagesProductsPage from '../components/NameImagesProductsPage.jsx';
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
  const { data: imageSecond, isLoading: isImageSecondLoading } = useFetchProductsByTagCodesQuery(tagCode[1]) || { data: [] };

  if (isProductsLoading || isImageFirstLoading || isImageSecondLoading) {
    return <div className="flex justify-center items-center w-full h-full">Loading...</div>;
  }

  return (
    <div className="w-full flex flex-row justify-center items-center gap-4 py-4 ">
      <Sidebar
        filteredProducts={filteredProducts}
        CatName={CatName}
      />
      <div className="flex flex-col w-full justify-center px-10">
        <ImagesProductsPage
          imageFirst={imageFirst}
          imageSecond={imageSecond}
        />
        <NameImagesProductsPage
          filteredProducts={filteredProducts}
          CatName={CatName}
        />
      </div>
    </div>
  );
};

export default Products;