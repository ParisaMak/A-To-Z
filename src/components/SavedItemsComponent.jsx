import { removeFromFavoriteList } from '../redux-toolkit/Slice/FavoriteSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function SavedItemsComponent({ listItem ,favorites }) {

  const dispatch = useDispatch();
  const handleRemoveFromFavoriteList = (product) => {
    dispatch(removeFromFavoriteList({product}));
  };

  return (
    <div className="w-[250px] h-[340px] ">
     { (listItem) ?(
      <div className="  border-[1px] border-gray-500 h-full flex flex-col gap-2 p-4 rounded-lg  ">
       <div className="h-[250px] w-auto  object-cover flex justify-center ">
        <Link to={`/items/${listItem?.code}`}><img  
        src={listItem?.images ? listItem?.images[0]?.baseUrl: listItem?.galleryDetails[0]?.baseUrl}
        className=" h-full object-cover" /></Link> 
      </div>
      <div className="relative w-full flex flex-col rounded-sm justify-between px-4">
        <div className=" w-full text-[13px] font-bold flex flex-col justify-between">
          <p className='truncate'>{listItem?.name}</p>
          <p className='truncate'>{listItem?.whitePrice?.value || listItem?.whitePrice?.price } {listItem?.whitePrice?.currencyIso}</p>
        </div>
        <button onClick={() => handleRemoveFromFavoriteList(listItem)}><AiOutlineDelete className="hover:text-gray-500 absolute bottom-2 right-2 text-black" /></button>
      </div>
    </div>

          ):null}
 
    </div>
  );
}

export default SavedItemsComponent;