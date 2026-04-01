import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetail } from "../services/api";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setError("");
        const data = await getRecipeDetail(id);
        setRecipe(data);
      } catch {
        setError("Non sono riuscito a caricare i dettagli della ricetta.");
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (recipe?.title) {
      document.title = recipe.title;
    }
  }, [recipe]);

  if (error) {
    return <p className="status-message status-message--error">{error}</p>;
  }

  if (!recipe) return <p className="status-message">Caricamento ricetta...</p>;

  return (
    <article className="recipe-detail">
      <Link className="back-link" to="/">
        Torna alla home
      </Link>

      <div className="recipe-detail__hero">
        <div className="recipe-detail__content">
          <p className="hero__eyebrow">Dettaglio ricetta</p>
          <h2>{recipe.title}</h2>
          <p className="recipe-detail__summary">
            {recipe.summary?.replace(/<[^>]+>/g, "").slice(0, 210) || "Una ricetta vegetariana da provare."}
            ...
          </p>

          <div className="recipe-detail__meta">
            <span>{recipe.readyInMinutes} minuti</span>
            <span>{recipe.servings} porzioni</span>
            <span>{recipe.healthScore} health score</span>
          </div>
        </div>

        <img className="recipe-detail__image" src={recipe.image} alt={recipe.title} />
      </div>

      <div className="recipe-detail__grid">
        <section className="detail-panel">
          <h3>Ingredienti</h3>
          <ul className="ingredient-list">
            {recipe.extendedIngredients.map((ing) => (
              <li key={ing.id || ing.original}>{ing.original}</li>
            ))}
          </ul>
        </section>

        <section className="detail-panel">
          <h3>Istruzioni</h3>
          {recipe.instructions ? (
            <div
              className="instructions"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
          ) : (
            <p>Le istruzioni complete non sono disponibili per questa ricetta.</p>
          )}
        </section>
      </div>
    </article>
  );
}

export default RecipeDetail;
