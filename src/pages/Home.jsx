import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../services/api";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <SearchBar onSearch={handleSearch} />

      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;