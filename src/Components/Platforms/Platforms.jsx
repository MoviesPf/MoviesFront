import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlatforms, filterProgramsByPlatform, filterProgramsCombined } from '../actions/actions';

const Platforms = () => {
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.platforms);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const handlePlatformFilter = (platformName) => {
    setSelectedPlatform(platformName);
    dispatch(filterProgramsByPlatform(platformName));
    // Si se ha seleccionado un género, también aplicamos el filtro combinado
    if (selectedGenre) {
      dispatch(filterProgramsCombined(selectedGenre, platformName));
    }
  };

  return (
    <div>
      <h3>Platforms</h3>
      <select onChange={(e) => handlePlatformFilter(e.target.value)} value={selectedPlatform}>
        <option value="">All Platforms</option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.name}>
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Platforms;
