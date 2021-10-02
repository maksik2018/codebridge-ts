import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { getMovieReview } from "../../services/FetchMovies-API";
import { ReviewsList } from "../Reviews";
import Loading from "../Loader/Loader";

function Reviews({ id }) {
  const [review, setReview] = useState(null);
  useEffect(() => {
    const getReview = async (id) => {
      const data = await (await getMovieReview(id)).data;
      setReview(data.results);
    };

    getReview(id);
  }, [id]);

  return (
    <>
      {!review && <Loading />}
      {review && <ReviewsList items={review} />}
    </>
  );
}

Reviews.propTypes = {
  id: PropTypes.number,
};

export default Reviews;