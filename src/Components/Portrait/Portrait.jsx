import React from 'react';
import css from './Portrait.module.css';
import defaultImg from "../../assets/defaultMovie.png"
import {minutesToHoursAndMinutes} from "../../utils/minutesToHoursAndMinutes"
import { Link } from 'react-router-dom';

export const Portrait = ({ programs }) => {
    const randomIndex = Math.floor(Math.random() * programs.data.length);
    const randomMovie = programs.data[randomIndex];

    let imageP =  randomMovie.poster === "https://image.tmdb.org/t/p/w500null"  
    ? defaultImg
    : randomMovie.poster

    const year = new Date(randomMovie.release_date).getFullYear();

    let runtimeFormatted = 'N/A';

    if (randomMovie.type === 'movie' && !isNaN(randomMovie.runtime)) {
      const runtimeInMinutes = randomMovie.runtime;
      runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
    } else {
      runtimeFormatted = `${randomMovie.seasons} Seasons ${randomMovie.episodes} Episodes`;
    }
  
  return (
    <div className={css.container}>
      
      <div className={css.background} style={{ backgroundImage: `url(${randomMovie.backdrop})`}}></div>
      
      <div className={css.portrait}>
        
        <div className={css.divCard}>
          <Link to={`/detail/${randomMovie.id}`}>
            <img className={css.img}src={imageP}/>
          </Link>
        </div>

        <div className={css.info}>
          <div className={css.firstInfo}>
            <h2>{randomMovie.title}</h2>
            <div className={css.yearRuntime}>
            <h5>{year}</h5>
            <h5>{runtimeFormatted}</h5>
            </div>
          </div>

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