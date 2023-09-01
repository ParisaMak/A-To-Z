import { useSelector } from 'react-redux';
import ShoppingBasketComponent from '../components/ShoppingBasketComponent';


function ShoppingCard() {

    const shoppingList = useSelector((state) => state.player.cartItems);

    return (
        <div className='bg-white w-full h-full p-10 '>
          <h2 className='pb-4 font-bold text-lg'>Shopping Basket</h2>
          {shoppingList.length === 0 ?(<p>There is nothing in your shopping bag.</p>):(
          <div className=' w-full flex flex-row h-full gap-10 justify-between'>
             <div className='w-full flex flex-col gap-2'>
              {shoppingList.map((listItem)=>{
                return(
               <ShoppingBasketComponent listItem={listItem} />
                )
              })}
             
              </div>
             <div className='bg-gray-300 w-full'> hii
            
             </div>
          </div>
          )}
        </div>
      );
};


export default ShoppingCard