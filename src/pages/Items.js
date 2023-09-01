import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchProductsByTagCodesQuery } from "../redux-toolkit/Api";
import { AiOutlineHeart } from 'react-icons/ai';
import { setFavorites } from '../redux-toolkit/Player';
import {  useDispatch } from 'react-redux';

function Items() {
  const dispatch = useDispatch();

  const handleAddToFavorite = (item) => {
    console.log(item)
    dispatch(setFavorites(item));
};
  const { tagCodes } = useParams();
  const { data: items ,isLoading } = useFetchProductsByTagCodesQuery(tagCodes);
  if (isLoading) {
    return <div className='flex justify-center items-center  w-full h-full'>Loading...</div>;
  }

  return (
    <main className="w-full h-full flex justify-center items-center  ">
      <div className="h-full flex flex-row gap-4 flex-wrap items-center justify-center pt-4">
        {Array.isArray(items) ?
          items.map((item) => (
            
              <div className="relative w-[200px] h-[270px] px-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col pt-4 ">
                <div className="w-full h-[200px] top-0">
                  <Link to={`/items/${item?.articles[0]?.code}`} key={item?.articles[0]?.code}><img
                    className="w-full object-cover h-full"
                    src={item?.allArticleImages?.[0] || item?.images?.[0]?.baseUrl || ''}
                    alt=""
                   /></Link>
                </div>
                <div className="flex w-full items-start flex-col pt-1 text-xs">
                  <div className="flex flex-row justify-between w-full">
                    <p className="truncate">{item.name}</p>
                    <p>{item?.price?.value}</p>
                  </div>
                </div>
                <div className="pt-1">
                   <AiOutlineHeart className="hover:text-red-700" onClick={() => handleAddToFavorite(item)}/>
                </div>
              </div>
      
          )) : <div>No items found.</div>}
      </div>
    </main>
  );
}

export default Items;
