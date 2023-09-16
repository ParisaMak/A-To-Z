import {  removeFromShoppingList,updateProductQuantity } from '../redux-toolkit/Slice/CartSlice';
import { useDispatch ,useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { removeItemInShoppingCart ,getItemIdShoppingCart,updateItemQuantityInFirestore } from "../firebase/firestore.js"


const numberArray = Array.from({ length: 20 }, (_, index) => index + 1);

function ShoppingBasketComponent({ listItem  }) {
  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.user.userId)
  
  const handleRemoveFromShoppingList = async (product) => {
    dispatch(removeFromShoppingList({ product }));
    const itemIds = await getItemIdShoppingCart (userId,product);
    if (itemIds.length > 0) {
      removeItemInShoppingCart(itemIds[0]);
     } else {
      console.error("No matching itemId found for the product");
    }
    };


    const handleChange = async(event) => {
      const quantity = parseInt(event.target.value);
     const{code,color,image,name,price,size}=listItem
     const newItemWithQuantity={
      code,
      name,
      color,
      image,
      price,
      size,
      quantity
     }
     dispatch(updateProductQuantity(newItemWithQuantity));
     const itemIds = await getItemIdShoppingCart(userId, listItem);
     const itemId = itemIds[0]
     if (itemId) {
      await updateItemQuantityInFirestore(itemId, quantity);
    }
    };

  return (
    <div className='w-full flex justify-center items-center bg-white' >
      <div className="w-[300px] flex flex-col justify-center items-center  gap-4 p-8 sm:flex-row sm:p-4  sm:w-full">
        <div className="w-full h-full sm:w-[150px] sm:h-[150px]">
         <Link to={`/items/${listItem?.code}`}>
            <img 
            src={listItem?.image} alt={listItem?.name}
            className="w-full h-full object-cover rounded-sm position-top" />
         </Link> 
        </div>
        <div className="w-full flex flex-col rounded-sm justify-between ">
          <div className="text-[13px] font-bold">
            <p>{listItem?.name}</p>
            <p>{listItem?.price} USD</p>
          </div>
          <div className="w-full flex flex-col text-[11px] gap-2">
            <div className="w-full flex flex-row gap-4">
              <p>Art. no.: {listItem?.code}</p>
              <p>Color: {listItem?.COLOR}</p>
            </div>
            <div className="flex flex-row gap-4">
              <p>Size: {listItem?.size}</p>
              <p>Price: {(listItem?.price)*listItem.quantity} USD  </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <select className="border-2 border-black" onChange={handleChange} value={listItem.quantity} >
              {numberArray.map((number) => (
                <option key={number} >
                  {number}
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