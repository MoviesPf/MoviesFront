import React from 'react';
import css from "./DetailContent.module.css";

const DetailContent = ({ programDetail, limitedCast }) => {
  return (
    <div className={css.detailContent}>
      {programDetail.Genres && programDetail.Genres.length > 0 && (
        <div>
          <p>Genres:</p>
          <ul>
            {programDetail.Genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      {programDetail.Platforms && programDetail.Platforms.length > 0 && (
        <div>
          <p>Platforms:</p>
          <ul>
            {programDetail.Platforms.map((platform) => (
              <li key={platform.id}>{platform.name}</li>
            ))}
          </ul>
        </div>
      )}
      {Array.isArray(limitedCast) && limitedCast.length > 0 && (
        <div>
          <p>Cast:</p>
          <ul>
            {limitedCast.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
        </div>
      )}
      {programDetail.companies && programDetail.companies.length > 0 && (
        <div>
          <p>Companies:</p>
          <ul>
            {programDetail.companies.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailContent;