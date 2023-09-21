import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        <Link className={css.link} style={{ textDecoration: 'none' }} to="/about">About</Link>
      </div>
        <Link className={css.link} style={{ textDecoration: 'none' }} to="/donate">¡You can donate us a popcorn! 🍿</Link>
    </div>
  );
};