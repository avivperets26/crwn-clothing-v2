import React from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview: React.FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <React.Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </React.Fragment>
  );
};

export default CategoriesPreview;
