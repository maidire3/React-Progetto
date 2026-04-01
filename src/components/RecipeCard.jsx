import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <Link className="recipe-card__link" to={`/recipe/${recipe.id}`}>
        <div className="recipe-card__image-wrapper">
          <img className="recipe-card__image" src={recipe.image} alt={recipe.title} />
        </div>

        <div className="recipe-card__content">
          <p className="recipe-card__eyebrow">Ricetta vegetariana</p>
          <h3 className="recipe-card__title">{recipe.title}</h3>

          <div className="recipe-card__meta">
            <span>{recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : "Tempo n.d."}</span>
            <span>{recipe.servings ? `${recipe.servings} porzioni` : "Porzioni n.d."}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RecipeCard;
