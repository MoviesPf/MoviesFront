import React, { useState } from 'react';
import { getProgramByName } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import css from './SearchBar.module.css'

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProgramByName(title));
    setTitle("");
  };

  return (
    // <form className={css.container} onSubmit={handleSearch}>
    //   <input type="text" id="movieName" className={css.input} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
    //   <button className={css.icon} type="submit"> &#128270; </button>
    // </form>
    <form class={css.searchBar} onSubmit={handleSubmit}>

      <input 
      class="form-control form-control-sm ml-3 w-75" 
      type="text" 
      placeholder="Search" 
      aria-label="Search" 
      onChange={handleInputChange} 
      value={title} 
      required 
      />

      <button 
      class="btn btn-outline-success btn-rounded btn-sm my-0" 
      type="submit"
      >Search</button>

    </form>
  );
};