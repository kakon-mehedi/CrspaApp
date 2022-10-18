import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <>
      <div className={menuClicked ? "navbar active" : "navbar"}>
        <div className="desktop-menu-bar">
          <a href="/" className="logo">
            CrspApp
          </a>

          <nav className="navbar-list-desktop">
            <NavLink to="/movies" className="navbar-item">
              MovieApp
            </NavLink>
            <NavLink to="/gallery" className="navbar-item">
              GalleryApp
            </NavLink>
          </nav>
        </div>

        <Menu
          className={menuClicked ? "show-none" : "menu-icon"}
          onClick={handleMenuClick}
        />
        <Close
          className={menuClicked ? "menu-icon" : "show-none"}
          onClick={handleMenuClick}
        />

        <div className="mobile-menu-bar">
          <nav className={menuClicked ? "navbar-list-mobile" : "show-none"}>
            <NavLink to="/home" className="navbar-item">
              TodoApp
            </NavLink>
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
