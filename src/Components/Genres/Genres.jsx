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


const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]