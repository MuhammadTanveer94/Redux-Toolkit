// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes, recipesSelector } from "./redux/slices/recipes";

const App = () => {
  const dispatch = useDispatch();
  const { recipes, loading, hasErrors } = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // error handling & map successful query data
  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return recipes.map((recipe) => (
      <div key={recipe.idMeal} className="tile">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="" width="100px" />
      </div>
    ));
  };

  return (
    <section>
      <h1>Recipes</h1>
      <div className="content">{renderRecipes()}</div>
    </section>
  );
};

export default App;
