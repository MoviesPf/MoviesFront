import React from 'react';
import css from './SearchedCard.module.css';
import { Link } from "react-router-dom";
import defaultImg from "../../assets/defaultMovie.png"
import { useDispatch } from 'react-redux';
import { getProgramDetail } from '../../Redux/actions';

export const SearchedCard = ({ program, setshow, show }) => {
  const dispatch = useDispatch()

  const togleShow = () => {
    setshow(false)
    dispatch(getProgramDetail(program.id))
  }
  return (
      <Link className={css.link}  onClick={() => togleShow} to={`/detail/${program.id}`}>
        <div className={css.allInfo}>

          <div className={css.imagen}>
            { program.poster === "https://image.tmdb.org/t/p/w500null" 
            ? <img className={css.img} src={defaultImg}  alt={program.title}/>
            : <img className={css.img} src={program.poster} alt={program.title} />
            }
          </div>

          <div className={css.data}>
            <h1>{program.title}</h1>
            <div className={css.overview}>
              <p>{program.overview}</p>
            </div>
            <div className={css.items}>
              {
                program.Genres.map((genre) => {
                  return <p key={genre.name}>{genre.name}</p>
                })
              }
            </div>
            <div className={css.items}>
              {
                program.Platforms.map((platform) => {
                  return <p ket={platform.name}>{platform.name}</p>
                })
              }
            </div>
          </div>

        </div>
      </Link>
  );
};