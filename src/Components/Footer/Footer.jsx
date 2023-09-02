import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
        <Link className={css.linkInfo} style={{ textDecoration: 'none' }} to="/about">About</Link>
        <Link className={css.linkInfo} style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
        <Link className={css.linkDono} style={{ textDecoration: 'none' }} to="/donate">¡You can donate us a popcorn! 🍿</Link>
    </div>
  );
};

export default Footer;
