import React from "react";
import { PropTypes } from "prop-types";

function ReviewsItem({ item: { author, content } }) {
  return (
    <li>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
export default ReviewsItem;