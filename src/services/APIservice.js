const API_KEY = 'ea236f9607da5e1c117233fca3100ef0';
const API_URL = 'https://api.themoviedb.org/3/';

export const APIservise = {
  getTrendingMovies: async setError => {
    try {
      const response = await fetch(
        `${API_URL}trending/movie/day?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      setError(error.message);
    }
  },

  searchMovieByQueryAndPage: async (query, setError) => {
    try {
      const response = await fetch(
        `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false&year=2001`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      setError(error.message);
    }
  },

  getMovieDetails: async (id, setError) => {
    try {
      const response = await fetch(
        `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movie = await response.json();
      return movie;
    } catch (error) {
      setError(error.message);
    }
  },
  getMovieCredits: async (id, setError) => {
    try {
      const response = await fetch(
        `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      setError(error.message);
    }
  },
  getMovieReviews: async (id, setError) => {
    try {
      const response = await fetch(
        `${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      setError(error.message);
    }
  },
};
