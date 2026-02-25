const API_KEY = "c7f541d1";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`
  );
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}`
  );
  return res.json();
};