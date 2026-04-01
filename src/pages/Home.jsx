import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../services/api";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      setIsLoading(true);
      setError("");
      setHasSearched(true);

      const results = await searchRecipes(query);
      setRecipes(results);
    } catch {
      setRecipes([]);
      setError("Qualcosa e' andato storto durante la ricerca. Riprova tra poco.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Fresh, green, simple</p>
          <h2 className="hero__title">Ricette vegetariane dal look naturale e pulito</h2>
          <p className="hero__text">
            Cerca un ingrediente o un piatto e scopri ricette con immagini, tempi
            e porzioni in una griglia responsive.
          </p>
        </div>

        <div className="hero__badge">
          <span>10 ricette per ricerca</span>
          <strong>Tema veggie</strong>
        </div>
      </section>

      <section className="search-section">
        <div className="section-heading">
          <h3>Trova la tua prossima idea in cucina</h3>
          <p>Premi invio o clicca sul bottone per visualizzare le card.</p>
        </div>

      <SearchBar onSearch={handleSearch} />

        {isLoading && <p className="status-message">Sto cercando ricette vegetariane...</p>}
        {error && <p className="status-message status-message--error">{error}</p>}
        {!isLoading && !error && hasSearched && recipes.length === 0 && (
          <p className="status-message">Nessuna ricetta trovata. Prova con un altro termine.</p>
        )}

        {!isLoading && recipes.length > 0 && (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
