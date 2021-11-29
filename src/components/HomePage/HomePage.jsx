import React, { useEffect, useState } from "react";
import { getArticles } from "../../services/FetchArticles-API";
import Loading from "../Loader/Loader";
import { ArticleList } from "../Movie";
// import { useLocation, useHistory } from "react-router-dom";
// import { searchArticles } from "../../services/FetchArticles-API";
import { SearchForm } from "../Search";
import s from "./HomePage.module.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);
  
 
  useEffect(() => {

    ( async()=> {
      const data =  (await getArticles()).data;
      setArticles(data);
          
    })();

  }, [result]);

  const handleChange = async (ev) => {
    if (setValue.trim === "") return ;
    setValue(ev.target.value);
    const data = (await getArticles(ev.target.value)).data;

    const result = data.length;
    if (result === 0)
      {
          toast.error(
            "Sorry, there are no articles matching your search query. Please try again.",
            {
              autoClose: 3000,
            }
          );
        }
    setArticles(data);
    setResult(result);
       
  }
  
  
  return (
    <>
      <div className={s.wrapper}>
      <h2 className={s.title}>Filter by keywords</h2>
        <SearchForm value={value} change={handleChange} />
        <ToastContainer />
        <p className={s.results}>Results:{result}</p>
        {!articles && <Loading />}
        {articles && <ArticleList items={articles} filter={value} />}
        </div>
    </>
  );
}

export default HomePage;



