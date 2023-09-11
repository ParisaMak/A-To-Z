import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../redux-toolkit/Slice/CartSlice';
import ShoppingBasketComponent from '../components/ShoppingBasketComponent';
import CheckOut from '../components/CheckOut';


function ShoppingCard() {
  const dispatch = useDispatch();

  const shoppingList = useSelector((state) => state.cart.cartItems);

  const itemPrice = Array.isArray(shoppingList) ? shoppingList.map((product) => {
    const price = product?.price;
    const quantity = product.quantity;
    return price * quantity;
  }) : [];
  
  const totalPrice = itemPrice.reduce((total, currentValue) => {
    if (!isNaN(currentValue)) {
      return total + currentValue;
    }
    return total;
  }, 0);

  dispatch(setTotalPrice(totalPrice));

  return (
    <div className="w-full h-full p-4 bg-gray-300 md:p-10">
      <h2 className="pb-4 font-bold text-lg">Shopping Basket</h2>
      {shoppingList.length === 0 ? (
        <p>There is nothing in your shopping bag.</p>
      ) : (
        <div className="w-full flex flex-col gap-4 mb-10 sm:flex-row justify-center items-center sm:items-start">
          <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
            {shoppingList? shoppingList.map((listItem, index) => (
              <ShoppingBasketComponent listItem={listItem} key={index} />
            )):[]}
          </div>
          <div className="h-full w-[300px] sm:w-full lg:w-[500px]">
            <CheckOut totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCard