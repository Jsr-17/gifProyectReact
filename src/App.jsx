import React, { useState } from "react";
import { AddCategory } from "./assets/components/AddCategory";

export const App = () => {
  const [categories, setCategories] = useState(['Naruto', 'Dragon Ball']);

  const onCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onNewCategory={onCategory} />

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
