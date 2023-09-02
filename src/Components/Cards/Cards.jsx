import React from 'react';
import { Card } from '../Card/Card';
import css from './Cards.module.css';

export const Cards = ({ programs }) => {
  return (
    <div className={css.container}>
      <div className={css.carousel}>
      <button className={css.prevB}>{"<"}</button>
      <div className={css.cardsMap}>
      {programs?.data?.map((program) => (
        <Card key={program.id} program={program} />
        ))}
      </div>
      <button className={css.nextB}>{">"}</button>
      </div>
    </div>
  );
};