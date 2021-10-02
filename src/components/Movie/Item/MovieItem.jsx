import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ item: { id, title } }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

export default MovieItem;