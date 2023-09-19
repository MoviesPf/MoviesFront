import React from 'react';
import css from './Advertisement.module.css';
import { Link } from "react-router-dom";

export const Advertisement = () => {
  return (
    <Link to={`/donate`} style={{ textDecoration: 'none' }}>
        <div className={css.container}>
            <div className={css.background}></div>
            <div className={css.title}>Donate now !</div>
            <div className={css.subtitle}>Support us and get a beret</div>
        </div>
    </Link>
  );
};
