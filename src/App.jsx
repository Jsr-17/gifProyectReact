import React, { useState } from "react";
import { AddCategory,GifGrid } from "./assets/components";

export const App = () => {
  const [categories, setCategories] = useState(['Naruto']);

  const onCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onNewCategory={onCategory} />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  );
};
