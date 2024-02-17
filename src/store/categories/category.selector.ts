import { createSelector, Selector } from "reselect";
import { CategoriesState, CategoryMap, RootState } from "../../types/types";

const selectCategoryReducer: Selector<RootState, CategoriesState> = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
