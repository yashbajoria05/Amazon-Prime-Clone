export const key = process.env.REACT_APP_API_KEY;
export const base_url = "https://api.themoviedb.org/3";
export const img_url = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?api_key=${key}&language=en-US`,
  fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${key}&with_networks=213`,
  fetchTopRated: `${base_url}/movie/top_rated?api_key=${key}`,
  fetchPopular: `${base_url}/movie/popular?api_key=${key}`,
  fetchTvTop_rated: `${base_url}/tv/top_rated?api_key=${key}`,
  fetchTvPopular: `${base_url}/tv/popular?api_key=${key}`,
  fetchActionMovies: `${base_url}/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumantaries: `${base_url}/discover/movie?api_key=${key}&with_genres=99`,
};
export default requests;
