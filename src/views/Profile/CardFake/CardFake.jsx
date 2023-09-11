import React from 'react';
import css from './CardFake.module.css';
import defaultImg from "../../../assets/defaultMovie.png";

export const CardFake = () => {
  return (
    <div className={css.container}>
        <img className={css.img} src={defaultImg}  alt={"fake"}/>
    </div>
  );
};