import React, { useEffect, useReducer } from "react";
import Navbar from "../../components/navbar/Navbar";
import { IMG_URL, MOVIE_DATA_URL } from "./API_INFO";
import { INITIAL_STATE, movieReducer } from "./MovieReducer";

import "./movies.css";

function Jobs() {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    fetch(MOVIE_DATA_URL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <div className="container">
      <Navbar />
      {state.isLoading ? <h1> Loading... </h1> : ""}
      <div className="movie-list">
        {state.movies.results &&
          Object.values(state.movies.results).map((movie, index) => (
            <div className="movie" key={index}>
              <div className="movie-img-section">
                <img
                  src={IMG_URL + movie.poster_path}
                  alt="movie img"
                  className="movie-img"
                />
              </div>
              <p className="movie-title">{movie.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Jobs;
