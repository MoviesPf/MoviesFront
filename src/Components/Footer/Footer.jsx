import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate">¡You can donate us a popcorn!</Link>
      </div>
    </footer>
  );
};

export default Footer;
