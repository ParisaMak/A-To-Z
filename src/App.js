import { Home, Product, Products, Item, Items, ShoppingCard , Login, SignUp, Favorites  }from './pages';
import MainLayout  from './Layouts/MainLayout';
import { useEffect } from 'react';
import { Routes ,Route  }  from 'react-router-dom';
import Profile from  "./components/Profile"
import { useSelector ,useDispatch} from 'react-redux';
import{ getCartItems, getFavoriteItems } from './firebase/firestore';
import { auth } from './firebase/firebase.utils';
import  { addToShoppingList }from './redux-toolkit/Slice/CartSlice'
import {db} from './firebase/firebase.utils';
import {setFavorites} from './redux-toolkit/Slice/FavoriteSlice';
import { setUserId } from './redux-toolkit/Slice/CartSlice';
import { setId } from './redux-toolkit/Slice/FavoriteSlice';
import { login } from './redux-toolkit/Slice/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  
  // const fetchUserDataOnLogin = (userId) => {
  //   return async (dispatch) => {
  //     const cartItems = await getCartItems(userId,db);
  //     const favoriteItems = await getFavoriteItems(userId,db);
  //     cartItems.forEach((item) => {
  //       dispatch(addToShoppingList(item));
  //     });
  //     favoriteItems.forEach((item) => {
  //       dispatch(setFavorites(item));
  //     });
  //   };
  // };

  // useEffect(() => {
  //   dispatch(fetchUserDataOnLogin(userId));
  // }, [dispatch, userId]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        dispatch(setUserId(user.uid));
        dispatch(setId(user.uid));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);


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