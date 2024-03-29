import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/types";

// Define the initial state
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

// Create a slice for user state management
export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state: UserState, action: PayloadAction<any>) {
      return {
        ...state,
        currentUser: action.payload
      };
    },
  },
});

// Export action creators and reducer
export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
