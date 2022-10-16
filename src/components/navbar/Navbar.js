import React from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="topbar">
          <h3 className="logo" onClick={() => navigate("/")}>
            CrspApp
          </h3>
          <ul className="navbar-list">
            <li className="navbar-item" onClick={() => navigate("/movies")}>
              Movies
            </li>
            <li className="navbar-item" onClick={() => navigate("/gallery")}>
              Gallery
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
