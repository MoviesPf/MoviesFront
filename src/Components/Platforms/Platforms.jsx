import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrograms, filterProgramsByGenre, filterProgramsByPlatform } from '../../Redux/actions';

const Platforms = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs); // Accede al estado de las películas

  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  const handlePlatformChange = (event) => {
    const selectedPlatform = event.target.value;
    setSelectedPlatform(selectedPlatform);
    if (selectedPlatform === '') {
      dispatch(getAllPrograms());
    } else {
      dispatch(filterProgramsByPlatform(selectedPlatform));
    }
  };

  return (
    <div>
      <h2>Plataformas</h2>
      <select value={selectedPlatform} onChange={handlePlatformChange}>
        <option value="">Todas las plataformas</option>
        {/* Asegúrate de tener un estado para las plataformas y mapea las opciones aquí */}
      </select>
    </div>
  );
};

export default Platforms;
