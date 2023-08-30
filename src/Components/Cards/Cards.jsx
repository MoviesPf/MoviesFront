import React from 'react';
import { Card } from '../Card/Card';

export const Cards = ({ movies }) => {
  return (
    <div>
      <h1>Cards</h1>
      {movies?.data?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};