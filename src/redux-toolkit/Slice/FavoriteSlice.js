import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
  userId: null
};

const favoriteSlice = createSlice({
  name: 'favoriteCart',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    resetFavoriteItems: (state, action) => {
      state.favorite = action.payload;
    },
    setFavorites: (state, action) => {
      if (!state.userId) return;
      
      const newItem = action.payload;
      
      if (state.favorite.find((item) => item.code === newItem.code)) {
        return state;
      } else {
        state.favorite.push(newItem);
      }
    },
    removeFromFavoriteList: (state, action) => {
      if (!state.userId) return;
      
      const product = action.payload;
      
      state.favorite = state.favorite.filter((item) => {
        return item?.code !== product?.code;
      });
    },
  },
});

export default favoriteSlice.reducer;

export const {
  setFavorites,
  removeFromFavoriteList,
  setId,
  resetFavoriteItems,
} = favoriteSlice.actions;
  