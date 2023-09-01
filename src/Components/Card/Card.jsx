import React from 'react';

export const Card = ({ program }) => {
  return (
    <div className="card">
      <img src={program.poster} alt={program.title} />
    </div>
  );
};