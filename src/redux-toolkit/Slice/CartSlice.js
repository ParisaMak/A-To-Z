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
      if (state.userId === null) {
        alert('Please login to add items to your shopping list.');
      } else {
        const { product, quantity, size } = action.payload;

        const existingItem = state.cartItems.find(
          item => item.product.code === product.code && item.size === size
        );
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          const newItem = { product, quantity, size };
          state.cartItems = [...state.cartItems, newItem];
        }
      }
    },
    removeFromShoppingList: (state, action) => {
      const {product}  = action.payload;
      state.cartItems = state.cartItems.filter(item => {
        return item?.product?.code!== product?.product.code || item?.size!== product.size
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



  