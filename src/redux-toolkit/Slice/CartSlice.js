import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: [],
  userId: null
};

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    addToShoppingList: (state, action) => {
      if (state.userId === null) return;
      const { code, quantity, size, color, image, price, name } = action.payload;
      const existingItem = state.cartItems.find(
        item => item?.code === code && item?.size === size
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ code, color, image, price, quantity, size, name });
      }
    },
    removeFromShoppingList: (state, action) => {
      if (state.userId === null) return;
      const { product } = action.payload;
      state.cartItems = state.cartItems.filter(item => {
        return item?.product?.code !== product?.product?.code || item?.size !== product.size;
      });
    },
    updateProductQuantity: (state, action) => {
      if (state.userId === null) return;
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        item => item.code === newItem.code && item.size === newItem.size
      );
      if (existingItem) {
        existingItem.quantity = newItem.quantity;
      }
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    resetCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const {
  addToShoppingList,
  removeFromShoppingList,
  setTotalPrice,
  setUserId,
  resetCartItems,
  updateProductQuantity
} = cartSlice.actions;
  