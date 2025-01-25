import React from "react";
import Button from "./Button";

const Ingredients = ({ handleRecipe, ingredients }) => {
  return (
    <section>
      <h2 className="my-4 text-4xl font-bold">Ingredients on hand:</h2>
      <ul>
        {ingredients.map((item, id) => (
          <li key={id}>{item} </li>
        ))}
      </ul>
      {ingredients.length > 4 ? (
        <div className="max-w-[500px] bg-gray-200 p-6 rounded-xl  flex justify-between">
          <div>
            <h2 className="font-semibold mb-2 "> Ready for a recipe?</h2>
            <p className="text-sm">
              Gnerate a recipe from your list of ingredients
            </p>
          </div>
          <Button
            text="Get Recipe"
            background={"#fb923c"}
            className="rounded-md text-nowrap text-sm"
            onclick={handleRecipe}
          />
        </div>
      ) : null}
    </section>
  );
};

export default Ingredients;
