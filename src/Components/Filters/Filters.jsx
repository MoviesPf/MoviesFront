import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  // filterProgramsByGenre,
  // filterProgramsByPlatform,
  // filterProgramsCombined,
  // getAllMovies,
  // getAllPrograms,
  // getAllSeries,
  getGenres,
  getPlatforms,
  activeFilters,
  programsFilters,
  genresFilters
} from '../../Redux/actions';
import BtnResetFilters from '../Buttons/BtnResetFilters';
import css from './filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();

  const Genres = useSelector((state) => state.genres);
  const Platforms = useSelector((state) => state.platforms);
  const type = useSelector((state) => state.type);
  const actFilt = useSelector((state) => state.activeFilters);

  const [filters, setFilters] = useState({});

  // const chunkSize = 10;
  // const genresChunks = [];

  useEffect(() => {
    if (filters.genres?.length >= 1 || filters.platforms?.length >= 1) {
      dispatch(programsFilters(filters));
      dispatch(activeFilters(filters));
    }
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [filters]);

  const handlerFilters = (type, filter) => {
    if (type === 'genre') {
      if (!filters.genres) {
        setFilters({
          ...filters,
          genres: [filter]
        });
      } else if(!filters.genres.includes(filter)){
        setFilters({
          ...filters,
          genres: [...filters.genres, filter]
        })
      } else {
        const updatedGenres = filters.genres.filter((genre) => genre !== filter);
        setFilters({
          ...filters,
          genres: updatedGenres 
        });
      }
    }

    if (type === 'platforms') {
      if (!filters.platforms) {
        setFilters({
          ...filters,
          platforms: [filter]
        });
      } else if(!filters.platforms.includes(filter)){
      setFilters({
        ...filters,
        platforms: [...filters.platforms, filter]
      })
      } else {
      const updatedPlatforms = filters.platforms.filter((plat) => plat !== filter);
      setFilters({
        ...filters,
        platforms: updatedPlatforms
      });
      }
    }
  };
  // const handleGenreFilter = (genreName) => {
  //   setSelectedGenre(genreName);
  //   if (genreName) {
  //     if (selectedPlatform !== 'all') {
  //       dispatch(filterProgramsCombined(genreName, selectedPlatform, type));
  //     } else {
  //       dispatch(filterProgramsByGenre(genreName, type));
  //     }
  //   } else {
  //     if (selectedPlatform !== 'all') {
  //       dispatch(filterProgramsByPlatform(selectedPlatform, type));
  //     } else {
  //       // Si no se selecciona género ni plataforma, muestra todas las películas
  //       type === 'main'
  //         ? dispatch(getAllPrograms())
  //         : type === 'movie'
  //         ? dispatch(getAllMovies())
  //         : dispatch(getAllSeries());
  //     }
  //   }
  // };

  // const handlePlatformFilter = (platformName) => {
  //   setSelectedPlatform(platformName);
  //   setSelectedGenre(''); // Limpiar la selección de género

  //   if (platformName === 'all') {
  //     // Si se selecciona "All Platforms," muestra todas las películas
  //     type === 'main'
  //       ? dispatch(getAllPrograms())
  //       : type === 'movie'
  //       ? dispatch(getAllMovies())
  //       : dispatch(getAllSeries());
  //   } else {
  //     if (platformName && !selectedGenre) {
  //       dispatch(filterProgramsByPlatform(platformName, type));
  //     } else if (!platformName && selectedGenre) {
  //       dispatch(filterProgramsByGenre(selectedGenre, type));
  //     } else if (platformName && selectedGenre) {
  //       dispatch(filterProgramsCombined(selectedGenre, platformName, type));
  //     }
  //   }
  // };

  // for (let i = 0; i < genres.length; i += chunkSize) {
  //   const chunk = genres.slice(i, i + chunkSize);

  //   genresChunks.push(
  //     <Carousel.Item>
  //       <div className={css.backGen}>
  //         {chunk.map((genre) => (
  //           <h3
  //             key={genre.name}
  //             onClick={() => handlerFilters('genre', genre.name)}
  //             style={{ cursor: 'pointer' }}
  //             className={
  //               selectedGenre === genre.name ? css.selected : css.genres
  //             }
  //           >
  //             {' '}
  //             {genre.name}{' '}
  //           </h3>
  //         ))}
  //       </div>
  //     </Carousel.Item>
  //   );
  // }

  // const CustomNextArrow = (
  //   <button key={'next'} className={css.icon} aria-hidden='true'>
  //     {'>'}
  //   </button>
  // );

  // const CustomPrevArrow = (
  //   <button key={'prev'} className={css.icon} aria-hidden='true'>
  //     {'<'}
  //   </button>
  // );
  return (
    <>
    <div className={css.background}>
      <div className={css.filtersContainer}>
        {Genres?.map((gen) => {
          return (
            <div
              onClick={() => handlerFilters('genre', gen.name)}
              className={filters.genres?.includes(gen.name) ? css.selected : css.filters}
            >
              {gen.name}
            </div>
          );
        })}
      </div>
    </div>
      <br/>
    <div className={css.background}>
      <div className={css.filtersContainer}>
        {Platforms?.map((plat) => {
          return (
            <div
              onClick={() => handlerFilters('platforms', plat.name)}
              className={filters.platforms?.includes(plat.name) ? css.selected : css.filters}
            >
              {plat.name}
            </div>
          );
        })}
      </div>
    </div>
      <br/>
      <div onClick={() =>setFilters({})}>
      <BtnResetFilters/>
      </div>
      {/* <Carousel
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
          onChange={(e) => handlerFilters('platform', e.target.value)}
          className={css.selectPlt}
        >
          <option value='all'>All Platforms</option>
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.name}>
              {platform.name}
            </option>
          ))}
        </select>
      </div> */}
    </>
  );
};
