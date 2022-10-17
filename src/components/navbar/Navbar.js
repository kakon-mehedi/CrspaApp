import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="topbar">
          <a href="/" className="logo">
            CrspApp
          </a>

          <nav className="navbar-list">
            <NavLink to="/movies" className="navbar-item">
              MovieApp
            </NavLink>
            <NavLink to="/gallery" className="navbar-item">
              GalleryApp
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
