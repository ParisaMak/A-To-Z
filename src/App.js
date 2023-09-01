
import  Navbar from './components/Navbar';
import  Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Items from './pages/Items';
import Item from './pages/Item';
import Footer from './components/Footer';
import { Routes ,Route  }  from 'react-router-dom'
import MultiLevelMenu from './components/MultiLevelMenu';
import ShoppingCard from './pages/ShoppingCard';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Favorites from './pages/Favorites';


function App() {

  return (
    <div className='w-full h-full flex flex-col ' >
      <Navbar />
      <MultiLevelMenu />
      <div className='flex flex-1  '>
      <Routes>
          <Route path="/" element= {<Home />} />;
          <Route path="/:CatName" element= {<Products/>} />;
          <Route path="/:CatName/:tagCodes" element= {<Product />} />;
          <Route path="/:CatName/:tagCodes/:tagCodes" element= {<Items />} />;
          <Route path="/items/:productcode" element= {<Item />} />;
          <Route path="/shoppingcart" element= {<ShoppingCard />} />;
          <Route path='/login' element ={<LogIn />}/>
          <Route path='/SignUp' element ={<SignUp />}/>
           <Route path='/Favorites' element ={<Favorites />}
        />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
