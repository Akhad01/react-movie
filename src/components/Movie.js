import React from "react";
import styles from "../components/Movie.module.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ title, overview, poster_path, vote_average }) => {
  return (
    <div className={styles.movie}>
      <img src={`${IMG_API}${poster_path}`} alt="img" />
      <div className={styles.movie_into}>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className={styles.movie_over}>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
