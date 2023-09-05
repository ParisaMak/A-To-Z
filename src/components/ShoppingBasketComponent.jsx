import { removeFromShoppingList ,setTotalPrice } from '../redux-toolkit/Player';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ShoppingBasketComponent({ listItem }) {
  const price = listItem?.product?.whitePrice.price ;
  const quantity= listItem.quantity;
  const totalPrice = price * quantity
  const dispatch = useDispatch();

  const handleRemoveFromShoppingList = (product) => {
    dispatch(removeFromShoppingList({ product }));
  };

  dispatch(setTotalPrice(totalPrice));

  const numberArray = Array.from({ length: 20 }, (_, index) => index + 1);
   console.log(listItem )
  return (
    <div className='w-full flex justify-center items-center bg-white' >
      <div className="w-[300px] flex flex-col justify-center items-center  gap-4 p-8 sm:flex-row sm:p-4  sm:w-full">
        <div className="w-full h-full sm:w-[150px] sm:h-[150px]">
         <Link to={`/items/${listItem?.product.code}`}>
            <img src={listItem?.product?.galleryDetails[0]?.baseUrl} className="w-full h-full object-cover rounded-sm" />
         </Link> 
        </div>
        <div className="w-full flex flex-col rounded-sm justify-between ">
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
              <p>Price: {totalPrice}:{listItem?.product?.whitePrice.currency}</p>
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <select className="border-2 border-black">
              {numberArray.map((number) => (
                <option key={number} value={number}>
                  {listItem.quantity}
                </option>
              ))}
            </select>
            <button onClick={() => handleRemoveFromShoppingList(listItem)}><AiOutlineDelete className="hover:text-gray-500"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasketComponent;