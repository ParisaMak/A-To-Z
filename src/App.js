import { Home, Product, Products, Item, Items, ShoppingCard , Login, SignUp, Favorites  }from './pages';
import MainLayout  from './Layouts/MainLayout';
import { Routes ,Route  }  from 'react-router-dom'


function App() {
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