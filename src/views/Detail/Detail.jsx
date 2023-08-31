import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Detail.module.css";

const Detail = () => {
  const { ProgramsId } = useParams(); // Obtiene el ID del programa desde la URL
  const [program, setProgram] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/programs/${ProgramsId}`)
      .then((response) => {
        setProgram(response.data.data); 
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching program details:", error);
      });
  }, [ProgramsId]);


  if (!program) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.programDetailContainer} container`}>
      <div className={`${styles.backdropContainer} row`}>
        <img
          className={`col-12 ${styles.backdropImage}`}
          src={program.backdrop}
          alt={`Backdrop of ${program.title}`}
        />
      <div className={`${styles.programInfo} mt-4`}> 
      <h1 className="mb-4">Program Details</h1>
      <p>ID: {program.id}</p>
      <p>Title: {program.title}</p>
      <img src={program.poster} alt={`Poster of ${program.title}`} />
      <p>Overview: {program.overview}</p>
      <p>Release Date: {program.release_date}</p>
      <p>Popularity: {program.popularity}</p>
      <p>Adult Content: {program.adult ? "Yes" : "No"}</p>
      {program.Genres && program.Genres.length > 0 && (
        <div>
          <p>Genres:</p>
          <ul>
            {program.Genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      {program.Platforms && program.Platforms.length > 0 && (
        <div>
          <p>Platforms:</p>
          <ul>
            {program.Platforms.map((platform) => (
              <li key={platform.id}>{platform.name}</li>
            ))}
          </ul>
        </div>
      )}
      </div> 
    </div>
    </div>
  );
};

export default Detail;
