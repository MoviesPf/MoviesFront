import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterProgramsByGenre,
  filterProgramsByPlatform,
  filterProgramsCombined,
  getAllMovies,
  getAllPrograms,
  getAllSeries,
  getGenres,
  getPlatforms
} from '../../Redux/actions';
import css from './filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all'); // Inicialmente, "All Platforms" está seleccionado

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const type = useSelector((state) => state.type);

  const chunkSize = 10;
  const genresChunks = [];

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  const handleGenreFilter = (genreName) => {
    setSelectedGenre(genreName);
    if (genreName) {
      if (selectedPlatform !== 'all') {
        dispatch(filterProgramsCombined(genreName, selectedPlatform, type));
      } else {
        dispatch(filterProgramsByGenre(genreName, type));
      }
    } else {
      if (selectedPlatform !== 'all') {
        dispatch(filterProgramsByPlatform(selectedPlatform, type));
      } else {
        // Si no se selecciona género ni plataforma, muestra todas las películas
        type === 'main'
          ? dispatch(getAllPrograms())
          : type === 'movie'
          ? dispatch(getAllMovies())
          : dispatch(getAllSeries());
      }
    }
  };

  const handlePlatformFilter = (platformName) => {
    setSelectedPlatform(platformName);
    setSelectedGenre(''); // Limpiar la selección de género

    if (platformName === 'all') {
      // Si se selecciona "All Platforms," muestra todas las películas
      type === 'main'
        ? dispatch(getAllPrograms())
        : type === 'movie'
        ? dispatch(getAllMovies())
        : dispatch(getAllSeries());
    } else {
      if (platformName && !selectedGenre) {
        dispatch(filterProgramsByPlatform(platformName, type));
      } else if (!platformName && selectedGenre) {
        dispatch(filterProgramsByGenre(selectedGenre, type));
      } else if (platformName && selectedGenre) {
        dispatch(filterProgramsCombined(selectedGenre, platformName, type));
      }
    }
  };

  for (let i = 0; i < genres.length; i += chunkSize) {
    const chunk = genres.slice(i, i + chunkSize);

    genresChunks.push(
      <Carousel.Item>
        <div className={css.backGen}>
            {chunk.map((genre) => (
                <h3 key={genre.name} onClick={() => handleGenreFilter(genre.name)} style={{ cursor: 'pointer' }} className={selectedGenre === genre.name ? css.selected : css.genres}> {genre.name} </h3>
            ))}
        </div>
      </Carousel.Item>
    );
  }

  const CustomNextArrow = (
    <button key={'next'} className={css.icon} aria-hidden='true'>
      {'>'}
    </button>
  );

  const CustomPrevArrow = (
    <button key={'prev'} className={css.icon} aria-hidden='true'>
      {'<'}
    </button>
  );

  return (
    <div className={css.background}>
      <Carousel
        key={'genres'}
        wrap={false}
        indicators={false}
        className={css.container}
        interval={null}
        nextIcon={CustomNextArrow}
        prevIcon={CustomPrevArrow}
      >
        {genresChunks}
      </Carousel>
      <div className={css.backPlt}>
        <select
          value={selectedPlatform}
          onChange={(e) => handlePlatformFilter(e.target.value)}
          className={css.selectPlt}
        >
          <option value='all'>All Platforms</option>
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.name}>
              {platform.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
