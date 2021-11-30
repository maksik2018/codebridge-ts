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


