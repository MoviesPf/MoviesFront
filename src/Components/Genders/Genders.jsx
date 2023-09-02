import React from 'react';

const Genders = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div>
      <h2>Género</h2>
      {genres.map((genre) => (
        <div
          key={genre.id}
          className={selectedGenre === genre.name ? 'active' : ''}
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Genders;