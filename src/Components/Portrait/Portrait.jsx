import React from 'react';
import { Card } from '../../Components/Card/Card';
import css from './Portrait.module.css';

export const Portrait = ({ movies }) => {

    const randomIndex = Math.floor(Math.random() * movies.data.length);
    const randomMovie = movies.data[randomIndex];

  return (
    <section className={css.container}  style={{ backgroundImage: `url(${randomMovie.backdrop})`}}>
    <div className={css.portrait}>
        <div className={css.img}>
            <Card key={randomMovie.id} movie={randomMovie}/>
        </div>
        <div className="info">
            <h2>Título</h2>
            <p>Descripción corta</p>
        </div>
    </div>
    </section>
  );
};