import React from 'react'
import { Card } from '../Card/Card'

export const Cards = () => {
  return (
    <div>
        <h1>Cards</h1>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
        <Card movie={movieData}/>
    </div>
    
  )
}

const movieData = {
  "adult": false,
  "backdrop": "https://image.tmdb.org/t/p/w185/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
  "id": 569094,
  "original_language": "en",
  "original_title": "Spider-Man: Across the Spider-Verse",
  "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
  "popularity": 2374,
  "poster": "https://image.tmdb.org/t/p/w185/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  "release_date": "2023-05-31",
  "title": "Spider-Man: Across the Spider-Verse",
  "video": false,
  "vote_average": 8.5,
  "vote_count": 3625
};