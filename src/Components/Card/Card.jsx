import React from 'react';
import css from './Card.module.css';
import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultMovie.png"

export const Card = ({ program }) => {
  return (
    <div className={css.container}>
      <Link to={`/detail/${program.id}`}>
        { program.poster === "card"
        
        ? <img className={css.img} src={defaultImg}  alt={program.title}/>

        : program.poster === "https://image.tmdb.org/t/p/w500null" 

        ? <img className={css.img} src={defaultImg}  alt={program.title}/>
        
        : <img className={css.img} src={program.poster} alt={program.title} />
        }
      </Link>
    </div>
  );
};
