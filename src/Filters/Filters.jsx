import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProgramsByGenre, filterProgramsByPlatform, filterProgramsCombined, getAllPrograms, getGenres, getPlatforms } from '../Redux/actions';
import css from './filters.module.css';

const Filters = () => {
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('all'); // Inicialmente, "All Platforms" está seleccionado

    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);

    useEffect(() => {
        dispatch(getAllPrograms());
        dispatch(getGenres());
        dispatch(getPlatforms()); 
    }, [dispatch]);

    const handleGenreFilter = (genreName) => {
        setSelectedGenre(genreName);

        if (genreName) {
            if (selectedPlatform !== 'all') {
                dispatch(filterProgramsCombined(genreName, selectedPlatform));
            } else {
                dispatch(filterProgramsByGenre(genreName));
            }
        } else {
            if (selectedPlatform !== 'all') {
                dispatch(filterProgramsByPlatform(selectedPlatform));
            } else {
                dispatch(getAllPrograms()); // Si no se selecciona género ni plataforma, muestra todas las películas
            }
        }
    };

    const handlePlatformFilter = (platformName) => {
        setSelectedPlatform(platformName);
        setSelectedGenre(''); // Limpiar la selección de género

        if (platformName === 'all') {
            // Si se selecciona "All Platforms," muestra todas las películas
            dispatch(getAllPrograms());
        } else {
            if (platformName && !selectedGenre) {
                dispatch(filterProgramsByPlatform(platformName));
            } else if (!platformName && selectedGenre) {
                dispatch(filterProgramsByGenre(selectedGenre));
            } else if (platformName && selectedGenre) {
                dispatch(filterProgramsCombined(selectedGenre, platformName));
            }
        }
    };

    return (
        <div>
            <div className={css.backGen}>
                {genres.map((genre) => (
                    <h3
                        key={genre.id}
                        onClick={() => handleGenreFilter(genre.name)}
                        style={{ cursor: 'pointer' }}
                    >
                        {genre.name}
                    </h3>
                ))}
            </div>
            <div className={css.backPlt}>
                <select
                    value={selectedPlatform}
                    onChange={(e) => handlePlatformFilter(e.target.value)}
                >
                    <option value="all">All Platforms</option>
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

export default Filters;
