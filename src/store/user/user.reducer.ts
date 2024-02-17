// src\store\user\user.reducer.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/types";



// Define the initial state
const INITIAL_STATE: UserState = {
  currentUser: null,
};

// Create a slice for user state management
export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state: UserState, action: PayloadAction<any>) {
      // Update 'any' with the actual type of currentUser
      state.currentUser = action.payload;
    },
  },
});

// Export action creators and reducer
export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState: INITIAL_STATE,
//   reducers: {
//     setCurrentUser(state, action) {
//       state.currentUser = action.payload;
//     },
//   },
// });

// export const { setCurrentUser } = userSlice.actions;
// export const userReducer = userSlice.reducer;
