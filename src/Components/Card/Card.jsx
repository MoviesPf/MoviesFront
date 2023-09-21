import React from 'react';
import css from './Card.module.css';
import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultMovie.png"
import { useDispatch } from 'react-redux';
import { getProgramDetail } from '../../Redux/actions';

export const Card = ({ program }) => {
  const dispatch = useDispatch()

  return (
    <div className={css.container} onClick={() => dispatch(getProgramDetail(program.id))}>
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
