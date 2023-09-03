import React, { useState } from 'react';
import styled from 'styled-components'

const SearchInput = styled.input `
  border: none; 
  background-color: #5353534e; 
  padding: 2px;
  color: white;
  border-radius: 10px; 
  outline: none;
  margin-bottom: 5px;
`
const SearchButton = styled.button`
  background: #0f8071; 
  border-radius: 10px; 
  border: 2px solid transparent;
  color: #ffffff;
  margin-left: 5px;
  margin-right: 35px;
  font-size: 16px;
`


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
    <form onSubmit={handleSearch}>
      <SearchInput
        type="text"
        id="movieName"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <SearchButton type="submit">Search</SearchButton>
    </form>
  );
};