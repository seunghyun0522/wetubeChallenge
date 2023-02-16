import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  let movies = getMovies();
  return res.render("index", { pageTitle: "movies", movies });
};
export const movieDetail = (req, res) => {
  const id = req.params.id;
  const movie = getMovieById;
  if (movie) {
    return res.render("movieDetail", { pageTitle: movie.title, movie });
  }
};
export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  let movies = [];
  if (year) {
    movies = getMovieByMinimumYear(year);
    return res.render("filter", {
      pageTitle: `Searching By Year : ${year}`,
      movies,
    });
  } else {
    movies = getMovieByMinimumRating(rating);
    return res.render("filter", {
      pageTitle: `Searching By Rating : ${rating}`,
      movies,
    });
  }
};
