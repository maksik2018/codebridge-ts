import React from "react";
import { PropTypes } from "prop-types";
import { MovieItem } from "../../Movie";
import s from "./MovieList.module.css";

function MovieList({ items }) {
  const isEmpty = items.length === 0;

  return isEmpty ? (
    <p>No movie found! Please change your request and try again</p>
  ) : (
    <ul className={s.list}>
      {items.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
        
    </ul>
  );
}

MovieList.propTypes = {
  items: PropTypes.array,
};
export default MovieList;
