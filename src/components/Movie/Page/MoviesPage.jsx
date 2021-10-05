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

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = e.target.elements.searchValue.value;
//     history.push({
//       ...location,
//       search: `query=${query}`,
//     });
//     setValue(query);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="type to search movies..."
//           className={styles.input}
//           name="searchValue"
//           type="text"
//           autoComplete="off"
//         ></input>
//         <button className={styles.btn} type="submit">
//           {/* <HiSearch size={25} color="darkred" /> */}
//         </button>
//       </form>
//       {movies && <MovieList movies={movies} />}
      
//     </>
//   );
// }


export default MoviesPage;

