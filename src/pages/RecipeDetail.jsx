import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../services/api";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetail(id);
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} width="300" />

      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  );
}

export default RecipeDetail;