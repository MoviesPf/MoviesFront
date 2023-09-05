import React from 'react';
import { Card } from '../../Components/Card/Card';
import css from './Portrait.module.css';
import defaultImg from "../../assets/defaultMovie.png"


export const Portrait = ({ programs }) => {
    const randomIndex = Math.floor(Math.random() * programs.data.length);
    const randomMovie = programs.data[randomIndex];

    let imageP =  randomMovie.poster === "https://image.tmdb.org/t/p/w500null"  
    ? defaultImg
    : randomMovie.poster


  
  return (
    <div className={css.container}>
      
      <div className={css.background} style={{ backgroundImage: `url(${randomMovie.backdrop})`}}></div>
      
      <div className={css.portrait}>
        
        <div className={css.divCard}>
            <img src={imageP}/>
        </div>

        <div className={css.info}>
            <h2>{randomMovie.title}</h2>
            <p>{randomMovie.overview}</p>
            <div className={css.genres}>
              {
                randomMovie.Genres.map((genre) => {
                  return <p key={genre.name}>{genre.name}</p>
                })
              }
            </div>
        </div>
        
      </div>

    </div>
  );
};