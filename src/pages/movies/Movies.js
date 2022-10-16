import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { IMG_URL, MOVIE_DATA_URL, SEARCH_BASE_URL } from "./API_INFO";
import { INITIAL_STATE, movieReducer } from "./MovieReducer";

import "./movies.css";

function Jobs() {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchUrl, setFetchUrl] = useState(MOVIE_DATA_URL);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    fetch(searchQuery ? fetchUrl : MOVIE_DATA_URL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, [searchQuery]);

  useEffect(() => {
    const SEARCH_URL =
      SEARCH_BASE_URL + searchQuery + "&page=1&include_adult=false";
    console.log(searchQuery);

    if (searchQuery !== "") {
      setFetchUrl(SEARCH_URL);
    } else {
      setFetchUrl(MOVIE_DATA_URL);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <Navbar />
      {state.isLoading ? <h1> Loading... </h1> : ""}

      <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={handleInputChange}
        />
      </div>
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
