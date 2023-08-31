import React from 'react';
import css from './Card.module.css';
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  return (
    <div className={css.container}>
      <Link>
      <img className={css.img} src={movie.poster} alt={movie.title} />
      </Link>
    </div>
  );
};