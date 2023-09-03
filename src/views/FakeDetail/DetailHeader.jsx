import React from 'react';
import css from "./DetailHeader.module.css";

const DetailHeader = ({ programDetail, year, runtimeFormatted }) => {
  return (
    <div className={css.detailHeader}>
       <div className={css.poster}>
         <img src={programDetail.poster} alt={`Poster of ${programDetail.title}`} />
       </div>
     <div className={css.info}>
      <h2>{programDetail.title}</h2>
      <p>Type: {programDetail.type}</p>
      <p>Overview: {programDetail.overview}</p>
      <p>{year}</p>
      <p>Popularity: {programDetail.popularity}</p>
      <p>Adult Content: {programDetail.adult ? 'Yes' : 'No'}</p>
      {programDetail.type === 'movie' && (
          <p className={css.Runtime}>Runtime: {String(runtimeFormatted)}</p>
          )}

      {programDetail.type === 'serie' && (
          <div>
          <p>Seasons: {programDetail.seasons}</p>
          <p>Episodes: {programDetail.episodes}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default DetailHeader;