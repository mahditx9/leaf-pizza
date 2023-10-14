import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // PAYLOAD === NEW ITEM
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // PAYLOAD === PIZZA ID
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      // PAYLOAD === PIZZA ID
      const pizzaItem = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizzaItem.quantity++;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // PAYLOAD === PIZZA ID
      const pizzaItem = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizzaItem.quantity--;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;
      if (pizzaItem.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// reselect
export const getCartTotalQuantity = (store) =>
  store.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);

export const getCartTotalPrice = (store) =>
  store.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);
export const getCart = (store) => store.cart.cart;
export const getItemQuantity = (id) => (store) =>
  store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
