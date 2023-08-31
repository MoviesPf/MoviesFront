import React from 'react';
import { Card } from '../Card/Card';
import css from './Cards.module.css';

export const Cards = ({ movies }) => {
  return (
    <div className={css.container}>
      <div className={css.carousel}>
      <button className={css.prevB}>{"<"}</button>
      <div className={css.cardsMap}>
      {movies?.data?.map((movie) => (
        <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <button className={css.nextB}>{">"}</button>
      </div>
    </div>
  );
};