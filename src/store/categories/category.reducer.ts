import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, Category } from "../../types/types";

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state: CategoriesState, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
