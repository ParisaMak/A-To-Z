import {CgProfile ,  CgHeart } from 'react-icons/cg';
import{SlBasket} from 'react-icons/sl';
import { Link }  from 'react-router-dom';
import logo from '../assets/H&M-Logo.svg.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const shoppingList = useSelector((state) => state.player.cartItems);
  console.log(shoppingList)
  return (
    <div className="text-xs h-[50px] w-full font-light z-20 md:text-sm xl:text-lg">
      <div className="h-full px-4 flex items-center py-4 gap-3 flex-row justify-between">
        <div className='flex justify-between items-center gap-2 '>
          <Link><p>Customer Service</p></Link>
          <Link><p>Newsletter</p></Link>
          <Link><p>Find a store</p></Link>
        </div>
        <div className='relative h-full'>
          <Link to='/'><img src={logo} alt="H & M" className='h-full w-auto'/></Link>
        </div>
        <div className='mr-4 md:text-sm'>
          <div className="flex gap-4 items-center pr-2">
            <div className='flex items-center gap-2 flex-row '>
              <div>
                <Link className='flex flex-row justify-center items-center gap-1' to={'/login'} >
                  <p>Login</p>
                  <CgProfile />
                </Link>
              </div>
              <div>
                <Link className='flex flex-row justify-center items-center gap-1' to={'/Favorites'}>
                  <p>Favorites</p>
                  <CgHeart />
                </Link>
              </div>
              <div>
                <Link to={'./shoppingcart'} className='flex flex-row justify-center items-center gap-1'>
                  <p>Shopping <span>( {shoppingList.length} )</span></p>
                  <SlBasket />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;