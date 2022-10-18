import React, { useEffect, useReducer, useState } from "react";
import ModalImage from "react-modal-image";

import Navbar from "../../components/navbar/Navbar";
import { PHOTOS_URL } from "./API_INFO";
import "./gallery.css";
import { imagesReducer, INITIAL_STATE } from "./GalleryReducer";

function Gallery() {
  const [state, dispatch] = useReducer(imagesReducer, INITIAL_STATE);
  const [query, setQuery] = useState("dog");
  const [fetchUrl, setFetchUrl] = useState(null);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    fetch(fetchUrl ? fetchUrl : PHOTOS_URL + query)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, [fetchUrl]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchBtnClick = () => {
    if (query !== "") {
      setFetchUrl(PHOTOS_URL + query);
    } else {
      setFetchUrl(null);
    }
  };

  return (
    <div className="container">
      <Navbar />
      {state.isLoading ? (
        // <img src="../../../public/images/loading.gif" alt="loadingImg" />
        <h1>Loading...</h1>
      ) : (
        ""
      )}
      <div className="gallery-search-section">
        <input
          type="text"
          className="gallery-search-input"
          onChange={handleInputChange}
        />
        <button className="gallery-search-btn" onClick={handleSearchBtnClick}>
          Search
        </button>
      </div>
      <div className="images-container">
        {state.images.results &&
          Object.values(state.images.results).map((imgLink, index) => (
            <ModalImage
              key={index}
              small={imgLink.urls.regular}
              large={imgLink.urls.regular}
              alt="horsePhoto"
              className="gallery-img"
            />
          ))}
      </div>
    </div>
  );
}

export default Gallery;
