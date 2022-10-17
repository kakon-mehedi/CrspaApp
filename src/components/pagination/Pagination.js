import React from "react";
import "./pagination.css";

function Pagination({ currentPage, setCurrentPage }) {
  const handlePreviousPageClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="pagination-container">
      <button className="pagination-btn" onClick={handlePreviousPageClick}>
        Previous
      </button>
      <button className="pagination-btn" onClick={handleNextPageClick}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
