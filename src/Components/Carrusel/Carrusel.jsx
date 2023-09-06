import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Card } from '../Card/Card'
import css from './Carrusel.module.css';


export const Carrusel = ({ programs }) => {
  
  const chunkSize = 6;
  const cardChunks = [];

  for (let i = 0; i < programs.length; i += chunkSize) {
    const chunk = programs.slice(i, i + chunkSize);

    cardChunks.push(
      <Carousel.Item>
        <div className={css.crsl}>
        {chunk.map((program) => (
          <Card key={program.id} program={program} />
        ))}
        </div>
      </Carousel.Item>
    );
  }

const CustomNextArrow = (
  <button
    className={css.nextIcon}
    aria-hidden="true"
    >{">"}</button>
);

const CustomPrevArrow = (
  <button
    className={css.prevIcon}
    aria-hidden="true"
  >{"<"}</button>
);

  return (
    <Carousel 
      wrap={true} 
      indicators={false} 
      className={css.container} 
      interval={10000} 
      nextIcon={CustomNextArrow}
      prevIcon={CustomPrevArrow}
    >
      {cardChunks}
    </Carousel>
  );
};
