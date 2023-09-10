import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice:[]
};

const cartSlice = createSlice({
  userId: null,
  name: 'cart',
  initialState,
  reducers: {
    setUserId:(state, action)=>{
      state.userId=action.payload
  
    },
    addToShoppingList: (state, action) => {
      if (state.userId === null) return
        const {code, quantity, size,color,image,price ,name } = action.payload;
        const existingItem = state.cartItems.find(
          item => item?.product?.code === code && item?.size === size
        );
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          const newItem = { code,color,image,price, quantity, size ,name };
          state.cartItems = [...state.cartItems, newItem];
        }
      },
    removeFromShoppingList: (state, action) => {
      const {product}  = action.payload;
      state.cartItems = state.cartItems.filter(item => {
        return item?.product?.code!== product?.product?.code || item?.size!== product.size
      });
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    resetCartItems: (state,action) => {
      state.cartItems = action.payload
    },
  },
});

export default cartSlice.reducer;
export const { addToShoppingList, removeFromShoppingList, setTotalPrice , setUserId ,resetCartItems } = cartSlice.actions;



  