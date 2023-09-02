import React, { useState } from 'react';
import css from './SearchBar.module.css'

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={css.container} onSubmit={handleSearch}>
      <input
        type="text"
        id="movieName"
        className={css.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className={css.icon} type="submit">&#128270;</button>
    </form>
  );
};