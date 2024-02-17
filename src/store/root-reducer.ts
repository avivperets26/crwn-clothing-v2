// src\store\root-reducer.js

import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { CartState, CategoriesState, UserState } from "../types/types"; // Import UserState type from types file


export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
} as {
  user: (state: UserState, action: any) => UserState;
  categories: (state: CategoriesState, action: any) => CategoriesState;
  cart: (state: CartState, action: any) => CartState;
});



// import { combineReducers } from "@reduxjs/toolkit";

// import { userReducer } from "./user/user.reducer";
// import { categoriesReducer } from "./categories/category.reducer";
// import { cartReducer } from "./cart/cart.reducer";

// export const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });
