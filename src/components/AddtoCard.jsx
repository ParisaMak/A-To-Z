import { useState } from 'react';
import { CgHeart } from 'react-icons/cg';
import { useDispatch ,useSelector} from 'react-redux';
import { addToShoppingList } from '../redux-toolkit/Slice/CartSlice';
import { setFavorites } from '../redux-toolkit/Slice/FavoriteSlice';
import { addItemInShoppingCart , addItemInFavoriteCart} from "../firebase/firestore.js"

function AddToCard({ filteredItems }) {
  const userId = useSelector((state)=>state.user.userId)
  const product = filteredItems[0];
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const savingProduct = {
    color:product?.color?.text,
    price:product?.whitePrice.price|| product?.whitePrice.value,
    code:product?.code,
    image:product?.galleryDetails[0]?.baseUrl,
    name:product?.name
  }
 
  const { code, price, image, color, name } = savingProduct;

  const handleAddToShoppingList = () => {
    if(!userId){alert("please login before adding to shopping list")}
    if (!size) {
      alert('Please choose a size before adding to shopping list');
      return;
    }
    const item = {
      size,
      quantity,
      code,
      price,
      color,
      image,
      name
    };

    dispatch(addToShoppingList(item));
    addItemInShoppingCart(userId, item);
  };

  const handleAddToFavorite = () => {
    const {code,name} = product
    const price = product?.whitePrice.price|| product?.whitePrice.value;
    const image = product?.galleryDetails[0]?.baseUrl;
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
    <div className="h-full flex flex-col gap-4 p-2 items-start justify-center">
      <div className="w-full flex flex-row gap-2 flex-wrap">
        {product?.variantsList?.map((size ,index) => (
          <p
          key={index}
            className="bg-black text-white p-2 text-[11px] w-[50px]  text-center truncate hover:bg-red-700 hover:text-black cursor-pointer"
            onClick={(e) => {
              setSize(size.size.name);
            }}
          >
            {size.size.name}
          </p>
        ))}
      </div>
      <div className="flex flex-row gap-4 w-full">
        <input
          type="number"
          value={quantity}
          min={0}
          className="border-2 border-black flex-1 px-2 h-[30px]"
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button
          className="bg-black px-2 cursor-pointer text-white h-[30px] hover:text-black hover:bg-red-700"
          onClick={handleAddToShoppingList}
        >
          Add
        </button>
        <button  className="border-[1px] border-black px-2 hover:text-red-700" 
        onClick={handleAddToFavorite}
        ><CgHeart /></button>
      </div>
    </div>
  );
}

export default AddToCard;