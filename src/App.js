import { Home, Product, Products, Item, Items, ShoppingCard , Login, SignUp, Favorites  }from './pages';
import MainLayout  from './Layouts/MainLayout';
import { Routes ,Route  }  from 'react-router-dom';
import Profile from  "./components/Profile"
import { useSelector ,useDispatch} from 'react-redux';
import{ getCartItems, getFavoriteItems } from './firebase/firestore';
import  { addToShoppingList, resetCartItems }from './redux-toolkit/Slice/CartSlice'
import {db} from './firebase/firebase.utils';
import {setFavorites,resetFavoriteItems} from './redux-toolkit/Slice/FavoriteSlice';


function App() {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  const fetchItems = async () => {
    try {
      const favoriteItemsPromise = getFavoriteItems(userId, db);
      favoriteItemsPromise.then((favoriteItems) => {
        dispatch(resetFavoriteItems([]));
        favoriteItems.forEach((item) => {
          dispatch(setFavorites(item));
        });
      });
  
      const cartItemsPromise = getCartItems(userId, db);
      cartItemsPromise.then((cartItems) => {
        dispatch(resetCartItems([]));
        cartItems.forEach((item) => {
          dispatch(addToShoppingList(item));
        });
      });
    } catch (error) {
     console.log(error)
    }
  };
  fetchItems();
  
  return (
    <div className='w-full h-full flex flex-col'>
      <Routes>
        <Route
          path='/*'
          element={
            <MainLayout >
              <Routes >
                  <Route index element={<Home />} />
                  <Route path=':CatName' element={<Products />} />
                  <Route path=':CatName/:tagCodes' element={<Product />} />
                  <Route path=':CatName/:tagCodes/:tagCodes' element={<Items />} />
                  <Route path='items/:productcode' element={<Item />} />
                  <Route path='shoppingcart' element={<ShoppingCard />} />
                  <Route path='favorites' element={<Favorites />} />
                  <Route path='/profile' element={<Profile/>} />
              </Routes>
            </MainLayout >
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;