import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    currentUser: null ,
    userId:null

  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.userId = action.payload.uid
    },
    logout: (state) => {
      state.currentUser = null;
      state.userId = null
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;