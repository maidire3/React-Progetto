import { useState } from "react";
import SearchBar from "../components/SearchBar";
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

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} width="200" />
        </div>
      ))}
    </div>
  );
}

export default Home;