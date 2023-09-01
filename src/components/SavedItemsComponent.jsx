import { removeFromFavoriteList } from '../redux-toolkit/Player';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function SavedItemsComponent({ listItem ,favorites }) {

  const dispatch = useDispatch();
  const handleRemoveFromFavoriteList = (product) => {
    dispatch(removeFromFavoriteList({product}));
  };
 console.log(listItem)
  return (
    <div className="w-[250px] h-[340px]">
      <div className=" border-[1px] border-gray-500 w-full h-full flex flex-col gap-2 p-4 rounded-lg">
        <div className="h-[220px] relative object-cover bg-slate-500 ">
          <Link to={`/items/${listItem?.articles[0]?.code}`}><img src={listItem?.allArticleBaseImages[0]} className="w-full h-full object-cover" /></Link>
           <button onClick={() => handleRemoveFromFavoriteList(listItem)}><AiOutlineDelete className="hover:text-gray-500 absolute bottom-2 right-2 text-black" /></button>
        </div>
        <div className="w-full flex flex-col rounded-sm justify-between px-4">
          <div className=" w-full text-[13px] font-bold flex flex-col justify-between">
            <p className='truncate'>{listItem?.name}</p>
            <p className='truncate'>{listItem?.whitePrice?.value} {listItem?.whitePrice?.currencyIso}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedItemsComponent;