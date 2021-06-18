import axios from "axios";
import movieDispatchers from "./dispatchers";

const url = "https://api.themoviedb.org/3/movie/";
const apiKey = "ddfd305324ec5122f8220eb90656a104";

const moviesActions = {
  getPopularMovies: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let popularMovies = res.data.results;
          dispatch(movieDispatchers.getPopularMoviesSuccess(popularMovies));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getTopMovies: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let topMovies = res.data.results;
          dispatch(movieDispatchers.getTopMoviesSuccess(topMovies));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getUpcomingMovies: () => {
    return async (dispatch) => {
      await axios
        .get(`${url}upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let upcomingMovies = res.data.results;
          dispatch(movieDispatchers.getUpcomingMoviesSuccess(upcomingMovies));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getMovie: (id) => {
    return async (dispatch) => {
      await axios
        .get(`${url}${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          let movie = res.data;
          dispatch(movieDispatchers.getMovieSuccess(movie));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  getMovieReviews: (id) => {
    return async (dispatch) => {
      await axios
        .get(`${url}${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          let moviesReviews = res.data.results;
          dispatch(movieDispatchers.getMoviesReviewsSuccess(moviesReviews));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
};

export default moviesActions;
