import React from 'react';
import css from './Card.module.css';
import { Link } from "react-router-dom";

export const Card = ({ program }) => {
  return (
    <div className={css.container}>
      <Link to={`/detail/${program.id}`}>
      <img className={css.img} src={program.poster} alt={program.title} />
      </Link>
    </div>
  );
};