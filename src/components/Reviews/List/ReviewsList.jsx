import React from "react";
import { PropTypes } from "prop-types";
import { ReviewsItem } from "../../Reviews";
import NoReviews from "../NoReviews/NoReviews";

function ReviewsList({ items }) {
  return items.length > 0 ? (
    <ul>
      {items.map((item, idx) => (
        <ReviewsItem key={idx} item={item} />
      ))}
    </ul>
  ) : (
    <NoReviews />
  );
}

ReviewsList.propTypes = {
  items: PropTypes.array,
};

export default ReviewsList;