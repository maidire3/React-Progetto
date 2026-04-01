import { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    onSearch(trimmedValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Cerca ricette vegetariane..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button" type="submit">
        Cerca
      </button>
    </form>
  );
}

export default SearchBar;
