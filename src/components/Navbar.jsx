import { CgProfile, CgHeart } from 'react-icons/cg';
import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import logo from '../assets/H&M-Logo.svg.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const shoppingList = useSelector((state) => state.player.cartItems);
  const linksNames = [
    { to: "/customerservice", label: "Customer Service" },
    { to: "/newsletter", label: "Newsletter" },
    { to: "/findastore", label: "Find a store" },
  ];

  const linksProfile = [
    { to: "/favorites", logo: <CgHeart />, label: "Favorites" },
    { to: "/login", logo: <CgProfile />, label: "Login" },
    { to: "/shoppingcart", logo: <SlBasket />, label: "Shopping" },
  ];

  return (
    <div className="h-[50px] px-4 w-full font-light z-20 text-[15px] sm:px-10 sm:text-sm xl:text-lg">
      <div className="h-[50px] grid grid-cols-2 sm:grid-cols-3">
        <div className="hidden w-full h-full sm:flex justify-between items-center gap-2 text-xs lg:text-sm">
          {linksNames.map((linkName,index) => (
            <Link to={linkName.to} key={index}><p className="truncate">{linkName.label}</p></Link>
          ))}
        </div>
        <div className="relative w-full h-full flex justify-start sm:justify-center">
          <Link to="/">
            <img src={logo} alt="H & M" className="absolute py-4 h-full text-start" />
          </Link>
        </div>
        <div className="h-full w-full mr-4 md:text-sm xl:text-md">
          <div className="w-full h-full flex flex-row justify-end items-center">
            {linksProfile.map((linkProfile,index) => (
              <Link to={linkProfile.to} key={index} className="flex flex-row justify-end items-center gap-1" >
                <div className="pl-2" >{linkProfile.logo}</div>
                <p>{linkProfile.label}</p>
              </Link>
            ))}
            <span>({shoppingList.length})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;