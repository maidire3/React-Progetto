import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import favicon from "./assets/Vegan_friendly_icon.svg.png";

function App() {
  const location = useLocation();

  useEffect(() => {
    let faviconLink = document.querySelector("link[rel='icon']");

    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.setAttribute("rel", "icon");
      document.head.appendChild(faviconLink);
    }

    faviconLink.setAttribute("type", "image/png");
    faviconLink.setAttribute("href", favicon);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home";
    }
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-header__kicker">Green Kitchen</p>
        <h1>Vegetarian Recipes</h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
