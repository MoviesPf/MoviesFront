import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getAllPrograms, getGenres, getPlatforms, activeFilters, programsFilters, getAllMovies, getAllSeries } from '../../Redux/actions';

import BtnResetFilters from '../Buttons/BtnResetFilters';
import css from './filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();

  const Genres = useSelector((state) => state.genres);
  const Platforms = useSelector((state) => state.platforms);
  const typeProg = useSelector((state) => state.type);

  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (filters.genres?.length >= 1 || filters.platforms?.length >= 1) {
      dispatch(programsFilters(filters));
      dispatch(activeFilters(filters));
    } else {
        if (typeProg === 'main'){ dispatch(getAllPrograms()); } 
        if (typeProg === 'movies'){ dispatch(getAllMovies()); }
        if (typeProg === 'series'){ dispatch(getAllSeries()); }
    }
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [filters]);

  useEffect(() => {
    setFilters({})
  },[typeProg])

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
    </>
  );
};