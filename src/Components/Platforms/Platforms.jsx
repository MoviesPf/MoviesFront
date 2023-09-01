import React, { useState } from 'react';
import css from './Platforms.module.css';

const Platforms = ({ handleFilters }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('platforms');

  const handlePlatformChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPlatform(selectedValue);
    handleFilters(selectedValue); 
  };

  return (
    <div className={css.backPlt}>
      <select className={css.selectPlt} name="platforms" value={selectedPlatform} onChange={handlePlatformChange}>
        <option value="platforms" disabled>
        Platforms
        </option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.name}>
            {platform.name}
          </option>
        ))}
      </select>
    </div>
  );
};
const platforms =  [
      { "id": 1, "name": "Netflix" },
      { "id": 2, "name": "Star Plus" },
      { "id": 3, "name": "HBO Max" },
      { "id": 4, "name": "Disney+" },
      { "id": 5, "name": "Apple TV+" },
      { "id": 6, "name": "Amazon Prime Video" },
      { "id": 7, "name": "Paramount+" },
      { "id": 8, "name": "AMC+" },
      { "id": 9, "name": "BritBox" },
      { "id": 10, "name": "CuriosityStream" },
      { "id": 11, "name": "Discovery+" },
      { "id": 12, "name": "FlixNow" },
      { "id": 13, "name": "IMDb TV" },
      { "id": 14, "name": "Mubi" },
      { "id": 15, "name": "Shudder" },
      { "id": 16, "name": "Sling TV" },
      { "id": 17, "name": "TCM Classic Movies" },
      { "id": 18, "name": "The Criterion Channel" },
      { "id": 19, "name": "The Roku Channel" },
      { "id": 20, "name": "Tubi" },
      { "id": 21, "name": "Vudu" },
      { "id": 22, "name": "YouTube Premium" },
      { "id": 23, "name": "Hulu" },
      { "id": 24, "name": "Peacock" },
      { "id": 25, "name": "Google Play Movies & TV" },
      { "id": 26, "name": "Crave" },
      { "id": 27, "name": "Starz" }
    ]


export default Platforms;