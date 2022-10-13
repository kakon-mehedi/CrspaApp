import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="topbar">
          <h3 className="logo">CrspApp</h3>
          <ul className="navbar-list">
            <li className="navbar-item">Job</li>
            <li className="navbar-item">Gallery</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
