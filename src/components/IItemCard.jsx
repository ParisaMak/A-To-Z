
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { setFavorites } from '../redux-toolkit/Slice/FavoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import {addItemInFavoriteCart } from "../firebase/firestore.js"

function ItemCard({ item }) {
  const product =item?.articles[0]
  const dispatch = useDispatch();

  const userId = useSelector((state)=>state.user.userId)

  const handleAddToFavorite = (product) => {
    
    const {code,name} = product
    const price = product?.whitePrice.price|| product?.whitePrice.value;
    const image=product?.images[0]?.baseUrl;
    const saveItem = {
      code,
      price,
      name,
      image
    };
    dispatch(setFavorites(saveItem))
    addItemInFavoriteCart(userId ,saveItem)
  }

  return (
    <div className="relative w-[200px] h-[270px] px-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col pt-4 ">
      <div className="w-full h-[200px] top-0">
        <Link to={`/items/${product.code}`} key={product.code}>
          <img
            className="w-full object-cover h-full"
            src={item?.allArticleImages?.[0] || item?.images?.[0]?.baseUrl || ''}
            alt=""
          />
        </Link>
      </div>
      <div className="flex w-full items-start flex-col pt-1 text-xs">
        <div className="flex flex-row justify-between w-full gap-2">
          <p className="truncate">{product.name}</p>
          <p>{product?.whitePrice?.price}</p>
        </div>
      </div>
      <div className="pt-1">
        <AiOutlineHeart className="hover:text-red-700" 
        onClick={() => handleAddToFavorite(product)}
        />
      </div>
    </div>
  );
}
export default ItemCard;