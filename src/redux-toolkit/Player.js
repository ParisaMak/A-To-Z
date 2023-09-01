import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  cartItems: [],
  favorites: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addToShoppingList: (state, action) => {
      const { product, quantity, size } = action.payload;
      const newItem = { product, quantity, size };
      state.cartItems = [...state.cartItems, newItem];
      
    },removeFromShoppingList: (state, action) => {
      const {product}  = action.payload;
      state.cartItems = state.cartItems.filter(item => {
        return item?.product?.code!== product?.product.code || item?.size!== product.size
      });
    },
    setFavorites: (state, action) => {
      const newItem = action.payload;
      const isAlreadyFavorite = state.favorites.some(item => item.code === newItem.code);
      if (!isAlreadyFavorite) {
        state.favorites.push(newItem);
      }
    },
    removeFromFavoriteList: (state, action) => {
      const product  = action.payload;
      state.favorites = state.favorites.filter(item => {
      console.log('item',item?.articles[0]?.code)
      console.log('product',product?.product?.articles[0]?.code)
        return item?.articles[0]?.code!== product?.product?.articles[0]?.code
        });
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default playerSlice.reducer;
export const { addToShoppingList, setItems, setFavorites,removeFromShoppingList ,removeFromFavoriteList } = playerSlice.actions;



  