import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { setFavorites } from '../redux-toolkit/Slice/FavoriteSlice';
import { useDispatch } from 'react-redux';

function ItemCard({ item }) {
  const dispatch = useDispatch();
  const handleAddToFavorite = useCallback(() => {
    dispatch(setFavorites(item));
  }, [dispatch, item]);

  return (
    <div className="relative w-[200px] h-[270px] px-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col pt-4 ">
      <div className="w-full h-[200px] top-0">
        <Link to={`/items/${item?.articles[0]?.code}`} key={item?.articles[0]?.code}>
          <img
            className="w-full object-cover h-full"
            src={item?.allArticleImages?.[0] || item?.images?.[0]?.baseUrl || ''}
            alt=""
          />
        </Link>
      </div>
      <div className="flex w-full items-start flex-col pt-1 text-xs">
        <div className="flex flex-row justify-between w-full gap-2">
          <p className="truncate">{item.name}</p>
          <p>{item?.price?.value}</p>
        </div>
      </div>
      <div className="pt-1">
        <AiOutlineHeart className="hover:text-red-700" onClick={handleAddToFavorite}/>
      </div>
    </div>
  );
}
export default ItemCard;