const API_KEY = "998fbc8cc4dcef8db8fe2fd268686191";

export const requests = {
  feachNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&languager=en-us`,
  feactAnimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  feactComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
