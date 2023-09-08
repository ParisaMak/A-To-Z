import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from './Api';
import favoriteReducer from '../redux-toolkit/Slice/FavoriteSlice';
import cartReducer from '../redux-toolkit/Slice/CartSlice';
import itemReducer from '../redux-toolkit/Slice/ItemSlice';
import userReducer from '../redux-toolkit/Slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedItemReducer = persistReducer(persistConfig, itemReducer);
const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);

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