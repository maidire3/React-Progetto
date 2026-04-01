import axios from "axios";

const API_KEY = "8eef129f028143259ec668d34d22ca3a";

export const searchRecipes = async (query) => {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    {
      params: {
        query: query,
        diet: "vegetarian",
        number: 10,
        apiKey: API_KEY,
      },
    }
  );

  return response.data.results;
};