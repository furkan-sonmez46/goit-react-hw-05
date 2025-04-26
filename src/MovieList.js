import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGJhZGY3YzM2MTAzNDVmNjRlY2I5NzM3NTk5NWM3ZCIsIm5iZiI6MTc0NTY1NDk2Ni41NDU5OTk4LCJzdWIiOiI2ODBjOTRiNmU1YzEwNWM4YTU2ZTJjY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SrreoDDgxv1i5LWxz0lyheOsgWgJXlobLRlzz380gxw';

export const fetchMovies = async endpoint => {
  const url = `${API_URL}${endpoint}`;
  const options = {
    headers: {
      Authorization: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchTrendingMovies = () =>
  fetchMovies('/trending/movie/day?language=en-US');
export const fetchMovieDetails = movieId =>
  fetchMovies(`/movie/${movieId}?language=en-US`);
