// src\store\categories\category.selector.ts
import { createSelector, Selector } from "reselect";
import { CategoriesState, Category, RootState } from "../../types/types";




const selectCategoryReducer: Selector<RootState, CategoriesState> = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce<{ [key: string]: any[] }>((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);




// import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );
