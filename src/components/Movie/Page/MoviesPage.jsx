import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { MovieList } from "..";
import { searchMovies } from "../../../services/FetchMovies-API";
import { SearchForm } from "../../Search";
// import styles from "./MoviesPage.module.css";

function MoviesPage() {
  
  const [movies, setMovies] = useState("");
  const [value, setValue] = useState([]);
  
  const location = useLocation();
  const history = useHistory();
  
  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("query");
    setValue(queryValue);
  },[location.search])

  useEffect(() => {
    const getMovies = async () => {
      const data = await (await searchMovies(value)).data;
       
      setMovies(data.results);
    };
    if (value) getMovies();
  }, [value]);

  const onSearch = (value) => {
  
    history.push({
      pathname: location.search,
      
      search: `query=${value}`,
    });
      setValue(value);
  };

   
  
  return (
    <div>
      <SearchForm onSubmit={onSearch} />

      {movies && <MovieList items={movies} />}
      
     
    </div>
  );
}


export default MoviesPage;

