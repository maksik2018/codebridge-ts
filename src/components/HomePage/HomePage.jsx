import React, { useEffect, useState } from "react";
import { getTreding } from "../../services/FetchMovies-API";
import Loading from "../Loader/Loader";
import { MovieList } from "../Movie";
import s from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await (await getTreding()).data;
      setMovies(data.results);
    };

    getData();
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {!movies && <Loading />}
      {movies && <MovieList items={movies} />}
    </>
  );
}

export default HomePage;

