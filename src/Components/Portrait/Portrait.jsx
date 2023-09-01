import React from 'react';
import { Card } from '../../Components/Card/Card';
import css from './Portrait.module.css';

export const Portrait = ({ programs }) => {
    const randomIndex = Math.floor(Math.random() * programs.data.length);
    const randomMovie = programs.data[randomIndex];
  
  return (
    <div className={css.container}>
      <div className={css.background} style={{ backgroundImage: `url(${randomMovie.backdrop})`}}></div>
      <div className={css.portrait}>
        <div className={css.divCard}>
            <img src={randomMovie.poster}/>
        </div>
        <div className={css.info}>
            <h2>{randomMovie.title}</h2>
            <p>{randomMovie.overview}</p>
      </div>
    </div>
    </div>
  );
};