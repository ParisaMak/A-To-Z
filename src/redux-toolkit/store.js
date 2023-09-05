import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from './Api';
import playerReducer from './Player';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, playerReducer);

export const store = configureStore({
    reducer: {
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      player: persistedReducer,
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