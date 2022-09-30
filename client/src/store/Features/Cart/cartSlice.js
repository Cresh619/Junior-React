import { createSlice, current } from '@reduxjs/toolkit';


const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.cart.find((item) => item.product.id === action.payload.product.id);
      if (inCart) {
        inCart.quantity++;
      }else{
        state.cart.push({
          ...action.payload,
          quantity: 1
        })
      }
    },
    getTotalQuantity: (state, action) => {
      console.log(state)
    },
  }
});

export const { 
  addToCart,
  getTotalQuantity
 } = cartSlice.actions;