import { removeFromFavoriteList } from '../redux-toolkit/Slice/FavoriteSlice';
import { useDispatch,useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { removeItemFromFavoriteCart} from "../firebase/firestore.js"

function SavedItemsComponent({ listItem }) {

  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.user.userId);
   
  const handleRemoveFromFavoriteList = async(product) => {
    console.log(product)
    dispatch(removeFromFavoriteList(product));
    const {code} =product
    removeItemFromFavoriteCart(userId,code)
  };

  return (
    <div className="w-[250px] h-[340px] ">
     { (listItem) ?(
      <div className="  border-[1px] border-gray-500 h-full flex flex-col gap-2 p-4 rounded-lg  ">
       <div className="h-[250px] w-auto  object-cover flex justify-center ">
        <Link to={`/items/${listItem?.code}`}>
          <img  
        src={listItem?.image}
        className=" h-full object-cover" /></Link> 
      </div>
      <div className="relative w-full flex flex-col rounded-sm justify-between items-center px-4">
        <div className=" w-full text-[13px] font-bold flex flex-col justify-between ">
          <p className='truncate'>{listItem?.name}</p>
          <p className='truncate'>{listItem?.price} USD</p>
          <button 
        onClick={(()=> handleRemoveFromFavoriteList(listItem))}
        ><AiOutlineDelete className="hover:text-gray-500 absolute bottom-2 right-2  text-black" /></button>
        </div>
      </div>
    </div>

          ):null}
 
    </div>
  );
}

export default SavedItemsComponent;