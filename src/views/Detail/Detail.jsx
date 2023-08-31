import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgramDetail } from "../../Redux/actions";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Detail.module.css";

const Detail = () => {
  const { ProgramsId } = useParams();
  const dispatch = useDispatch();
  const programDetail = useSelector((state) => state.programDetail); 

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId));
  }, [dispatch, ProgramsId]);

  if (!programDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.programDetailContainer} container`}>
      <div className={`${styles.backdropContainer} row`}>
        <img
          className={`col-12 ${styles.backdropImage}`}
          src={programDetail.backdrop}
          alt={`Backdrop of ${programDetail.title}`}
        />
      <div className={`${styles.programInfo} mt-4`}> 
      <h1 className="mb-4">Program Details</h1>
      <p>ID: {programDetail.id}</p>
      <p>Title: {programDetail.title}</p>
      <img src={programDetail.poster} alt={`Poster of ${programDetail.title}`} />
      <p>Overview: {programDetail.overview}</p>
      <p>Release Date: {programDetail.release_date}</p>
      <p>Popularity: {programDetail.popularity}</p>
      <p>Adult Content: {programDetail.adult ? "Yes" : "No"}</p>
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
      </div> 
    </div>
    </div>
  );
};

export default Detail;
