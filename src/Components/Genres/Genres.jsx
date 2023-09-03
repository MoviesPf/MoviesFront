import React from 'react'
import css from './Genres.module.css'
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

export const Genres = () => {
  const chunkSize = 10;
  const genresChunks = [];

  for (let i = 0; i < genres.length; i += chunkSize) {
    const chunk = genres.slice(i, i + chunkSize);

    genresChunks.push(
      <Carousel.Item>
        <div className={css.backGen}>
          {chunk.map((genre) => (
            <Link style={{ textDecoration: 'none' }}>
              <h3 className={css.genres} key={genre.id}>{genre.name}</h3>
            </Link>
          ))}
        </div>
      </Carousel.Item>
    );
  }

  
const CustomNextArrow = (
  <button
    className={css.nextIcon}
    aria-hidden="true"
    >{">"}</button>
);

const CustomPrevArrow = (
  <button
    className={css.prevIcon}
    aria-hidden="true"
  >{"<"}</button>
);

  return (
    <Carousel 
      wrap={false} 
      indicators={false} 
      className={css.container} 
      interval={null} 
      nextIcon={CustomNextArrow}
      prevIcon={CustomPrevArrow}>

      {genresChunks}
    </Carousel>
  );
};

//   return (
//     <div className={css.backGen}>
//         {genres.map((genre) => (
//         <Link style={{ textDecoration: 'none' }}>
//           <h3 className={css.genres} key={genre.id}>{genre.name}</h3>
//         </Link>
//           ))}
//     </div>
//   )
// }

export default Genders;
