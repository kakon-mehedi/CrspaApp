const BASE_URL = "https://api.themoviedb.org/3/";
const QUERY = `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const IMG_BASE_URL = "https://image.tmdb.org/3/";
const IMG_FILE_SIZE = "t/p/original/";

export const MOVIE_DATA_URL = BASE_URL + QUERY;
export const IMG_URL = IMG_BASE_URL + IMG_FILE_SIZE;
