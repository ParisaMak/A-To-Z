import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  userId:null
};

const favoriteSlice = createSlice({
  name: 'Favorite',
  initialState,
  reducers: {
    setId:(state, action)=>{
      state.userId = action.payload
     },
     resetFavoriteItems: (state,action) => {
      state.favorites = action.payload
    },
    setFavorites: (state, action) => {
      if(state.userId===null) return
      const newItem = action.payload;
      const isAlreadyFavorite = state.favorites.some(item => item.code === newItem.code);
      if (!isAlreadyFavorite) {
        state.favorites.push(newItem);
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



  