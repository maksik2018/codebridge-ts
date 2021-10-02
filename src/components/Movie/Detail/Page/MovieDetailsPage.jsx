import React from "react";
import { FcLeft } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../../../services/FetchMovies-API";
import { MovieDetailsCard } from "../../../Movie";
import s from "./MovieDetailsPage.module.css";
import AdditionalInfo from "../../AdditionalInfo/AdditionalInfo";
import Loading from "../../../Loader/Loader";

function MovieDetailsPage({ match }) {
  const [info, setInfo] = useState(null);
  const history = useHistory();
  const location = useLocation();
  // console.log({ ...location.state });


  useEffect(() => {
    const getInfo = async (id) => {
      const data = await (await getMovieDetails(id)).data;
      setInfo(data);
    };

    getInfo(match.params.id);
  }, [match.params.id]);

  const handleGoHome = () => {
    history.push(location.state?.from ? location.state.from : "/");
  };

  return (
    <>
      {!info && <Loading />}
      {info && (
        <>
          <button className={s.btn} onClick={handleGoHome}>
            <FcLeft size="20" />
            Go Home
          </button>
          <MovieDetailsCard info={info} />
          <AdditionalInfo id={info.id} />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;


//тоже самое, но тут возврат по кнопке не на home, а на шаг назад.//
// import React from "react";
// import { FcLeft } from "react-icons/fc";
// import { useState, useEffect } from "react";
// import { getMovieDetails } from "../../../../services/FetchMovies-API";
// import { MovieDetailsCard } from "../../../Movie";
// import s from "./MovieDetailsPage.module.css";
// import AdditionalInfo from "../../AdditionalInfo/AdditionalInfo";
// import Loading from "../../../Loader/Loader";

// function MovieDetailsPage({ match, history }) {
//   const [info, setInfo] = useState(null);

//   useEffect(() => {
//     const getInfo = async (id) => {
//       const data = await (await getMovieDetails(id)).data;
//       setInfo(data);
//     };

//     getInfo(match.params.id);
//   }, [match.params.id]);

//   const handleGoBackButton = () => {
//     history.goBack();
//   };

//   return (
//     <>
//       {!info && <Loading />}
//       {info && (
//         <>
//           <button className={s.btn} onClick={handleGoBackButton}>
//             <FcLeft size="20" />
//             Go back
//           </button>
//           <MovieDetailsCard info={info} />
//           <AdditionalInfo id={info.id} />
//         </>
//       )}
//     </>
//   );
// }

// export default MovieDetailsPage;