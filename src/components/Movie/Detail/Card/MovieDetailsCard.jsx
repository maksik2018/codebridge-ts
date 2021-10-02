import React from "react";
import { PropTypes } from "prop-types";
import s from "./MovieDetailsCard.module.css";

function MovieDetailsCard({
  info: { poster_path, original_title, vote_average, overview, genres },
}) {
  return (
    <div className={s.card}>
      <img
        className={s.poster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <div className={s.info}>
        <h2>{original_title}</h2>
        <p>Vote average: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres.map((genre) => (
            <span className={s.genre} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
MovieDetailsCard.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default MovieDetailsCard;