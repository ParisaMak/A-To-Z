import { useParams } from 'react-router-dom';
import { ImageItem,ImagesItem,DescriptionItem,AddtoCard } from '../pages';
import { useMemo} from 'react';
import {  useFetchProductsByProductCodesQuery } from '../redux-toolkit/Api';

const Item=()=>{
    const { productcode } = useParams();

    const { data: itemsData, isLoading: isItemsLoading, isError: isItemsError } = useFetchProductsByProductCodesQuery(productcode);
  
    const filteredItems = useMemo(() => itemsData?.filter((article) => article.code === productcode), [itemsData, productcode]);
  
      if (isItemsLoading) {
          return <div className='w-full h-full flex justify-center items-center'>Loading...</div>;
      }
  
      if (isItemsError) {
          return <div>Error occurred while fetching data.</div>;
      }

      return (
        <div className='w-full flex justify-center items-center md:p-10 lg:py-10 lg:px-32'>
        <div className='w-full flex flex-col items-center justify-center sm:w-[450px] md:flex-row md:w-auto md:h-[520px]  '>
           <div className='md:w-[350px]'> 
            <ImageItem filteredItems={filteredItems}/>
           </div>
           <div className='w-full flex flex-col justify-between bg-gray-100 md:overflow-scroll scrollbar-hide  md:h-[520px] lg:px-10'>
              <DescriptionItem filteredItems={filteredItems} />
              <AddtoCard filteredItems={filteredItems}/>
              <ImagesItem items={itemsData}  />
           </div>
        </div>
        </div>
    
      );
    }

export default Item;
