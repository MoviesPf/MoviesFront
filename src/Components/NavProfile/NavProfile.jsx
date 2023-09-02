import React from 'react';
import { Link } from 'react-router-dom';

const NavProfile = () => {
  return (
    <nav className="navbar">
      <h3 className="nav-item">
        <Link to="/profile">Profile</Link>
      </h3>
      <h3 className="nav-item">
        <Link to="/reviews">Reviews</Link>
      </h3>
      <h3 className="nav-item">
        <Link to="/favs">Favs</Link>
      </h3>
      <h3 className="nav-item">
        <Link to="/watched">Watched</Link>
      </h3>
      <h3 className="nav-item">
        <Link to="/watchlist">Watchlist</Link>
      </h3>
    </nav>
  );
};

export default NavProfile;

