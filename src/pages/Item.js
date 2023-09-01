import { useParams } from 'react-router-dom';
import { ImageItem ,ImagesItem } from '../components';
import DescriptionItem from '../components/DescriptionItem';
import { setItems } from '../redux-toolkit/Player';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import {  useFetchProductsByProductCodesQuery } from '../redux-toolkit/Api';
import AddtoCard from '../components/AddtoCard';


function Item() {
    const { productcode } = useParams();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.player.items);
    const { data: itemsData, isLoading: isItemsLoading, isError: isItemsError } = useFetchProductsByProductCodesQuery(productcode);
  
    useEffect(() => {
      if (itemsData) {
        dispatch(setItems(itemsData));
      }
    }, [itemsData, dispatch]);
  
  
      if (isItemsLoading) {
          return <div>Loading...</div>;
      }
  
      if (isItemsError) {
          return <div>Error occurred while fetching data.</div>;
      }
  const filteredItems = items.filter((article) => article.code === productcode);

  return (
    <div className='flex justify-center items-center w-full '>
    <div className=' h-full px-40 flex flex-col w-[400px] justify-center items-center md:w-full md:flex-row'>
       <div className=''> 
        <ImageItem filteredItems={filteredItems}/>
       </div>
       <div className='flex flex-col justify-between bg-gray-100 w-[400px] md:w-full overflow-scroll h-[550px] scrollbar-hide'>
          <DescriptionItem filteredItems={filteredItems} />
          <AddtoCard filteredItems={filteredItems}/>
          <ImagesItem items={items}  />
       </div>
    </div>
    </div>
  );
}

export default Item;
