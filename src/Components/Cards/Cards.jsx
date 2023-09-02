import React from 'react';
import  Card  from '../Card/Card';

export const Cards = ({ programs }) => {
  return (
    <div>
      <h1>Cards</h1>
      {programs?.data?.map((program) => (
        <Card key={program.id} movie={program} />
      ))}
    </div>
  );
};