import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="all_links">
        <Link to="/" className="links">
          <img
            src="https://zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white-2048x629.png"
            alt="Amazon Prime"
            className="logo"
          />
        </Link>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/movies/categories/popular" className="links">
          Movies
        </NavLink>
        <NavLink to="/series/categories/popular" className="links">
          TV Series
        </NavLink>
        <NavLink to="/search/movie" className="links">
          Search
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
