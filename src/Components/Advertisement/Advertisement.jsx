import React from 'react';
import css from './Advertisement.module.css';
import { Link } from "react-router-dom";

export const Advertisement = () => {
  return (
    <Link to={`/donate`} style={{ textDecoration: 'none' }}>
        <div className={css.container}>
            <h1 className={css.title}>Donate us a popcorn</h1>
            <h2 className={css.subtitle}>and get a beret</h2>
        </div>
    </Link>
  );
};
