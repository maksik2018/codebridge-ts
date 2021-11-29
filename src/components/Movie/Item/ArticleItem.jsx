import React from "react";
import s from "./ArticleItem.module.css";
import { FiArrowRight } from "react-icons/fi";
import {AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import Highlighter from "react-highlight-words";



function ArticleItem({ item,filter}) {
  // console.log(item, "gq");
  const { title, summary, imageUrl, publishedAt, id } = item;
  // const { title, imageUrl, publishedAt, id } = item;
  // console.log(moment(Date.parse(new Date(publishedAt))).format("MMM Do YYYY"), 'publishedAt');
  const availableDate = moment(Date.parse(new Date(publishedAt))).format("MMMM Do YYYY")
  // console.log(filter,'filter')
  // const re = /with/gi;
  //   console.log(summary.replace(re, `lolo`),'summargggggggg}</b>`)')

  // const changedSummary = filter ? summary.replace(re, `LOLO`) : summary
  

  return (
    <li className={s.item}>
      
      <div className={s.wrapper}>
        <div className={s.overlay}>
        <img className={s.poster}
          src={imageUrl}
          alt=""
                />
        </div>
        <div className={s.dateWrapper}>
        <p className={s.icon}><AiOutlineCalendar size="13.33" /></p>
        <p className={s.date}>{availableDate}</p>
      </div>
       
 <Highlighter className={s.title}
          // activeClassName={s.active}
          // highlightClassName="YourHighlightClass"
          searchWords={[filter]}
          autoEscape={true}
          // textToHighlight={(title, summary)}
           textToHighlight={title}
      
  />

        {/* <h2 className={s.title}>
          {title}
        </h2>  */}
         <p className={s.zagolovok}>{summary} </p> 


       
               <Link className={s.link} to={`/articles/${id}`}> <p className={s.readMore}> Read more </p>
         <FiArrowRight size="20" />
       </Link>
     
    </div>
    </li>
     
  );
}



export default ArticleItem;