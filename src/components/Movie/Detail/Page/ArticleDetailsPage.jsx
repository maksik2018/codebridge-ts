import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";
import { getArticleDetails } from "../../../../services/FetchArticles-API";
import { ArticleDetailsCard } from "../..";
import s from "./ArticleDetailsPage.module.css";
import Loading from "../../../Loader/Loader";

function ArticleDetailsPage() {
   const [info, setInfo] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getInfo = async (id) => {
      const data = await (await getArticleDetails(id)).data;
      setInfo(data);
          };

    getInfo(id);
  }, [id]);

  const handleGoBackButton = () => {
    history.goBack();
  };

  return (
    <>
      {!info && <Loading />}
      {info && (
        <>
          <ArticleDetailsCard info={info} />
          <button className={s.btn} onClick={handleGoBackButton}>
            <BiArrowBack size="20" />
            back to Homepage
          </button>
          
          </>
      )}
    </>
  );
}

export default ArticleDetailsPage;


//тоже самое, но тут возврат по кнопке home, а не на шаг назад.//

// import React from "react";
// import { FcHome } from "react-icons/fc";
// import { useState, useEffect } from "react";
// import { useHistory, useLocation, useParams } from "react-router-dom";
// import { getMovieDetails } from "../../../../services/FetchMovies-API";
// import { MovieDetailsCard } from "../../../Movie";
// import s from "./MovieDetailsPage.module.css";
// import AdditionalInfo from "../../AdditionalInfo/AdditionalInfo";
// import Loading from "../../../Loader/Loader";

// function MovieDetailsPage() {
//   const [info, setInfo] = useState(null);
//   const history = useHistory();
//   const location = useLocation();
//   const { id } = useParams();
//   // console.log({ ...location.state });


//   useEffect(() => {
//     const getInfo = async (id) => {
//       const data = await (await getMovieDetails(id)).data;
//       setInfo(data);
//     };

//     getInfo(id);
//   }, [id]);
  
//   const handleGoHome = () => {
//     history.push(location.state?.from ? location.state.from : "/");
    
//   };

//   return (
//     <>
//       {!info && <Loading />}
//       {info && (
//         <>
//           <button className={s.btn} onClick={handleGoHome}>
//             <FcHome size="20" />
//             Back to Home
//           </button>
//           <MovieDetailsCard info={info} />
//           <AdditionalInfo id={info.id} />
//         </>
//       )}
//     </>
//   );
// }

// export default MovieDetailsPage;