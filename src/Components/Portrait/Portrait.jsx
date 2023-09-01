import React from 'react';
import { Card } from '../../Components/Card/Card';
import css from './Portrait.module.css';

export const Portrait = ({ programs }) => {
    console.log(programs)
    const randomIndex = Math.ceil(Math.random() * programs.data.length)-1;
    const randomMovie = programs.data[randomIndex];
  
  return (
    <section className={css.container}  style={{ backgroundImage: `url(${randomMovie.backdrop})`}}>
    <div className={css.portrait}>
        <div className={css.img}>
            <Card key={randomMovie.id} program={randomMovie}/>
        </div>
        <div className="info">
            <h2>Título</h2>
            <p>Descripción corta</p>
        </div>
    </div>
    </section>
  );
};