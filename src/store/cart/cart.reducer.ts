import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../types/types";

// Define the initial state
const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],

};

// Define your reducer functions
const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {

  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if existingCartItem is defined
  if (existingCartItem) {
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  // If cart item is not found, return the original cart items array
  return cartItems;
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// Create a slice for cart state management
export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state: CartState, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state: CartState, action: PayloadAction<CartItem>) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state: CartState, action: PayloadAction<CartItem>) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state: CartState, action: PayloadAction<CartItem>) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

// Export action creators and reducer
export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
