import React from 'react';

export const Card = ({ poster, title }) => {
  return (
    <div className="card">
      <img src={poster} alt={title} />
    </div>
  );
};