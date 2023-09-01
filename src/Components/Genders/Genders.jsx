import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrograms, filterProgramsByGenre, filterProgramsByPlatform } from '../../Redux/actions';

const Genders = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs); // Accede al estado de las películas
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  const handleGenreClick = (genreName) => {
    setSelectedGenre(genreName);
    dispatch(filterProgramsByGenre(genreName));
  };

  const handleResetFilter = () => {
    setSelectedGenre(null);
    dispatch(getAllPrograms());
  };
  console.log("programs", programs)


  // Extrae los géneros únicos de las películas
  const uniqueGenres = programs.length > 0 ? [...new Set(programs.map((program) => program.genre))] : [];


  return (
    <div>
      <h2>Géneros</h2>
      <ul>
        <li onClick={handleResetFilter} style={{ fontWeight: !selectedGenre ? 'bold' : 'normal' }}>
          Todos los géneros
        </li>
        {uniqueGenres.map((genre) => (
          <li
            key={genre}
            onClick={() => handleGenreClick(genre)}
            style={{ fontWeight: selectedGenre === genre ? 'bold' : 'normal' }}
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genders;

