import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from './Api';
import playerReducer from './Player';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

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
      getDefaultMiddleware().concat(categoriesApi.middleware),
  });
  export const persistor = persistStore(store);