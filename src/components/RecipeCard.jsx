import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <Link to={`/recipe/${recipe.id}`}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} width="200" />
      </Link>
    </div>
  );
}

export default RecipeCard;