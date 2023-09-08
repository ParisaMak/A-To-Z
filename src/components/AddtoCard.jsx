import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToShoppingList } from '../redux-toolkit/Slice/CartSlice';

function AddToCard({ filteredItems }) {
  const product = filteredItems[0];
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToShoppingList = () => {
    const item = {
      product,
      size,
      quantity,
    };
    dispatch(addToShoppingList(item));
  };

  return (
    <div className="h-full flex flex-col gap-4 p-2 items-start justify-center">
      <div className="w-full flex flex-row gap-2 flex-wrap">
        {product?.variantsList?.map((size) => (
          <p
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
      </div>
    </div>
  );
}

export default AddToCard;