import React from 'react';

export const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
};