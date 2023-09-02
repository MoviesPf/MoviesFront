import React from 'react';

const Platforms = ({ platforms, selectedPlatform, onPlatformChange }) => {
  return (
    <div>
      <h2>Plataforma</h2>
      <select value={selectedPlatform} onChange={(e) => onPlatformChange(e.target.value)}>
        <option value="">Todas</option>
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