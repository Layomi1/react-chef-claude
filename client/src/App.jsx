import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
// import Contact from "./Contact";
import Recipe from "./pages/Recipe";
import Ingredients from "./components/Ingredients";
import SearchBar from "./components/SearchBar";
import { getRecipeFromMistral } from "./ai.js";

function App() {
  const [ingredients, setIngredients] = useState([
    "eggs",
    "buuter",
    "flour",
    "ntmeg",
    "clove",
  ]);

  const [recipe, setRecipe] = useState("");

  const addIngredient = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevItems) => [...prevItems, newIngredient]);
    formEl.reset();
  };

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
  }

  // useEffect(() => {
  //   try {
  //     async function getRecipe() {
  //       const response = await getRecipeFromMistral(ingredients);
  //       setRecipe(response);
  //       console.log(response);
  //     }
  //     getRecipe();
  //   } catch (error) {
  //     return {error:'Rcipe can not be generated'}
  //   }
  // }, []);

  return (
    <div className="bg-gray-50 w-full h-screen">
      <Header />
      <main className="px-2 py-10 md:px-12 ">
        <SearchBar handleSubmit={addIngredient} />
        <ul className="">
          {ingredients.length ? (
            <Ingredients handleRecipe={getRecipe} ingredients={ingredients} />
          ) : null}
        </ul>
        {recipe && <Recipe recipe={recipe} />}
      </main>

      {/* <Contact /> */}
    </div>
  );
}

export default App;
