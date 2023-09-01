import { removeFromShoppingList } from '../redux-toolkit/Player';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai';

function ShoppingBasketComponent({ listItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromShoppingList = (product) => {
    dispatch(removeFromShoppingList({ product }));
  };

  const numberArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div >
      <div className="bg-white border-[1px] border-gray-500 w-full flex flex-row gap-4 p-4 rounded-lg">
        <div className="w-[150px] h-[150px]">
          <img src={listItem?.product?.galleryDetails[0]?.baseUrl} className="bw-full h-full object-cover rounded-sm" />
        </div>
        <div className="w-full flex flex-col rounded-sm justify-between">
          <div className="text-[13px] font-bold">
            <p>{listItem?.product?.name}</p>
            <p>{listItem?.product?.whitePrice.price} {listItem?.product?.whitePrice.currency}</p>
          </div>
          <div className="w-full flex flex-col text-[11px] gap-2">
            <div className="w-full flex flex-row gap-4">
              <p>Art. no.: {listItem?.product?.code}</p>
              <p>Color: {listItem?.product?.colourDescription}</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>Size: {listItem?.size}</p>
              <p>Price: {listItem?.product?.whitePrice.price}:{listItem?.product?.whitePrice.currency}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleRemoveFromShoppingList(listItem)}><AiOutlineHeart className="hover:text-red-700" /></button>
            <select className="border-2 border-black">
              {numberArray.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button onClick={() => handleRemoveFromShoppingList(listItem)}><AiOutlineDelete className="hover:text-gray-500" /></button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasketComponent;