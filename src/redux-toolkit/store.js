import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from './Api';
import favoriteReducer from '../redux-toolkit/Slice/FavoriteSlice';
import cartReducer from '../redux-toolkit/Slice/CartSlice';
import itemReducer from '../redux-toolkit/Slice/ItemSlice';
import userReducer from '../redux-toolkit/Slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const itemPersistConfig = {
  key: 'item',
  storage,
};

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedItemReducer = persistReducer(itemPersistConfig, itemReducer);
const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteReducer);

export const store = configureStore({
    reducer: {
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      user: persistedUserReducer,
      cart: persistedCartReducer,
      item: persistedItemReducer,
      favorite: persistedFavoriteReducer,
    },
    middleware: (getDefaultMiddleware) =>
       process.env.NODE_ENV === 'development'
         ? getDefaultMiddleware({
             immutableCheck: false,
             serializableCheck: false,
           }).concat(categoriesApi.middleware)
         : getDefaultMiddleware().concat(categoriesApi.middleware),
   });
  export const persistor = persistStore(store);