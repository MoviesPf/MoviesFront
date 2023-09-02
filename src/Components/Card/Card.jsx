import React from 'react';
import css from './Card.module.css';
import { Link } from "react-router-dom";

export const Card = ({ poster, title }) => {
  return (
    <div className="card">
      <img src={program.poster} alt={program.title} />
    </div>
  );
};