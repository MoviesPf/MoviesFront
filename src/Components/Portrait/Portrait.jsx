import React from 'react';
import css from './Portrait.module.css';
import defaultPortrait from "../../assets/defaultMovie.png"
import defaultBackground from "../../assets/defaultBackground.png"
import {minutesToHoursAndMinutes} from "../../utils/minutesToHoursAndMinutes"
import { Link } from 'react-router-dom';

export const Portrait = ({ programs }) => {
    const randomIndex = Math.floor(Math.random() * programs.length);
    const randomMovie = programs.length ? programs[randomIndex] : {
      title: "Not Programs Found, try another genre/platform.",
      poster: defaultPortrait,
      backdrop: defaultPortrait,
      overview: "",
      release_date: "",
      Genres: [],
      Platforms: [],
    };

    let imageP =  randomMovie.poster === "https://image.tmdb.org/t/p/w500null"  
    ? defaultPortrait
    : randomMovie.poster

    let imageBack = randomMovie.backdrop === "https://image.tmdb.org/t/p/w500null" 
    ? defaultBackground
    : randomMovie.backdrop

    const year = new Date(randomMovie.release_date).getFullYear();

    let runtimeFormatted = 'N/A';

    if (randomMovie.type === 'movie' && !isNaN(randomMovie.runtime)) {
      const runtimeInMinutes = randomMovie.runtime;
      runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
    } else {
      runtimeFormatted = `${randomMovie.seasons} Seasons ${randomMovie.episodes} Episodes`;
    }
    
    return (
    <div className={css.all}>
      <div className={css.background} style={{ backgroundImage: `url(${imageBack})`}}></div>
      <div className={css.container}>
          <div className={css.divCard}>
            {
              randomMovie.id 
              ? <Link to={`/detail/${randomMovie.id}`}>
                  <img className={css.img}src={imageP}/>
                </Link>
              : <img className={css.img}src={imageP}/>
            }
          </div>

          <div className={css.info}>
            <div className={css.firstInfo}>
              <h2>{randomMovie.title}</h2>
                {
                  randomMovie.id 
                  ? <div className={css.yearRuntime}>
                      <h5>{year}</h5>
                    <h5>{runtimeFormatted}</h5>
                    </div>
                  : <p></p>
                }
            </div>
            <p>{randomMovie.overview}</p>
            <div className={css.etiquetas}>
              <div className={css.genres}>
                {
                  randomMovie.Genres.length 
                  ? randomMovie.Genres.map((genre) => {
                    return <p key={genre.name}>{genre.name}</p>
                  })
                  :<p></p>
                }
              </div>
              <div className={css.platforms}>
                {
                  randomMovie.Platforms.length
                  ? randomMovie.Platforms.map((platform) => {
                    return <p key={platform.name}>{platform.name}</p>
                  })
                  : <p></p>
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};