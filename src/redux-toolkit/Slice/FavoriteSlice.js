import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  userId:null
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setId:(state, action)=>{
      state.userId = action.payload
     },
     resetFavoriteItems: (state,action) => {
      state.favorites = action.payload
    },
    setFavorites: (state, action) => {
      if (state.userId === null) return
        const {code,image,price ,name } = action.payload;
        const existingItem = state.cartItems.find(
          item => item?.product?.code === code 
        );
        if (!existingItem) {
          const newItem = { code,image,price, name };
          state.cartItems = [...state.cartItems, newItem];
        }
      },
    removeFromFavoriteList: (state, action) => {
      if(!state.userId) return
      const product  = action.payload;
      state.favorites = state.favorites.filter(item => {
        return item?.code !== product?.product?.code
        });
    },
 
  },
});

export default favoriteSlice.reducer;
export const { setFavorites, removeFromFavoriteList ,setId ,resetFavoriteItems } = favoriteSlice.actions;



  