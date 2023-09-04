import React from 'react';
import css from './SearchedCard.module.css';
import { Link } from "react-router-dom";

export const SearchedCard = ({ program }) => {
  return (
    <div className={css.container}>
      <Link className={css.link} to={`/detail/${program.id}`}>
        <div className={css.allInfo}>
          <div className={css.imagen}>
            <img className={css.img} src={program.poster} alt={program.title} />
          </div>
          <div className={css.titleOverview}>
            <h1>{program.title}</h1>
            <p>{program.overview}</p>
            <div className={css.genres}>
              {
                program.Genres.map((genre) => {
                  return <p key={genre.name}>{genre.name}</p>
                })
              }
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};